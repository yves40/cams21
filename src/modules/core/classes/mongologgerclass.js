//----------------------------------------------------------------------------
//    mongologgerclass.js
//
//    Mar 24 2019   Initial
//    Mar 25 2019   WIP on methods
//    Mar 27 2019   Playing with async & Promise...
//    Nov 27 2019   Get service in cams-bootstrap4 project
//    Dec 06 2019   New fields and new constructor
//                  Add parameters to log methods
//    Dec 09 2019   Add a user log access method
//    Dec 11 2019   log lines limit
//    Dec 13 2019   Manage severity level for logs
//    Dec 17 2019   Check severity level for logs is processed properly
//    Dec 19 2019   Remove some log trace
//    Jan 30 2020   Method to get all users and application logs
//    Feb 05 2020   Filter on logs with severity
//    Feb 07 2020   Filter on logs with severity and message
//    Feb 12 2020   Filter on logs with dates
//    Jul 17 2021   Remove mongo connection from the constructor. 
//                  Connects on 1st call to log()
//----------------------------------------------------------------------------
"use strict"
const MongoLogModel = require('../model/mongoLogModel');
const mongo = require ('../services/mongodb');
const Mongolog = require ('../model/mongoLogModel');
const logger = require ('../services/logger');
const datetime = require('../services/datetime');

//----------------------------------------------------------------------------
// The class 
//----------------------------------------------------------------------------
module.exports = class mongologger {
  constructor (modulename = 'Unspecified', 
              category = 'Unspecified', 
              email = 'Irelevant' ) {
      this.Version = 'mongologgerclass:1.60, Jul 17 2021 ';
      this.DEBUG = 0;
      this.INFORMATIONAL = 1;
      this.WARNING = 2;
      this.ERROR = 3;
      this.FATAL = 4;
      this.modulename = modulename;   // Used to track the calling component
      this.email = email;
      this.category = category;
      this._DB = null;
  }
  //----------------------------------------------------------------------------
  async log(message, severity = this.DEBUG) {
    if(this._DB === null) {
      this._DB = mongo.getMongoDBConnection();
    }
    message = '[' + this.levelToString(severity) + '] ' + message;
    let themessage = new MongoLogModel( { module: this.modulename,
                                    category: this.category,
                                    email: this.email,
                                    message: message, 
                                    timestamp: Date.now(),
                                    severity: severity, });
    await themessage.save().then( value => {
        return;
    })
    .catch( value => {
      logger.error(themessage.message + ' : -----------------  Not Saved !!!!!!!!!!!!!');
    }); 
  }
  //----------------------------------------------------------------------------
  // Log methods
  //----------------------------------------------------------------------------
  debug(message, category = undefined, email = undefined) {
    if(category !== undefined) this.category = category;      
    if(email !== undefined) this.email = email;      
    this.log(message, this.DEBUG);
  }
  informational(message, category = undefined, email = undefined) {
      if(category !== undefined) this.category = category;      
      if(email !== undefined) this.email = email;      
      this.log(message, this.INFORMATIONAL);
  }
  warning(message, category = undefined, email = undefined) {
    if(category !== undefined) this.category = category;      
    if(email !== undefined) this.email = email;      
    this.log(message, this.WARNING);
  }
  fatal(message, category = undefined, email = undefined) {
    if(category !== undefined) this.category = category;      
    if(email !== undefined) this.email = email;      
    this.log(message, this.FATAL);
  }
  error(message, category = undefined, email = undefined) {
    if(category !== undefined) this.category = category;      
    if(email !== undefined) this.email = email;      
  this.log(message, this.ERROR);
  }
  //----------------------------------------------------------------------------
  levelToString(level) {
    switch (level) {
        case this.DEBUG: return 'DBG';
        case this.INFORMATIONAL: return 'INF';
        case this.WARNING: return 'WRN';
        case this.ERROR: return 'ERR';
        case this.FATAL: return 'FTL';
        default: return 'FTL';
    }
  };  
  //----------------------------------------------------------------------------
  // Get some user logs
  // Pass user email and optional lines limit for the returned data
  // Severity if passed defines the log type we want in DIWEF
  //----------------------------------------------------------------------------
  getUserLogs(useremail, lineslimit, severity = undefined) {
    return new Promise((resolve, reject) => {
      (async () => {
        let query = Mongolog.find({ });
        query.select('module category email message timestamp severity').sort({timestamp: -1});  // Sorted by most recent dates
        query.select().where({ 'email' : { '$regex' : useremail, '$options' : 'i' } });
        // Check required severity
        if(severity !== undefined) {
          query.select().where('severity').in(severity);
        }
        // Check line limit
        if (lineslimit !== undefined) query.limit(lineslimit);
        await query.exec(function(err, thelist) {
          if (err) reject(err);
          else {
            resolve(thelist);
          }
        })
      })();
    })
  }
  //----------------------------------------------------------------------------
  // Get some user logs
  // Pass user email and optional lines limit for the returned data
  // Severity if passed defines the log type we want in DIWEF
  //----------------------------------------------------------------------------
  getLogs(lineslimit = undefined, severity = undefined, 
        messagefilter = undefined, 
        startdate = datetime.getDateBrowserFormat(), enddate = datetime.getDateBrowserFormat(-10))
  {
    return new Promise((resolve, reject) => {
      let startdateQ, enddateQ;
      if (startdate) {
        startdateQ = new Date(startdate);
        startdateQ.setDate(startdateQ.getDate() + 1);
      } 
      if (enddate) {
        enddateQ = new Date(enddate);
      } 
      (async () => {
        let query = Mongolog.find({ });
        query.select('module category email message timestamp severity').sort({timestamp: -1});  // Sorted by most recent dates
        // Check required severity and message
        query.select().where('severity').in(severity).where({ 'message' : { '$regex' : messagefilter, '$options' : 'i' } });
        // Check required dates
        if(startdate && enddate) {  
          query.select().where('timestamp').gte(enddateQ).lte(startdateQ);
          console.log(`************ from ${startdateQ} to ${enddateQ}`);
        }
        else {
          // Any recent time ? Must be : after MAR 31 
          if(enddate) {  
            query.select().where('timestamp').gte(enddateQ);
            console.log(`************ to ${enddateQ}`);
          }
          // Any oldest time ? Must be : before MAR 31
          if(startdate) {  
            query.select().where('timestamp').lte(startdateQ);
            console.log(`************ from ${startdateQ}`);
          }
        }
        
        // Check line limit
        if (lineslimit !== undefined) query.limit(lineslimit);
        await query.exec(function(err, thelist) {
          if (err) reject(err);
          else {
            resolve(thelist);
          }
        })
      })();
    })
  }
  //----------------------------------------------------------------------------
  getVersion() {
    return this.Version;
  }
};
