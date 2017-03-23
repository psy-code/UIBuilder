import React, { Component } from 'react'
import Droppable from '../hocs/droppable-hoc'
import Box from './box'

@Droppable
class BoxDroppable extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		let {styles, children} = this.props
		return (
			<Box {...styles}>
				{children}
			</Box>
		)
	}
}

export default BoxDroppable