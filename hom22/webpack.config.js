const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        filename: path.resolve(__dirname, "./src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    devServer: {
        port: 9000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, "dist")
        }

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/i,
                include: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    ]
            }
        ]
    },
    resolve: {
        extensions: [".js",".json",".css", ".scss"]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "styles.css" }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    optimization: {
        minimize: true,  // Увімкнути мінімізацію
        minimizer: [
            new CssMinimizerPlugin()  // Мінімізує CSS
        ]
    }

}