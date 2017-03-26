import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
&:hover {
	> .hover_workarround {
		display: block;
	}
}
text-decoration: none;
${ props => {
	let styles = {}
	const styleProps = [
		'background', 'background-color', 'background-image', 'background-size', 'background-position',
		'background-attachment', 'color', 'width', 'height', 'opacity', 'margin', 'margin-top', 'position',
		'align-content', 'display', 'padding', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top',
		'font-size', 'font-family', 'font-weight', 'white-space', 'line-height']

	styleProps.forEach( property => {
		if (props.hasOwnProperty(property))
			styles[property] = props[property]
	})

	return styles
} }
`
Link.propTypes = {
	href: React.PropTypes.string.isRequired
}

export default Link