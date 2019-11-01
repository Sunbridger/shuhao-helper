module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.vue', '.js', '.ts', '.json']
        }
    },
    devServer: {
        proxy: {
            '/eggapi': {
                target: 'http://47.96.149.250:7001',
                changeOrigin: true,
                pathRewrite: {
                    '^/eggapi': ''
                }
            }
        }
    }
}