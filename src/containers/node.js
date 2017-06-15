import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import elements from '../catalog'

export class Node extends Component {

	constructor(props) {
		super(props)
	}

	selectNode = e => {
		e.stopPropagation()
		let { id } = this.props
		let { selectNode } = this.props.actions

		selectNode(id)
	}

	renderChild = childId => {
		let { id } = this.props.ownState
		return (
			<ConnectedNode id={childId} key={childId} parentId={id} />
		)
	}

	render() {
		let { actions, ownState } = this.props
		let { childIds, type, text, selected } = ownState
		let render = (text !== undefined) ? text : childIds.map(this.renderChild)
		let props = { ...ownState.styles }
		
		// select must be a hoc build with box, not changing the props of the element
		if (selected)
			props = {...props, 'border': '1px solid red',}

		return React.createElement(
			elements[type],
			{
				...props,
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