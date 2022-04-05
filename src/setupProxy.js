// 先引入http-proxy-middleware 模块
const proxy = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        proxy('/api', { // api前缀的请求都会转发给下面target的地址
            target: 'http://loaclhost:5000', // 配置转发的目标地址
            changeOrigin: true, // 默认是false,控制服务器接的请求头中的host字段的值，true就是target的host值，false就是未代理的host值
            pathRewrite: { // 重写api前缀的请求地址，把api开头替换成空字符串
                '^api': ''
            }
        }),
        proxy('api1', {
            target: 'http://localhost:5001',
            pathRewrite: {
                'api1': ''
            }
        })
    )
}

// package.json 里的proxy只能代理一个地址，要配置多个地址需要在src下建立setupProxy.js文件来配置