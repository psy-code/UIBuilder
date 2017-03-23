import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import { findDOMNode } from 'react-dom'

const Droppable = (WrappedComponent) => {

	const boxTarget = {
		drop(props, monitor) {

			if (!monitor.isOver()) return

			let {createNode, addChild, id} = props
			let item = monitor.getItem()
			let childId = createNode(item.type).nodeId
			addChild(id, childId)

			return item
		}
	}

	@DropTarget('Box', boxTarget, (connect, monitor) => {
		return {
			connectDropTarget: connect.dropTarget(),
			isOver: monitor.isOver(),
			isOverCurrent: monitor.isOver({ shallow: true }),
			canDrop: monitor.canDrop(),
			itemType: monitor.getItemType()
		}
	})

	class DroppableHOC extends Component {
		constructor(props) {
			super(props)
		}

		render() {
			let { connectDropTarget, children } = this.props
			return (
				<WrappedComponent
					{...this.props}
					ref={instance => connectDropTarget(findDOMNode(instance))}>
					{children}
				</WrappedComponent>
			)
		}
	}

	return DroppableHOC
}

export default Droppable