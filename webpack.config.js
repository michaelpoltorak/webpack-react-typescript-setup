const HtmlWebPackPlugin = require("html-webpack-plugin");
const fs = require('fs');

module.exports = {
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    { loader: 'babel-loader' },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            experimentalWatchApi: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        /* https: {
            key: fs.readFileSync('crt/localhost.key'),
            cert: fs.readFileSync('crt/localhost.crt'),
            // ca: fs.readFileSync('/path/to/ca.pem'),
        }, */
        hot: true,
        host: '0.0.0.0', //  App can be reached from ip address
    }
};