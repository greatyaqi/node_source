process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const Koa = require('koa');
const router = require('./router/index');
const Bodyparser = require('koa-bodyparser');
const session = require("koa-session2");
const redisStore = require('./util/store');
const app = new Koa();
app.keys = ['some secret hurr'];
const CONFIG = {
    key: 'koa:sess',
    /** (string) cookie key (default is koa:sess) */
    maxAge: 86400000,
    /** (number) maxAge in ms (default is 1 days) */
    overwrite: true,
    /** (boolean) can overwrite or not (default true) */
    httpOnly: true,
    /** (boolean) httpOnly or not (default true) */
    signed: true,
    /** (boolean) signed or not (default true) */
    store: new redisStore()
};
app.use(session({
    store: new redisStore()
}));
app.use(Bodyparser());
app.use(router.routes());

app.listen(3000);