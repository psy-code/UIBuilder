import React, { Component } from 'react'
import Droppable from '../hocs/droppable-hoc'
import Box from './box'

@Droppable
class BoxDroppable extends Component {

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

export default BoxDroppable