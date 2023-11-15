const { log } = require('console');
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../utils/constant')

/**
 * 此模块为 md5 加密密码模块
 * 1.后端接收到前端发过来的用户名密码
 * 2.将密码经由 md5 + 盐值 加密
 * 3.再到数据库里去查询
 */
function md5(s) {
    // 注意参数需要为 String 类型，否则会出错
    return crypto.createHash('md5')
        .update(String(s)).digest('hex');
}

/**
 * 此模块为 解密 模块
 * 1.后端接收到前端保存在 cookie 中的 token
 * 2.将 token 经由 decoded 解密出 username
 * 3.再到数据库里去查询username
 */
function decoded(req) {
    let token = req.get('Authorization')
    // 如果存在携带 Bearer + token 的信息，将 Bearer 字段替换为空，再通过 jwt.verify 进行 token 解析
    if (token.indexOf('Bearer') === 0) {
        token = token.replace('Bearer ', '')
    }
    return jwt.verify(token, PRIVATE_KEY)
}

module.exports = {
    md5,
    decoded
}