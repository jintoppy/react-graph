var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
module.exports = {
    context: __dirname,
    devtool: 'source-map',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist/',
        filename: 'react-graph.js',
        sourceMapFilename: 'react-graph.sourcemap.js',
        library: 'GraphWidget',
        libraryTarget: 'umd'
    },
    devServer: {
        contentBase: './example',
    },
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)/,
                loader: 'babel',
                include: [__dirname + '/example',__dirname + '/src']
            },
            {
                test: /\.css/,
                loaders: ['style?sourceMap','css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]']
            }, 
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, 
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, 
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, 
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, 
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }
        ]       
    },
    plugins: [
            new ExtractTextPlugin("styles.css")
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};