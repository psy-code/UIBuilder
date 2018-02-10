import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import { findDOMNode } from 'react-dom'

const Droppable = (WrappedComponent) => {

	const boxTarget = {
		drop(props, monitor) {

			if (!monitor.isOver()) return
			let {createNode, id} = props
			let item = monitor.getItem()
			
			if (item.id === undefined) {
				//let childId = 
				createNode(id, item.type, item.text).nodeId
				//addChild(id, childId)
			}

			return item
		},

		hover(props, monitor, component) {
			const dragId = monitor.getItem().id
			const dragParentId = monitor.getItem().parentId
			const hoverId = props.id
			const hoverParentId = props.parentId

			if (dragId === hoverId || !monitor.isOver({ shallow: true }) || hoverParentId === null || dragId === undefined)
				return

			// Determine rectangle on screen
			const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()
			
			// Get vertical middle
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

			// Determine mouse position
			const clientOffset = monitor.getClientOffset()

			// Get pixels to the top
			const hoverClientY = clientOffset.y - hoverBoundingRect.top


			// Dragging downwards
			if (dragId < hoverId && hoverClientY < hoverMiddleY)
				return

			// Dragging upwards
			if (dragId > hoverId && hoverClientY > hoverMiddleY)
				return

			props.moveNode(dragParentId, dragId, hoverId)
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