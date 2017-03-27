import React from 'react'
import styled from 'styled-components'

const Subtitle2 = styled.h3`
	border: ${ ({selected}) => (selected ? '1px solid red' : 'none')}
	color: ${ props => props.color }
	text-align: ${ (props) => (props.hasOwnProperty('text-align') ? props['text-align'] : 'none')}
`

Subtitle2.PropTypes = {
	color: React.PropTypes.string
}

Subtitle2.defaultProps = {
	color: '#FFF'
}

export default Subtitle2