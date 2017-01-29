module.exports = [{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: "babel"
    },
    {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000',
    },
    {
        test: /\.gif/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?limit=10000&mimetype=image/gif"
    },
    {
        test: /\.jpg/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?limit=10000&mimetype=image/jpg"
    },
    {
        test: /\.png/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?limit=10000&mimetype=image/png"
    },
    {
        test: /\.md$/,
        loader: "html-loader!markdown-loader"
    },
    // global css
    {
        test: /\.css$/,
        exclude: /[\/\\]src[\/\\]/,
        loaders: [
            'style?sourceMap',
            'css'
        ]
    },
    // local scss modules
    {
        test: /\.scss$/,
        exclude: /[\/\\](node_modules|bower_components|public\/)[\/\\]/,
        loaders: [
            'style?sourceMap',
            'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]&sourceMap',
            'postcss',
            'sass'
        ]
    },
    // local css modules
    {
        test: /\.css$/,
        exclude: /[\/\\](node_modules|bower_components|public\/)[\/\\]/,
        loaders: [
            'style?sourceMap',
            'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]&sourceMap'
        ]
    }
];