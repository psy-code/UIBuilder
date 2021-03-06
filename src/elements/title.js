import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
	border: ${ ({selected}) => (selected ? '1px solid red' : 'none')}
	text-align: ${ (props) => (props.hasOwnProperty('text-align') ? props['text-align'] : 'none')}
	color: ${ props => props.color }
`

Title.PropTypes = {
	color: React.PropTypes.string
}

Title.defaultProps = {
	color: '#FFF'
}

export default Title