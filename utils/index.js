/**
 * 此模块为 md5 加密密码模块
 * 1.后端接收到前端发过来的用户名密码
 * 2.将密码经由 md5 + 盐值 加密
 * 3.再到数据库里去查询
 */

const crypto = require('crypto')

function md5(s) {
    // 注意参数需要为 String 类型，否则会出错
    return crypto.createHash('md5')
        .update(String(s)).digest('hex');
}

module.exports = {
    md5
}