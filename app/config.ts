import nconf from 'nconf';

nconf
  .argv()
  .env(['NODE_ENV', 'PORT'])
  .file({ file: './config.json' })
  .defaults({
    PORT: 3000,
  });

export default nconf;
