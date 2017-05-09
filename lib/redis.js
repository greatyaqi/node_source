const Redis = require('ioredis');
const config = require("../config/config");
const redis = new Redis({
    port: config.redis.port,
    host: config.redis.host
});
