const path = require("path");

module.exports = {
    mode: "production",
    entry: "./js/josecaos.js",
    output: {
        path: path.resolve(__dirname, "./assets/js"),
        filename: "josecaos.min.js",
    },
    module: {
        rules: [{
            enforce: "pre",
            test: /\.js$/,
            include: [path.resolve(__dirname, "./assets/js")],
            loader: "eslint-loader",
        }, ],
    },
};
