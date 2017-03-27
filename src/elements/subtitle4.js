import React from 'react'
import styled from 'styled-components'

const Subtitle4 = styled.h5`
	border: ${ ({selected}) => (selected ? '1px solid red' : 'none')}
	color: ${ props => props.color }
	text-align: ${ (props) => (props.hasOwnProperty('text-align') ? props['text-align'] : 'none')}
`

Subtitle4.PropTypes = {
	color: React.PropTypes.string
}

Subtitle4.defaultProps = {
	color: '#FFF'
}

export default Subtitle4