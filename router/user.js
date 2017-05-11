/**
 * Created by ka on 2017/5/10.
 */
const Router = require('koa-router');
const userController = require("../controller/user")

const router = Router({
    prefix: '/user'
});

router.get('/sign/', userController.sign);

module.exports = router;