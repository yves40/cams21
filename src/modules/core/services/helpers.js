//----------------------------------------------------------------------------
//    helpers.js
//
//    Oct 29 2019   Initial
//    Oct 31 2019   basic syntax error
//    Nov 20 2019   Async call function
//    Jan 19 2020   Debounce function
//----------------------------------------------------------------------------
const Version = "helpers:1.03, jan 19 2020 ";


//----------------------------------------------------------------------------
// Super sleep function ;-)
// Must be called from an ASYNC function
//----------------------------------------------------------------------------
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//----------------------------------------------------------------------------
// Get IP from a request
//----------------------------------------------------------------------------
function getIP(req) {
    var ip = req.headers['x-forwarded-for'] || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    return ip.replace(/f/gi, '').replace(/:/gi, '');
}

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };

function debounce (fn, delay) {
    var timeoutID = null
    return function () {
      clearTimeout(timeoutID)
      var args = arguments
      var that = this
      timeoutID = setTimeout(function () {
        fn.apply(that, args)
      }, delay)
    }
}

module.exports = {
    sleep,
    getIP,
    asyncMiddleware,
    debounce,
}
