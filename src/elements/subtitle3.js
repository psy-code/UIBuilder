import React from 'react'
import styled from 'styled-components'

const Subtitle3 = styled.h4`
	border: ${ ({selected}) => (selected ? '1px solid red' : 'none')}
	color: ${ props => props.color }
	text-align: ${ (props) => (props.hasOwnProperty('text-align') ? props['text-align'] : 'none')}
`

Subtitle3.PropTypes = {
	color: React.PropTypes.string
}

Subtitle3.defaultProps = {
	color: '#FFF'
}

export default Subtitle3