import React, { Component } from 'react'
import Draggable from '../hocs/draggable-hoc'
import Subtitle from './subtitle'

@Draggable
class SubtitleDraggable extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		let {children, styles, text} = this.props
		let props = (styles !== undefined) ? styles : this.props
		let value = (text !== undefined) ? text : children
		return (
			<Subtitle {...props}>
				{value}
			</Subtitle>
		)
	}
}

export default SubtitleDraggable