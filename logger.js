'use strict';
let logger = require('winston');
require('winston-daily-rotate-file');
let fs = require('fs');
let mkdirp = require("mkdirp");
let moment = require('moment-timezone');
mkdirp('logs', function (err) {
    if (err) console.log(err);
});
logger = new (logger.Logger)({
    transports: [
        new (logger.transports.Console)({
            name: 'console-log'
        }),
        new (logger.transports.DailyRotateFile)({
            filename: 'logs/' + './info.log',
            datePattern: 'yyyy-MM-dd.',
            prepend: true,
            level: 'info',
            name: 'info-logger',
            maxFiles: 5,
            timestamp() {
                return moment().tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm:ss.SSSS');
            },
            formatter(params) {
                // Options object will be passed to the format function.
                // It's general properties are: timestamp, level, message, meta.
                const meta = params.meta !== undefined ? util.inspect(params.meta, {
                    depth: null
                }) : '';
                return `[${params.timestamp}] [${params.level}] [${pkg.name}] *** ${params.message} ${meta}`;
            }
        }),
        new (logger.transports.DailyRotateFile)({
            filename: 'logs/' + './error.log',
            datePattern: 'yyyy-MM-dd.',
            prepend: true,
            level: 'error',
            name: 'error-logger',
            maxFiles: 5,
            timestamp() {
                return moment().tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm:ss.SSSS');
            },
            formatter(params) {
                // Options object will be passed to the format function.
                // It's general properties are: timestamp, level, message, meta.
                const meta = params.meta !== undefined ? util.inspect(params.meta, {
                    depth: null
                }) : '';
                return `[${params.timestamp}] [${params.level}] [${pkg.name}] *** ${params.message} ${meta}`;
            }
        })
    ]
});

module.exports = logger;