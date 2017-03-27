import React, { Component } from 'react'
import Draggable from '../hocs/draggable-hoc'
import Subtitle5 from './subtitle5'

@Draggable
class Subtitle5Draggable extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		let {children, styles, text} = this.props
		let props = (styles !== undefined) ? styles : this.props
		let value = (text !== undefined) ? text : children
		return (
			<Subtitle5 {...props}>
				{value}
			</Subtitle5>
		)
	}
}

export default Subtitle5Draggable