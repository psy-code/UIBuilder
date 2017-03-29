import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Button from '../elements/button'
import Box from '../elements/box'
import Title from '../elements/title'
import Subtitle1 from '../elements/subtitle1'
import Label from '../elements/label'
import List from '../elements/list'
import ItemList from '../elements/item-list'
import LabelInputText from '../elements/label-input-text'
//import ToggleButton from '../toggle-button'

let textProperties = [
	'text-align', 'color', 'font-size',	'font-family'
]

let divProperties = [
	'width', 'height', 'background-color', 'flex-direction'
]

const elementProperties = {
	'BoxDroppable': 		divProperties,
	'BoxDraggable': 		divProperties,
	'Boxdnd': 				divProperties,

	'TitleDraggable': 		textProperties,
	'Subtitle1Draggable': 	textProperties,
	'Subtitle2Draggable': 	textProperties,
	'Subtitle3Draggable': 	textProperties,
	'Subtitle4Draggable': 	textProperties,
	'Subtitle5Draggable': 	textProperties,
/*
	'Logo': 				Logo,
	'Link': 				Link,
	'Image': 				Image,
	'Icon': 				Icon,
	'Label': 				Label*/
}

export class ElemenetProperties extends Component {
	
	constructor(props) {
		super(props)
		this.handleChangeStyle = this.handleChangeStyle.bind(this)
	}

	selectChild = (id, e) => {
		e.stopPropagation()
		let { selectNode } = this.props
		selectNode(id)
	}

	handleTextUpdate = (e) => {
		e.stopPropagation()
		let { id, updateText } = this.props
		updateText(id, e.target.value)
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

	childList = () => {
		let { childIds } = this.props
		let child = []
		for(let x in childIds) {
			child[x] = <ItemList key={x} onClick={this.selectChild.bind(this, x)}>{childIds[x].type}</ItemList>
		}
		
		return (
			<List flex-direction="column">
				{child}
			</List>
		)
	}

	renderStyleProperties = () => {
		let { type, styles } = this.props
		let map = elementProperties[type].map( property => {
			let value = (styles[property] !== undefined) ? styles[property] : ''
			return <LabelInputText key={property} label={property} onChange={this.handleChangeStyle.bind(this, property)} value={value}/>
		})

		return (
			<Box>
				<Subtitle1>Styles</Subtitle1>
				{map}
			</Box>
		)
	}

	render() {
		let {type, id, selected, childIds} = this.props
		return (
			<Box flex-grow="4">
				<Title color="white">Properties panel</Title>

				{selected && 
					<Box background-color="lightblue">
						<Label>Id</Label>
						<input type="input" disabled value={id}/>
						<Label>Type</Label>
						<input type="input" disabled value={type}/>
				
						{this.renderStyleProperties()}

						{ (Object.keys(childIds).length > 0) &&
							<Box>
								<Subtitle1>Childs</Subtitle1>
								{this.childList()}
							</Box>
						}

						<Button onClick={this.handleRemoveClick}>Delete element</Button>
					</Box>
				}
			</Box>
		)
	}
}

function mapStateToProps(state) {
	let children = {}
	if (state[state.layer] !== undefined){
		state[state.layer].childIds.forEach( child => {
			children[child] = state[child]
		})
	}
	return {...state[state.layer], childIds: children}
}

export default connect(mapStateToProps, actions)(ElemenetProperties)