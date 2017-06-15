import React, { Component } from 'react'
import Droppable from '../hocs/droppable-hoc'
import Box from './box'

@Droppable
class BoxDroppable extends Component {

	static propTypes = {

	}

	constructor(props) {
		super(props)
	}

	render() {
		let { children, onClick } = this.props

		return (
			<Box {...this.props} onClick={onClick} >
				{children}
			</Box>
		)
	}
}

export default BoxDroppable