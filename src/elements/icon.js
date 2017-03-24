import React from 'react'

const Icon = ({name, size, color}) => {
	return (
		<i className={'icon-' + name} style={{fontSize: size, color: color}}/>
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