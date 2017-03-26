import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
	border: ${ ({selected}) => (selected ? '1px solid red' : 'none')}
	color: ${ props => props.color }
`

Title.PropTypes = {
	color: React.PropTypes.string
}

Title.defaultProps = {
	color: '#FFF'
}

export default Title