import config from '../config';

export {};
const winston = require('winston');
require('winston-daily-rotate-file');
const fs = require('fs');
const { boostLogger } = require('./boost-logger');

const logDir = `${config.get('LOG_DIR')}/`;

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const transport = new winston.transports.DailyRotateFile({
  filename: '%DATE%.log',
  dirname: logDir,
  datePattern: 'YYYY-MM-DD-HH',
  maxSize: '20m',
});

const winstonLogger = new winston.Logger({
  transports: [transport],
});

const logger = {
  info: (params: any) => {
    winstonLogger.info(JSON.stringify(params));
    boostLogger.info(params);
  },
  error: (params: any) => {
    winstonLogger.info(JSON.stringify(params));
    boostLogger.error(params);
  },
};

module.exports = logger;
