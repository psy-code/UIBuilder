import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { DragSource } from 'react-dnd'

const Draggable = (WrappedComponent) => {

	const boxSource = {
		canDrag() {
			//return props.dragType !== undefined
			// blocked element can't be dragged
			return true
		},
		beginDrag(props) {
			let { id, type, value } = props
			return { id: id, type: type, text: value }
		}
	}

	@DragSource('Box', boxSource, (connect, monitor) => {
		return {
			connectDragSource: connect.dragSource(),
			isDragging: monitor.isDragging()
		}
	})

	class DraggableHOC extends Component {

		constructor(props) {
			super(props)
			this.connect = this.connect.bind(this)
		}

		connect(instance) {
			this.props.connectDragSource(findDOMNode(instance))
		}

		render () {
			let { connectDragSource, children } = this.props
			return (
				<WrappedComponent
					{...this.props}
					ref={instance => connectDragSource(findDOMNode(instance))}>
					{children}
				</WrappedComponent>
			)
		}
		
	}

	return DraggableHOC

}

export default Draggable