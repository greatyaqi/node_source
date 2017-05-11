/**
 * Created by ka on 2017/5/10.
 */

const userServer = require("../server/user");
const moment = require("moment");
const Session = require("../util/session");
const userController = {

    sign: async(ctx) => {
        try {
            let userName = ctx.request.body.userName;
            let passWord = ctx.request.body.passWord;
            let createTime = moment().format('YYYY-MM-DD HH:mm:ss');
            let user = {};
            user.userName = userName;
            user.passWord = passWord;
            user.createTime = createTime;
            await userServer.sign(user);
            delete user.createTime;
            delete user.passWord;
            let session = new Session();
            let sessionId = session.setSession(JSON.stringify(user));
            session.verifySession(sessionId);
            session.saveSession(sessionId, JSON.stringify(user), 30 * 60);
            ctx.body = { "code": 200, "msg": "success", data: { "sessionId": sessionId } }
        } catch (err) {
            console.log("controller.user.sign:" + err);
        }
    },

    login: async(ctx) => {
        try {

        } catch (err) {

        }
    }
}

module.exports = userController;