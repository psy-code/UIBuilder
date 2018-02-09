//import { INCREMENT, ADD_CHILD, REMOVE_CHILD, CREATE_NODE, DELETE_NODE,
//	SELECT_NODE, ADD_STYLE, UPDATE_TEXT, MOVE_NODE } from '../actions'
import { DELETE_NODE, SELECT_NODE } from '../actions'
//import { schema } from './models/schema.js'
//import orm from './models/schema'
//import initialState from './initial-state'

//const initialState = orm.getEmptyState()



export default (dbState = 0, action) => {
	/*
	console.log('dbstate: ', dbState)
	const sess = orm.session(dbState)
	const { Node } = sess

	console.log('sess.state', sess.state)
	console.log()
	Node.all()
*/
	switch (action.type) {
		case DELETE_NODE:
			Node.withId(action.payload.nodeId).delete()
			break
		case SELECT_NODE:
			Node.withId(action.payload.nodeId).selected = true
			break
	}


	return dbState
}


/*
const childIds = (state, action) => {
	switch (action.type) {
		
		case ADD_CHILD:
			return [ ...state, action.childId ]

		case REMOVE_CHILD:
			return state.filter(id => id !== action.childId)

		default:
			return state
	}
}

const node = (state, action) => {
	switch (action.type) {
		
		case CREATE_NODE:
			return {
				id: 		action.nodeId,
				parentId: 	action.parentId,
				type: 		action.nodeType,
				text: 		action.text,
				counter: 	0,
				childIds: 	[]
			}
		
		case INCREMENT:
			return {
				...state,
				counter: state.counter + 1
			}

		case ADD_STYLE:
			return {
				...state,
				styles: {...state.styles, ...action.style}
			}

		case UPDATE_TEXT:
			return {
				...state,
				text: action.text
			}

		case MOVE_NODE:
			return {
				...state,
				childIds: orderChilds(state.childIds, action.dragId, action.hoverId)
			}


		case ADD_CHILD:
		case REMOVE_CHILD:
			return {
				...state,
				childIds: childIds(state.childIds, action)
			}
		
		default:
			return state
	}
}

const orderChilds = (childIds, nodeId, hoverId) => {
	let newOrder = [...childIds]
	let nodeIndex = childIds.indexOf(nodeId)
	let hoverIndex = childIds.indexOf(hoverId)
	newOrder[nodeIndex] = hoverId
	newOrder[hoverIndex] = nodeId
	return newOrder
}

const getAllDescendantIds = (state, nodeId) => (
	state[nodeId].childIds.reduce((acc, childId) => (
		[ ...acc, childId, ...getAllDescendantIds(state, childId) ]
		), [])
	)

const deleteMany = (state, ids) => {
	state = { ...state }
	ids.forEach(id => delete state[id])
	return state
}

const selectNode = (state, id) => {
	let newState = {}
	Object.keys(state).forEach(key => {
		newState[key] = {
			...state[key],
			selected: (String(id) === key) ? !state[key].selected : false
		}
	})
	return newState
}
*/

/*
export default (state = initialState, action) => {
	const { nodeId } = action
	if (typeof nodeId === 'undefined') {
		return state
	}

	if (action.type === DELETE_NODE) {
		const descendantIds = getAllDescendantIds(state, nodeId)
		return deleteMany(state, [ nodeId, ...descendantIds ])
	}

	if (action.type === SELECT_NODE) {
		return {
			...selectNode(state, nodeId),
			['layer']: nodeId,
		}
	}

	return {
		...state,
		[nodeId]: node(state[nodeId], action)
	}
}
*/