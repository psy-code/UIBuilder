import React from 'react'
import styled from 'styled-components'

const Subtitle5 = styled.h6`
	border: ${ ({selected}) => (selected ? '1px solid red' : 'none')}
	color: ${ props => props.color }
	text-align: ${ (props) => (props.hasOwnProperty('text-align') ? props['text-align'] : 'none')}
`

Subtitle5.PropTypes = {
	color: React.PropTypes.string
}

Subtitle5.defaultProps = {
	color: '#FFF'
}

export default Subtitle5