import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import elements from '../catalog'
import { nodes } from '../selectors/node'

export class Node extends Component {

	constructor(props) {
		super(props)
	}

	selectNode = e => {
		e.stopPropagation()
		let { selectNode, id } = this.props
		selectNode(id)
	}

	handleIncrementClick = () => {
		const { increment, id } = this.props
		increment(id)
	}

	handleAddChildClick = () => {
		const { addChild, createNode, id, type } = this.props
		const childId = createNode(type).nodeId
		addChild(id, childId)
	}
/*
	handleRemoveClick = () => {
		const { removeChild, deleteNode, parentId, id } = this.props
		removeChild(parentId, id)
		deleteNode(id)
	}
*/
	renderChild = childId => {
		const { id } = this.props
		return (
			<ConnectedNode id={childId} key={childId} parentId={id} />
		)
	}

	render() {
		console.log('render ', this.props)
		const { children, type, text, selected, styles } = this.props
		//const { childIds, type, text, selected, styles } = this.props
		let render = (text !== undefined) ? text : children.map(this.renderChild)
		let style = (styles !== undefined)? {...styles, ...this.props} : this.props

		return React.createElement(
			elements[type],
			{ onClick: this.selectNode, ...style, selected },
			render
		)
	}
}

function mapStateToProps(state, ownProps) {
	console.log('mapStateToProps', state)
	console.log('ownProps', ownProps)
	console.log()
	/*
	console.log('state: ', state, ownProps, state[ownProps.id])*/
	//console.log('nodeSelector', nodes(state))
	return nodes(state, ownProps.id)
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode