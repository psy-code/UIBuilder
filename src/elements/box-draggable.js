import React, { Component } from 'react'
import Draggable from '../hocs/draggable-hoc'
import Box from './box'

@Draggable
class BoxDraggable extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		let {children} = this.props
		return (
			<Box {...this.props}>
				{children}
			</Box>
		)
	}
}

export default BoxDraggable