var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js'],
		alias: {
			'react-redux-flipper': path.join(__dirname, '..', '..', 'src')
		}
	},
	module: {
		loaders: [
			{ test: /\.(js)(\?.*)?$/, loader: 'babel-loader' },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.less$/, loader: 'style!css!less' },
			{ test: /\.(ttf|woff|eot|svg|jpe?g|png|gif?)(\?[a-z0-9]+)?$/, loader: 'file-loader' }
		]
	}
};
