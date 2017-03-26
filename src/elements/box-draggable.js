import React, { Component } from 'react'
import Draggable from '../hocs/draggable-hoc'
import Box from './box'

@Draggable
class BoxDraggable extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		let {children, styles, onClick, selected} = this.props
		let props = (styles !== undefined) ? styles : this.props
		
		return (
			<Box {...props} onClick={onClick} selected={selected}>
				{children}
			</Box>
		)
	}
}

export default BoxDraggable