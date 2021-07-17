/* eslint-disable no-unused-vars */
//----------------------------------------------------------------------------
//    allroutes.js
//
//    Jul 17 2021   Initial.
//----------------------------------------------------------------------------

const fs = require('fs');
const path = require('path');
const logger = require('../modules/core/services/logger');
const Version = 'allroutes.js:1.04, Jul 17 2021 ';
const dirpath = path.normalize(__dirname);

/*
  Search for all noderouter directories from @
  Outer loop to get 1st level dir
  Inner one to scan for a noderouter dir
  No recursive search
*/
function loadRoutes(app) {

  const rootpath = require('app-root-path');
  let searchpath = path.normalize(rootpath.path + path.sep + 'src/modules');
  fs.readdirSync(searchpath).forEach( function (file) {
    let foundfile = searchpath + path.sep + file;
    let stat = fs.lstatSync(foundfile);
    if (stat.isDirectory()) {
      let routerfolder = path.normalize(foundfile + '/noderouter');
      if(fs.existsSync(routerfolder)) {
        fs.readdirSync(routerfolder).forEach( function (file) {
          if( file.substr(-3) === '.js' ) {
            logger.info("Loading node routes from " + routerfolder + path.sep + file);
            app.use(require(routerfolder + path.sep + file));
          }
        });
      }
    }
  });

}

module.exports = {
  loadRoutes
}
