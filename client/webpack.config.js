"use strict";

var webpack = require("webpack");
var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (options) {
    options = { mode: "development" };
    var isDevBuild = options.mode === "development";

    var config = {
        mode: options.mode,
        entry: {
            "index": path.resolve(__dirname, "./src/index.tsx"),
        },
        resolve: {
            extensions: [".ts", ".js", ".tsx", ".jsx", ".css", ".scss", ".svg"],
        },
        optimization: {
            minimize: !isDevBuild,
        },
        module: {
            rules: [
                {
                    test: /\.(j|t)sx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            compilerOptions: {
                            },
                        },
                    }
                },
                {
                    test: /\.(ca|sc|c)ss$/,
                    loader: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: isDevBuild,
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: isDevBuild,
                            },
                        },
                    ],
                },
                // {
                //     test: /\.html?$/,
                //     loader: "html-loader",
                // },
                {
                    test: /\.(svg|png)$/,
                    use: {
                        loader: "url-loader",
                        options: {},
                    }
                }
            ]
        },
        output: {
            path: path.resolve(__dirname, "../service/static/service/"),
            filename: "[name]" + (isDevBuild ? "" : ".min") + ".js",
            library: "SurvayJSDjango",
            libraryTarget: "umd",
            umdNamedDefine: true,
        },
        plugins: [
            new webpack.DefinePlugin({
              "process.env.ENVIRONMENT": JSON.stringify(options.mode),
               // "process.env.VERSION": JSON.stringify(packageJson.version),
            }),
            new MiniCssExtractPlugin({
              filename: isDevBuild ? "[name].css" : "[name].min.css",
            }),
        ],
    };

    return config;
}