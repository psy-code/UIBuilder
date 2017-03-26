import React from 'react'
import Button from './button'

const ToggleButton = ({value, values, handleClick}) => {
	let toggle = () => {
		handleClick((value == values[0]) ? values[1] : values[0])
	}
	return (
		<Button onClick={toggle}>
			{value}
		</Button>
	)
}

export default ToggleButton