import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
`

Label.PropTypes = {
	color: React.PropTypes.string
}

Label.defaultProps = {
	color: '#FFF'
}

export default Label