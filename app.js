const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const cors = require('cors')

// 创建 express 应用
const app = express()

// 跨域请求插件
app.use(cors())

// 在处理程序之前在中间件中解析传入的请求主体，在req.body属性下可用。【获取前端数据的插件】
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// 全局路由
app.use('/', router)

// 使 express 监听 5000 端口号发起的 http 请求
const server = app.listen(18080, function () {
    const { address, port } = server.address()
    console.log('HTTP服务已启动: http://%s:%s', address, port)
})  