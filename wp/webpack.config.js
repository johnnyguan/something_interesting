var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/build',
        filename:'bundle.[hash].js'
    },
    devtool:'source-map',
    devServer: {
        contentBase:'./public',
        inline:true
    },
    module: {
        rules: [
            {
                test:/(\.js)$/,
                use: {
                    loader:'babel-loader'
                },
                exclude:/node_modules/
            },
            {
                test:/(\.css)$/,
                use: [{
                    loader:'style-loader'
                },{
                    loader:'css-loader',
                    options: {
                        modules: true
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:__dirname +"/app/index.tmpl.html"
        })
    ]
}