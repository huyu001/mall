module.exports = {
    configureWebpack: {
        // resolve中存放给路径起的别名
        resolve: {
            alias: {
                'assets': "@/assets",
                'common': '@/common',
                'network': '@/network',
                'views': '@/views',
                'components': '@/components'
            }
        }
    }
}