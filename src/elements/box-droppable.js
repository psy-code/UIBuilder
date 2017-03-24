import React, { Component } from 'react'
import Droppable from '../hocs/droppable-hoc'
import Box from './box'

@Droppable
class BoxDroppable extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		let {children, styles} = this.props
		let props = (styles !== undefined) ? styles : this.props
		return (
			<Box {...props}>
				{children}
			</Box>
		)
	}
}

export default BoxDroppable