import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Box from '../elements/box'
import Title from '../elements/title'
import Label from '../elements/label'
//import ToggleButton from '../toggle-button'

const ElemenetProperties = (props) => {
	console.log(props)
	return (
		<Box flex-grow="4">
			<Title color="white">Properties panel</Title>

			<Label>Direction</Label>
			{/*<ToggleButton value={props.direction} values={['row', 'column']} handleClick={props.layer.toggleDirection} />*/}
			<button >hola</button>
		</Box>
	)
}

function mapStateToProps(state, ownProps) {
	console.log(state, ownProps)
	return state[ownProps.id]
}

export default connect(mapStateToProps, actions)(ElemenetProperties)