/*----------------------------------------------------------------------------
    Sep 30 2019   Initial
    Oct 12 2019   Work starts for the new cams implementation
                  Trying to put all these packages together and
                  understand how it works! Attend the express training here : 
                  https://www.youtube.com/watch?v=L72fhGm1tfE&list=WL&index=18&t=0s
    Oct 15 2019   Work on PATHS and middleware chaining
    Oct 16 2019   training follow up
    Oct 22 2019   Initial Logger message
                  install cors
    Oct 23 2019   Initial log trace
                  Install a response header middleware
    Oct 31 2019   Start work on users apis
    Nov 27 2019   Test mongologgerclass
    Dec 03 2019   favicon
    Dec 06 2019   Category for log message in mongo
    Jan 20 2020   Static path for png files
    Jan 30 2020   Logs services added 
    Feb 26 2020   Change cors client site identification
    Jun 20 2021   RECO. Deploy from new cams2021 project
    Jul 17 2021   Reorg. cams-boostrap to cams2021
----------------------------------------------------------------------------*/
const allroutes = require('./node-router/allroutes')

const express = require('express');
const passport = require('passport');

const logger =  require('./modules/core/services/logger');
const httplogger = require('./modules/core/services/httplogger');
const responseheader = require('./modules/core/services/responseheader');
const properties =  require('./modules/core/services/properties');
const corshelper = require('./modules/core/services/corshelper');
const cors = require('cors');
const mongologgerclass = require('./modules/core/classes/mongologgerclass');

const Version = 'server.js:1.39, Jul 17 2021';

const app = express();
//---------------------------------------------------------------------------------------------------------
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded( {extended: false}));
//---------------------------------------------------------------------------------------------------------
// Set a static folder containing html files
//---------------------------------------------------------------------------------------------------------
app.use(express.static('public'));
//---------------------------------------------------------------------------------------------------------
// Add a second path for the root css file (main.css)
// The additional 1st parameter of app.use is the virtual path
// This path is just used by public/ static files to get the css file
//---------------------------------------------------------------------------------------------------------
app.use('/style', express.static( __dirname + '/css'));
app.use('/images', express.static( __dirname + '/assets'));
//---------------------------------------------------------------------------------------------------------
// Test a simple middleware function tracking requests made on the server : see the httplogger.js source file
// The imported function is installed in the MW chain
//---------------------------------------------------------------------------------------------------------
if (properties.httptrace) app.use(httplogger);
//---------------------------------------------------------------------------------------------------------
// favicon request 
//---------------------------------------------------------------------------------------------------------
app.use(function(req, res, next) {  // For the favicon boring request error
  if (req.originalUrl && req.originalUrl.split("/").pop() === "favicon.ico") {
    return res.sendStatus(204);
  }
  return next();
});
//---------------------------------------------------------------------------------------------------------
// Install middleware responsible for response header settings
//---------------------------------------------------------------------------------------------------------
app.use(responseheader);
//---------------------------------------------------------------------------------------------------------
// passport middleware
app.use(passport.initialize()); 
app.use(passport.session());
//---------------------------------------------------------------------------------------------------------
// get my logger
//---------------------------------------------------------------------------------------------------------
const logparams = logger.getLoggerInfo();
logger.info('***************************************************************');
logger.info('********************** RESTART ********************************');
logger.info('***************************************************************');
logger.info(Version);
logger.info('Logger version    : ' + logparams.version);
logger.info('Log level         : ' + logparams.loglevel);
//---------------------------------------------------------------------------------------------------------
// Load api routes from various providers
//---------------------------------------------------------------------------------------------------------
logger.info("---------------------------------------------------------");
logger.info("load express routes");
logger.info("---------------------------------------------------------");
allroutes.loadRoutes(app);
//----------------------------------------------------------------------------
// Cross-Origin Resource Sharing
// https://github.com/expressjs/cors/blob/master/README.md
//----------------------------------------------------------------------------
logger.info("---------------------------------------------------------");
logger.info('CORS Security setting: webserver node');
logger.info("---------------------------------------------------------");
logger.info('Site : ' + corshelper.getClientSite());
app.use(cors(corshelper.getCORS()));
// Log a start message in mongo
const mongolog = new mongologgerclass(Version, 'NODESERVER');
mongolog.informational('Started');
// Let's start the server
app.listen(properties.nodeserverport, ()=>{
  logger.info('Node.js now listening on port ' + properties.nodeserverport);
  mongolog.informational('Node.js now listening on port ' + properties.nodeserverport);
});

