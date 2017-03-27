import styled from 'styled-components'

const ItemList = styled.li`
	&:hover {
		> .hover_workarround {
			display: block;
		}
	}
	${ props => {
		let styles = {}
		const styleProps = [
			'background', 'background-color', 'background-image', 'background-size', 'background-position',
			'background-attachment', 'color', 'width', 'height', 'opacity', 'margin', 'margin-top', 'position',
			'align-content', 'display', 'padding', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top',
			'display', 'align-items', 'position']

		styleProps.forEach( property => {
			if (props.hasOwnProperty(property))
				styles[property] = props[property]
		})

		return styles
	} }
`

export default ItemList