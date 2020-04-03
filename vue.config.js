module.exports = {
    devServer: {
        proxy: 'http://192.168.10.240:8081'
            // proxy: {
            //     '/api': {
            //         target: 'http://192.168.10.240:8081',
            //         ws: true,
            //         changeOrigin: true
            //     },
            //     // '/foo': {
            //     //     target: '<other_url>'
            //     // }
            // }
    },
    css: {
        loaderOptions: {
            less: {
                modifyvars: {

                    'primary-color': '#1DA57A',
                    'link-color': '#1DA57A',
                    'border-radius-base': '2px',
                },
                javascriptEnabled: true,
            }
        }
    }
}