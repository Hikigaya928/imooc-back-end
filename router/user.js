const express = require('express')
const Result = require('../models/Result')

const router = express.Router()

router.post('/login', function (req, res, next) {
    console.log('/user/login', req.body)
    const { username, password } = req.body
    if (username === 'admin' && password === 'admin') {
        new Result('登录成功啦').success(res)
    } else {
        new Result('登录失败啦').fail(res)
    }
})

router.get('/info', function (req, res, next) {
    res.json('user info...')
})

module.exports = router