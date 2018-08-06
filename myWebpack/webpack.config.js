const Path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.[hash: 8].js',
        path: Path.resolve('./build'),
    },
    devServer: {
        contentBase: './build',
        port: 3000,
        compress: true,
        open: true,
    },
    mode: 'development',
    resolve: {},
};
