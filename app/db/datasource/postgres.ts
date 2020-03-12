import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';

import config from '../../config';

const sequelize = new Sequelize(
  config.get('DB_NAME'),
  config.get('DB_USER'),
  config.get('DB_PASS'),
  {
    host: config.get('DB_HOST'),
    port: config.get('DB_PORT'),
    dialect: 'mysql',
    operatorsAliases: Op,
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);

export default sequelize;
