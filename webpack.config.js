const htmlWebpackPlugin = require("html-webpack-plugin")

const javaScriptRules = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-optional-chaining"],
        },
    },
}

const cssModuleRules = {
    test: /\.css$/,
    use: [
        "style-loader",
        {
            loader: "css-loader",
            options: {
                importLoaders: 1,
                modules: true,
            },
        },
    ],
    include: /\.module\.css$/,
}

const cssRules = {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
    exclude: /\.module\.css$/,
}

module.exports = {
    output: {
        filename: "build.[contentHash].js",
    },
    module: {
        rules: [javaScriptRules, cssRules, cssModuleRules],
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "src/index.html",
        }),
    ],
}
