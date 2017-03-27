import React, { Component } from 'react'
import Draggable from '../hocs/draggable-hoc'
import Subtitle2 from './subtitle2'

@Draggable
class Subtitle2Draggable extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		let {children, styles, text} = this.props
		let props = (styles !== undefined) ? styles : this.props
		let value = (text !== undefined) ? text : children
		return (
			<Subtitle2 {...props}>
				{value}
			</Subtitle2>
		)
	}
}

export default Subtitle2Draggable