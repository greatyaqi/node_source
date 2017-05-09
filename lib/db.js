const Sequelize = require("sequelize");
const config = require("../config/config");
const log4js = require('../middlewares/logger');
const loggerError = log4js.getLogger("error");
const loggerInfo = log4js.getLogger('info');
const db = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, {
    host: config.mysql.host,
    dialect: 'mysql',
    port: config.mysql.port,
    pool: {},
    timestamps: false,
    //控制sql日志输出
    logging: true,
    timezone: '+08:00'
});

db.authenticate().then(function() {
        loggerInfo.info('Connection has been established successfully.');
    })
    .catch(function(err) {
        loggerError.error('Unable to connect to the database:', err);
    });

module.exports = db;