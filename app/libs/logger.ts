import winston from 'winston';
import fs from 'fs';
import config from '../config';
import { boostLogger } from './boost-logger';
import 'winston-daily-rotate-file';

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

export default logger;
