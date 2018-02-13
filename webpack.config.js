const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

var commonConfig = {
	output: {
		path: path.resolve(__dirname + '/dist/'),
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
				  loader: 'babel-loader',
				  options: {
					presets: ['env']
				  }
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	plugins: [
		new UglifyJsPlugin()
	]
};

module.exports = [

	// Config 1: For browser environment
	merge(commonConfig, {
		entry: path.resolve(__dirname + '/src/plugin.js'),
		output: {
			filename: 'vue-tiny-typer.min.js',
			libraryTarget: 'window',
			library: 'VueTinyTyper'
		}
	}),

	// Config 2: For Node-based development environments
	merge(commonConfig, {
		entry: path.resolve(__dirname + '/src/VueTinyTyper.vue'),
		output: {
			filename: 'vue-tiny-typer.js',
			libraryTarget: 'umd',
			library: 'vue-tiny-typer',
			umdNamedDefine: true
		}
	})
];