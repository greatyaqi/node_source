process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const Koa = require('koa');
const Bodyparser = require('koa-bodyparser');
const db = require('./lib/db')
const  redis = require('./lib/redis');


const app = new Koa();

// response
app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.listen(3000);