import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Node from '../containers/node'

const Layer = () => {
	return (
		<Node id={0} />
	)
}

export default DragDropContext(HTML5Backend)(Layer)