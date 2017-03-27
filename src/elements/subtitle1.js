import React from 'react'
import styled from 'styled-components'

const Subtitle1 = styled.h2`
	border: ${ ({selected}) => (selected ? '1px solid red' : 'none')}
	color: ${ props => props.color }
	text-align: ${ (props) => (props.hasOwnProperty('text-align') ? props['text-align'] : 'none')}
`

Subtitle1.PropTypes = {
	color: React.PropTypes.string
}

Subtitle1.defaultProps = {
	color: '#FFF'
}

export default Subtitle1