const log4js = require('log4js');
const log4js_config= require('../config/log4js_configuration.json');
log4js.configure(log4js_config);

module.exports = log4js;
