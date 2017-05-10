/**
 * Created by ka on 2017/5/10.
 */
const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);
const  Router = require('koa-router');
const router = Router();


fs.readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function(file) {
        let route = require(path.join(__dirname, file));
        router.use(route.routes());
    });

module.exports = router;

