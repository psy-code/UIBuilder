import React from 'react'
import Label from './label'
import Box from './box'
import Input from './input'

const InputLabelText = props => {
	let { label, value, onChange } = props
	return (
		<Box>
			<Label>{label}</Label>
			<Input onChange={onChange} value={value}/>
		</Box>
	)
			
	
}

InputLabelText.defaultProps = {
	value: ''
}

export default InputLabelText