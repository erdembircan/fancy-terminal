const { generateConfigs } = require('./build');
const configData = require('./configs.json');

const tempConfigs = generateConfigs(configData.configs);

const prodConfigs = tempConfigs.map(({ input, output }) => ({ ...input, ...{ output } }));

module.exports = prodConfigs;
