import React, { Component } from 'react'
import Draggable from '../hocs/draggable-hoc'
import Title from './title'

@Draggable
class TitleDraggable extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		let {children, styles, text} = this.props
		let props = (styles !== undefined) ? styles : this.props
		let value = (text !== undefined) ? text : children
		return (
			<Title {...props}>
				{value}
			</Title>
		)
	}
}

export default TitleDraggable