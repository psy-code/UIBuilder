import React from 'react'

const Icon = (props) => {
	let {name, size, color, onClick, selected} = props
	let border = selected ? '1px solid red' : 'none'
	let styles = {
		fontSize: size,
		color: color,
		border: border
	}
	return (
		<i onClick={onClick} className={'icon-' + name} style={styles}/>
	)
}

Icon.propTypes = {
	'name': React.PropTypes.string.isRequired,
	'size': React.PropTypes.number
}

Icon.defaultProps = {
	size: 16,
	color: 'white'
}

export default Icon