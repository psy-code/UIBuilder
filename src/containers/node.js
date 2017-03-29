import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import elements from '../catalog'

export class Node extends Component {

	constructor(props) {
		super(props)
		this.selectNode = this.selectNode.bind(this)
	}

	selectNode = e => {
		e.stopPropagation()
		let { id } = this.props
		let { selectNode } = this.props.actions

		selectNode(id)
	}

	renderChild = childId => {
		let { id } = this.props
		return (
			<ConnectedNode id={childId} key={childId} parentId={id} />
		)
	}

	render() {
		let { actions, ownState } = this.props
		let { childIds, type, text } = ownState
		let render = (text !== undefined) ? text : childIds.map(this.renderChild)

		return React.createElement(
			elements[type],
			{
				onClick: this.selectNode,
				ownState,
				actions
			},
			render
		)
	}
}

const mapStateToProps = (state, ownProps) => ({ ownState: state[ownProps.id ]})

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch)	})

const ConnectedNode = connect(mapStateToProps, mapDispatchToProps)(Node)
export default ConnectedNode