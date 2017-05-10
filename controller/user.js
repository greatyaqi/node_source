/**
 * Created by ka on 2017/5/10.
 */

const userServer = require("../server/user");
const moment = require("moment");
const uuidV4 = require("uuid/v4");
//const redis = require('../lib/redis');
const userController = {
    sign: async(ctx) => {
        let userName = ctx.request.body.userName;
        let passWord = ctx.request.body.passWord;
        let createTime = moment().format('YYYY MM DD HH:mm:ss');
        let user = {};
        user.userName = userName;
        user.passWord = passWord;
        user.createTime = createTime;
        await userServer.sign(user);
        //ctx.session.user = uuidV4();
        //ctx.session.user = uuidV4();
        //redis.set(ctx.session.user, JSON.stringify(user));
    }
}

module.exports = userController;