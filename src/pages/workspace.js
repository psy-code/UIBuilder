import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import ResizableDragableBox from '../containers/resize-draggable-box'
import Box from '../elements/box'
import Subtitle from '../elements/subtitle'
import Layer from '../components/layer'

const Workspace = () => {
	return (
		<Box height="100%" background-color="gray" flex-direction="row">
			<Box flex-grow="1">
				<Subtitle color="white">Box</Subtitle>
				<ResizableDragableBox width="50px" height="50px" background-color="purple" type="ResizableDraggableBox"/>
			</Box>
			<Layer/>
		</Box>
	)
}

export default DragDropContext(HTML5Backend)(Workspace)