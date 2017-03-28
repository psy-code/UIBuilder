import React, { Component } from 'react'
import Draggable from '../hocs/draggable-hoc'
import Title from './title'

@Draggable
class TitleDraggable extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		let {children, styles, text, onClick, selected} = this.props
		let props = (styles !== undefined) ? styles : this.props
		let value = (text !== undefined) ? text : children
		return (
			<Title {...props} onClick={onClick} selected={selected}>
				{value}
			</Title>
		)
	}
}

export default TitleDraggable