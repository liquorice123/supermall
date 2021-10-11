module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': 'src/assets',
                'components': 'src/components',
                'common': 'src/common',
                'network': 'src/network',
                'viewss': 'src/views'
            }
        }
    }
}