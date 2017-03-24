var path = require('path')

module.exports = {
	devtool: '#cheap-source-map',

	entry: {
		javascript: [
			'webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/only-dev-server',
			'babel-polyfill',
			'./src/index.js'
		]
	},

	output: {
		path: path.resolve(__dirname, "public"),
		filename: "app.bundle.js",
		publicPath: "/public/"
	},

	devServer: {
		publicPath: path.resolve(__dirname, "/"),
		contentBase: "./public",
		hot: true
	},

	module: {
		loaders: [ 
			{ 	
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['react-hot', "babel-loader"]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel-loader', 'eslint-loader']
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loaders: ['style', 'css']
			},
			{	test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader?name=src/assets/fonts/[name].[ext]'
			}
		]
	}
}
