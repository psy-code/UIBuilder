import './assets/style.css'
import './assets/fonts/icons.css'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import React from 'react'
import ReactDOM from 'react-dom'
import { persistState } from 'redux-devtools'
import DevTools from './components/devtool'
import Workspace from './pages/workspace'
import schema from './reducers/models/schema'
import bootstrap from './reducers/bootstrap'

const rootReducer = combineReducers({
	orm: schema.reducer(),
	idRoot: reducer
	//reducer: reducer
})

const finalCreateStore = compose(
	applyMiddleware(thunk),
	DevTools.instrument(),
	persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)

let store = finalCreateStore(rootReducer, bootstrap(schema))

const App = () => (
	<Provider store={store}>
		<div className="root">
			
			<Workspace/>
			
			<DevTools />
		</div>
	</Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))