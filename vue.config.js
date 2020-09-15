const path = (path) => require('path').resolve(__dirname, path);
module.exports = {
    configureWebpack: (config) => {
        config.resolve = {
            extensions: ['.vue', '.js', '.ts', '.json'],
            alias: {
                components: path('./src/components'),
                views: path('./src/views'),
                api: path('./src/api'),
                variable: path('./core/variable')
            }
        };
        config.externals = {
            echarts: 'echarts',
            axios: 'axios',
            vue: 'Vue',
            'vue-router': 'VueRouter',
            _: 'lodash'
        };
    }
}
