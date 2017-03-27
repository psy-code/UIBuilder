import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Button from '../elements/button'
import Box from '../elements/box'
import Title from '../elements/title'
import Subtitle from '../elements/subtitle'
import Label from '../elements/label'
import List from '../elements/list'
import ItemList from '../elements/item-list'
//import ToggleButton from '../toggle-button'

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
		let {type, id, selected, styles, childIds, text} = this.props
		return (
			<Box flex-grow="4">
				<Title color="white">Properties panel</Title>

				{selected && 
					<Box background-color="lightblue">
						<Label>Id</Label>
						<input type="input" disabled value={id}/>
						<Label>Type</Label>
						<input type="input" disabled value={type}/>
						<br/>
						
						{ (text !== undefined) &&
							<Box>
								<input type="input" onChange={this.handleTextUpdate} value={text}/>
								<Label>Align</Label>
								<input type="text" onChange={this.handleChangeStyle.bind(this, 'text-align')} value=""/>
							</Box>
						}

						<Subtitle>Styles</Subtitle>
						{this.renderStyles(styles)}

						{ (Object.keys(childIds).length > 0) &&
							<Box>
								<Subtitle>Childs</Subtitle>
								{this.childList()}
							</Box>
						}
						<br/>
						<Label>height</Label>
						<input type="text" onChange={this.handleChangeStyle.bind(this, 'height')} value=""/>
						<br/>
						<Label>width</Label>
						<input type="text" onChange={this.handleChangeStyle.bind(this, 'width')} value=""/>
						<br/>
						<Label>background-color</Label>
						<input type="text" onChange={this.handleChangeStyle.bind(this, 'background-color')} value=""/>
						<br/>
						<Label>flex-direction</Label>
						<input type="text" onChange={this.handleChangeStyle.bind(this, 'flex-direction')} value=""/>
						

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