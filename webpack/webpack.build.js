/**
 * @name
 * @author Matthias Komarek <matthias@mkomarek.de>
 * @copyright Matthias Komarek 2016
 * @date 22.07.16 19:57
 */

const webpack = require('webpack');
const fs = require('fs');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'build.min.js',
		path: 'dist'
	},
	// exclude all none relative paths
	externals: /^[^.]/,
	devtool: 'source-map',
	plugins: [
		new webpack.optimize.UglifyJsPlugin(
			{
				warning: false,
				mangle: true,
				comments: false
			}
		)
	],
	module: {
		loaders: [{test: /\.js$/, loaders: ['babel-loader?presets[]=es2015', 'ng-annotate-loader', 'eslint-loader'],exclude: /node_modules/}]
	}
};