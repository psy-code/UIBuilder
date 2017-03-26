export const INCREMENT = 'INCREMENT'
export const CREATE_NODE = 'CREATE_NODE'
export const DELETE_NODE = 'DELETE_NODE'
export const SELECT_NODE = 'SELECT_NODE'
export const ADD_CHILD = 'ADD_CHILD'
export const REMOVE_CHILD = 'REMOVE_CHILD'
export const ADD_STYLE = 'ADD_STYLE'

export const increment = nodeId => ({
	type: INCREMENT,
	nodeId
})

let nextId = 6
export const createNode = (parentId, type, text) => ({
	type: CREATE_NODE,
	nodeId: `${nextId++}`,
	nodeType: type,
	text,
	parentId
})

export const deleteNode = nodeId => ({
	type: DELETE_NODE,
	nodeId
})

export const selectNode = nodeId => ({
	type: SELECT_NODE,
	nodeId
})

export const addStyle = (nodeId, style) => ({
	type: ADD_STYLE,
	nodeId,
	style
})

export const addChild = (nodeId, childId) => ({
	type: ADD_CHILD,
	nodeId,
	childId
})

export const removeChild = (nodeId, childId) => ({
	type: REMOVE_CHILD,
	nodeId,
	childId
})
