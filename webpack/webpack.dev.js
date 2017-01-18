/**
 * @name
 * @author Matthias Komarek <matthias@mkomarek.de>
 * @copyright Matthias Komarek 2016
 * @date 22.07.16 19:57
 */

const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'build.js',
		path: 'serve'
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body',
			hash: true
		}),
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 8080,
			server: {
				baseDir: 'serve'
			},
			ui: false,
			online: false,
			notify: false
		})
	],
	module: {
		loaders: [{test: /\.js$/, loaders: ['babel-loader?presets[]=es2015'], exclude: /node_modules/}]
	}
};