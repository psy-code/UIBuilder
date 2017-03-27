import React, { Component } from 'react'
import Draggable from '../hocs/draggable-hoc'
import Subtitle3 from './subtitle3'

@Draggable
class Subtitle3Draggable extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		let {children, styles, text} = this.props
		let props = (styles !== undefined) ? styles : this.props
		let value = (text !== undefined) ? text : children
		return (
			<Subtitle3 {...props}>
				{value}
			</Subtitle3>
		)
	}
}

export default Subtitle3Draggable