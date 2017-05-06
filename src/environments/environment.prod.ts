const packageJson = require('../../package.json');

export const environment = {
  version: packageJson.version,
  production: true
};
