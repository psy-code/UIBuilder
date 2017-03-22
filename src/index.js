//import 'babel-polyfill'
import './assets/style.css'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk'

import React from 'react'
import ReactDOM from 'react-dom'

import { persistState } from 'redux-devtools'
import DevTools from './containers/devtool'

import Workspace from './pages/workspace'
//import Perf from 'react-addons-perf' // ES6
//window.Perf = Perf

const finalCreateStore = compose(
	applyMiddleware(thunk),
	DevTools.instrument(),
	persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)

let store = finalCreateStore(reducer)

/*************************************/

/*
const childs = createFragment({
	'box': React.createElement(Box, {'default': true}),
	'subtitle': React.createElement(Subtitle, {'value': 'hola'})
})

const elements = {
	"Home": Home,
	"Subtitle": Subtitle,
	"Box": Box,
	"Box2": React.createElement(Box, {'fit': true}, childs)
}

const components = {
	"root" : React.createElement(
		Box,
		{'fit': true},
		childs)
}

const data = {
	type: 'Box',
	props: {
		classNames: [],
		elementStyles: { color: 'red' }
	},
	childs: [
		{
			type: 'Box',
			props: {
				classNames: ['dafault'],
				elementStyles: [{ color: 'red' }]
			},
			childs: []
		},
		{
			type: 'Subtitle',
			props: {
				classNames: [],
				elementStyles: []
			},
			childs: 'Hola!'
		}
	]
}

function buildTree(data) {
	console.log(data)
	let childs = {}

	if (Array.isArray(data))
		console.log('create fragments')

	if (Array.isArray(data.childs) && data.childs.length > 0){
		console.log('component:', data.type)
		return React.createElement(elements[data.type], null, data.childs.map(buildTree))
	}
	else{
		console.log('element ', data.type)
		return React.createElement(elements[data.type], {'value': 'hola'})
	}
}*/

//const Root = components['root']
//const Root = buildTree(data)

const App = () => (
		<Provider store={store}>
			<div className="root">
				
				<Workspace/>
				
				<DevTools />
			</div>
		</Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))