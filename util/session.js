const redis = require('../lib/redis');
const crypto = require('crypto');

class Session {
    constructor() {}

    /**
     * 
     * 设置用户的session
     * @returns 
     * 
     * @memberOf Session
     */
    setSession(userInfo) {
        let cipher = crypto.createCipher('aes256', 'coll');
        let encrypted = cipher.update(userInfo, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }

    /**
     * 
     * 保存用户的session到redis
     * @param {any} sessionId 
     * @param {any} userInfo 
     * @param {any} expire 
     * @memberOf Session
     */
    saveSession(sessionId, userInfo, expire) {
        redis.set(sessionId, userInfo, 'EX', expire)
    }

    /**
     * 
     * 获取redis用户的session
     * @param {any} sessionId 
     * @returns 
     * 
     * @memberOf Session
     */
    getSession(sessionId) {
        redis.get(sessionId).then(function(result) {
            return result;
        });
    }

    /**
     * 
     * 
     * @param {any} SessionId 
     * 
     * @memberOf Session
     */
    verifySession(SessionId) {
        let decipher = crypto.createDecipher('aes256', 'coll')
        let decrypted = decipher.update(SessionId, 'hex', 'utf8')
        decrypted += decipher.final('utf8')

        console.log(decrypted)
    }
}

module.exports = Session;