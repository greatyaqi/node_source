const model = require('../model/index');
const User = model.user;

const userServer = {
    sign: (user) => {
        User.create({ userName: user.userName, passWord: user.passWord, createTime: user.createTime });
    }
}


module.exports = userServer;