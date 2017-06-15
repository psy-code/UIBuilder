import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import { findDOMNode } from 'react-dom'

const Droppable = (WrappedComponent) => {

	const boxTarget = {
		drop(props, monitor) {
			if (!monitor.isOver()) return
			let { actions, ownState } = props
			let { id, type, text } = ownState
			let item = monitor.getItem()
			
			if (id === undefined) {
				let childId = actions.createNode(id, type, text).nodeId
				actions.addChild(id, childId)
			}

			return item
		},

		hover(props, monitor, component) {
			//console.log('hover', props)
			let { moveNode } = props.actions
			let dragId = monitor.getItem().id
			let dragParentId = monitor.getItem().parentId
			let hoverId = props.ownState.id
			let hoverParentId = props.ownState.parentId

			if (dragId === hoverId || !monitor.isOver({ shallow: true }) || hoverParentId === null || dragId === undefined)
				return

			// Determine rectangle on screen
			let hoverBoundingRect = findDOMNode(component).getBoundingClientRect()
			
			// Get vertical middle
			let hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

			// Determine mouse position
			let clientOffset = monitor.getClientOffset()

			// Get pixels to the top
			let hoverClientY = clientOffset.y - hoverBoundingRect.top


			// Dragging downwards
			if (dragId < hoverId && hoverClientY < hoverMiddleY)
				return

			// Dragging upwards
			if (dragId > hoverId && hoverClientY > hoverMiddleY)
				return

			moveNode(dragParentId, dragId, hoverId)
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
			let { connectDropTarget, children, onClick} = this.props
			return (
				<WrappedComponent
					onClick={onClick}
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