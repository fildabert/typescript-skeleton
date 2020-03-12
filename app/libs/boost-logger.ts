import BoostLogger from 'boost-module-logger';
import config from '../config';


const hostService = config.get('SERVICE_LOGGER'); // service logger endpoint
const service = config.get('SERVICE');

const boostLogger = new BoostLogger(hostService, service);

function pingLogger() {
  return new Promise((resolve, reject) => {
    let responseLogger;
    boostLogger
      .ping()
      .then((resp: { success: boolean; }) => {
        responseLogger = resp.success || false;
        // eslint-disable-next-line no-console
        console.log('Boost Logger Response', responseLogger);
        resolve(responseLogger);
      })
      .catch((err: any) => {
        // eslint-disable-next-line no-console
        console.error(err);
        responseLogger = false;
        reject(err);
      });
  });
}

export {
  boostLogger,
  pingLogger,
};
