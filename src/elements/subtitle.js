import React from 'react'
import styled from 'styled-components'

const Subtitle = styled.h2`
	color: ${ props => props.color }
`

Subtitle.PropTypes = {
	color: React.PropTypes.string
}

Subtitle.defaultProps = {
	color: '#FFF'
}


export default Subtitle