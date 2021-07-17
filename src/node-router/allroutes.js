/* eslint-disable no-unused-vars */
//----------------------------------------------------------------------------
//    allroutes.js
//
//    Jul 17 2021   Initial.
//----------------------------------------------------------------------------

const fs = require('fs');
const path = require('path');
const logger = require('../modules/core/services/logger');
const Version = 'allroutes.js:1.03, Jul 17 2021 ';
const dirpath = path.normalize(path.join(__dirname, '../modules'));

function loadRoutes(app) {
  let searchpath = path.normalize(dirpath + '/core/noderouter'); 
  fs.readdirSync(searchpath).forEach( function (file) {
    if( file.substr(-3) === '.js' ) {
      logger.info("Loading " + searchpath + path.sep + file);
      app.use(require(searchpath + path.sep + file));
    }
  });
  searchpath = path.normalize(dirpath + '/users/noderouter'); 
  fs.readdirSync(searchpath).forEach( function (file) {
    if( file.substr(-3) === '.js' ) {
      logger.info("Loading " + searchpath + path.sep + file);
      app.use(require(searchpath + path.sep + file));
    }
  });
  
/*
  app.use(require('../modules/core/noderouter/api'));      // api testing middleware
  app.use(require('../modules/core/noderouter/mongoapi')); // mongodb services
  app.use(require('../modules/core/noderouter/logsapi')); // Logs services
  app.use(require('../modules/users/noderouter/userapi')); // users services
*/

}

module.exports = {
  loadRoutes
}
