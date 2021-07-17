//----------------------------------------------------------------------------
//    allroutes.js
//
//    Jul 17 2021   Initial.
//----------------------------------------------------------------------------

function loadRoutes(app) {
  app.use(require('../modules/core/noderouter/api'));      // api testing middleware
  app.use(require('../modules/core/noderouter/mongoapi')); // mongodb services
  app.use(require('../modules/core/noderouter/logsapi')); // Logs services
  app.use(require('../modules/users/noderouter/userapi')); // users services
}

module.exports = {
  loadRoutes
}
