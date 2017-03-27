import React, { Component } from 'react'
import Draggable from '../hocs/draggable-hoc'
import Subtitle4 from './subtitle4'

@Draggable
class Subtitle4Draggable extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		let {children, styles, text} = this.props
		let props = (styles !== undefined) ? styles : this.props
		let value = (text !== undefined) ? text : children
		return (
			<Subtitle4 {...props}>
				{value}
			</Subtitle4>
		)
	}
}

export default Subtitle4Draggable