import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import elements from '../catalog'

export class Node extends Component {
  handleIncrementClick = () => {
	const { increment, id } = this.props
	increment(id)
  }

  handleAddChildClick = e => {
	e.preventDefault()

	const { addChild, createNode, id } = this.props
	const childId = createNode().nodeId
	addChild(id, childId)
  }

  handleRemoveClick = e => {
	e.preventDefault()

	const { removeChild, deleteNode, parentId, id } = this.props
	removeChild(parentId, id)
	deleteNode(id)
  }

  renderChild = childId => {
	const { id } = this.props
	return (
		<ConnectedNode id={childId} key={childId} parentId={id} />
	)
  }

  render() {
	const { childIds, type} = this.props
	return React.createElement(
		elements[type],
		{onClick: this.handleAddChildClick, height: '100%', 'background-color': 'blue'},
		childIds.map(this.renderChild)
	)
  }
}

function mapStateToProps(state, ownProps) {
  return state[ownProps.id]
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode
