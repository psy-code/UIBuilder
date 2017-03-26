import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Button from '../elements/button'
import Box from '../elements/box'
import Title from '../elements/title'
import Subtitle from '../elements/subtitle'
import Label from '../elements/label'
//import ToggleButton from '../toggle-button'

export class ElemenetProperties extends Component {
	constructor(props) {
		super(props)
		this.handleChangeStyle = this.handleChangeStyle.bind(this)
	}

	handleRemoveClick = () => {
		const { removeChild, deleteNode, parentId, id } = this.props
		removeChild(parentId, id)
		deleteNode(id)
	}

	handleChangeStyle = (style, event) => {
		const { id, addStyle } = this.props
		let value = event.target.value
		let newStyle = {}

		newStyle[style] = value
		addStyle(id, newStyle)
	}

	renderStyles = (styles) => {
		let result = []
		for (let style in styles) {
			result.push(
				<div key={style}>
					<Label>{style}</Label>
					<input type="text" onChange={this.handleChangeStyle.bind(this, style)} value={styles[style]}/>
				</div>
			)
		}
		return result
	}

	render() {
		let {type, id, selected, styles} = this.props
		return (
			<Box flex-grow="4">
				<Title color="white">Properties panel</Title>

				{selected && 
					<Box background-color="lightblue">
						<Label>Id</Label>
						<input type="input" disabled value={id}/>
						<Label>Type</Label>
						<input type="input" disabled value={type}/>
						<Subtitle>Styles</Subtitle>
						{this.renderStyles(styles)}
					</Box>
				}

				<Subtitle>Remove child</Subtitle>
				<Button onClick={this.handleRemoveClick}>{type}</Button>

				<Label>Direction</Label>
				<button >hola</button>
			</Box>
		)
	}
}

function mapStateToProps(state) {
	return (state[state.layer] !== undefined) ? state[state.layer] : {}
}

export default connect(mapStateToProps, actions)(ElemenetProperties)