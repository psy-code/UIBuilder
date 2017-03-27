import React from 'react'
import styled from 'styled-components'

const Subtitle = styled.h2`
	border: ${ ({selected}) => (selected ? '1px solid red' : 'none')}
	color: ${ props => props.color }
	text-align: ${ (props) => (props.hasOwnProperty('text-align') ? props['text-align'] : 'none')}
`

Subtitle.PropTypes = {
	color: React.PropTypes.string
}

Subtitle.defaultProps = {
	color: '#FFF'
}

export default Subtitle