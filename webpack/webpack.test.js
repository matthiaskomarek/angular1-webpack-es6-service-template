// const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'build.js',
		path: 'tmp'
	},
	devtool: 'source-map-inline',
	plugins: [
		// new webpack.ProvidePlugin({
		// 	moment: 'moment',
		// 	'window.moment': 'moment'
		// })
	],
	module: {
		loaders: [{test: /\.js$/, loader: 'babel-loader?presets[]=es2015', exclude: /node_modules/}]
	}
};