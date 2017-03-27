import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
	list-style: none;
		${ props => {
			const flexParent = ['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content']
			const flexChildren = ['flex', 'order', 'flex-grow', 'flex-shrink', 'flex-basis', 'align-self']
			const styleProps = [
				'background', 'background-color', 'background-image', 'background-size', 'background-position',
				'background-attachment', 'color', 'width', 'height', 'opacity', 'margin', 'margin-top', 'position',
				'align-content', 'display', 'padding', 'padding-bottom']

			let styles = {}

			// add common css style properties
			styleProps.forEach( style => {
				if (props.hasOwnProperty(style))
					styles[style] = props[style]
			})

			// add flexParent properties to styles
			flexParent.forEach( style => {
				if (props.hasOwnProperty(style))
					styles[style] = props[style]
			})

			// add flexChildren properties to styles
			flexChildren.forEach( style => {
				if (props.hasOwnProperty(style))
					styles[style] = props[style]
			})

			// if exist a flex parent prop, is a flex element, add display flex
			flexParent.forEach( style => {
				if (styles.hasOwnProperty(style) && !styles.hasOwnProperty('display'))
					styles['display'] = 'flex'
			})

			return styles
		}}
`

List.propTypes = {
	'flex-direction': React.PropTypes.oneOf(['row', 'column'])
}

List.defaultProps = {
	'flex-direction': 'row'
}

export default List