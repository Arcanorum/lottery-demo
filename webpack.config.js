const path = require('path');

module.exports = {
    entry: './src/game.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'ts-loader',
            },
            {
                test: require.resolve('phaser'),
                loader: 'expose-loader',
                options: { exposes: { globalName: 'phaser', override: true } },
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            }
        ],
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        open: false,
        devMiddleware: {
            publicPath: '/dist/',
        },
        static: {
            directory: path.join(__dirname, './'),
        },
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
