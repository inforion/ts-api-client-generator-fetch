const path = require('path');

module.exports = {
    mode: 'production',
    devtool: false,
    entry: {
        bundle: './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        library: 'FetchAdapter',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        'ts-api-client-generator': 'commonjs ts-api-client-generator'
    }
};