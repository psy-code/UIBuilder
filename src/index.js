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

const finalCreateStore = compose(
	applyMiddleware(thunk),
	DevTools.instrument(),
	persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)

let store = finalCreateStore(reducer)

const App = () => (
		<Provider store={store}>
			<div className="root">
				
				<Workspace/>
				
				<DevTools />
			</div>
		</Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))