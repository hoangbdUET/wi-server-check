let ping = require('ping');
let logger = require('./logger');
let host = '27.0.12.166';
let moment = require('moment-timezone');

setInterval(pingServer, 10000);

function pingServer() {
    ping.sys.probe(host, function (isAlive) {
        if (isAlive) {
            console.log(moment().tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm:ss.SSSS') + ": Server still alive");
            logger.info(host + " is alive");
        } else {
            console.log(moment().tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm:ss.SSSS') + ": Server still alive");
            logger.error(host + " is dead");
        }
    });
}
