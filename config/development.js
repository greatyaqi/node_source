"use strict";
const port = Number.parseInt(process.env.PORT) || 3000;

module.exports = {
    // mysql:{
    //     database:"******",
    //     username:"******",
    //     password:"******",
    //     host: '******',
    //     port: 3306,
    // },

    mysql: {
        database: "app",
        username: "root",
        password: "root",
        host: '120.77.63.42',
        port: 3306,
    },
    redis:{
        host:"120.77.63.42",
        port:6379
    },
    port: port,
}