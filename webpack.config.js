var path = require('path')

module.exports = {
	//context: path.resolve(__dirname, '/src'),
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

	/*
	resolve: {
	    extensions: ['', '.js']
	},
	devtool: '#eval-source-map',
	devtool: '#cheap-source-map',*/
	

	module: {
		loaders: [ 
			{ 	
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['react-hot', "babel-loader"]
				//loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
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
			}
		]
	}
}
