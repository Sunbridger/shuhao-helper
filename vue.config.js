module.exports = {
    configureWebpack: (config) => {
        config.resolve.extensions = ['.vue', '.js', '.ts', '.json'];
    }
}
