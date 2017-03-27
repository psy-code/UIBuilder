import React, { Component } from 'react'
import Draggable from '../hocs/draggable-hoc'
import Subtitle1 from './subtitle1'

@Draggable
class Subtitle1Draggable extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		let {children, styles, text} = this.props
		let props = (styles !== undefined) ? styles : this.props
		let value = (text !== undefined) ? text : children
		return (
			<Subtitle1 {...props}>
				{value}
			</Subtitle1>
		)
	}
}

export default Subtitle1Draggable