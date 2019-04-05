const { generateConfigs } = require('./build');
const configData = require('./configs.json');

const { input, output } = generateConfigs(configData.configs)[0];

const devConfig = { ...input, ...{ output } };

module.exports = devConfig;
