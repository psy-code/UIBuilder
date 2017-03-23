import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import ResizableDragableBox from '../containers/resize-draggable-box'
import DragableBox from '../elements/box-draggable'
import DnDBox from '../elements/box-dnd'
import Box from '../elements/box'
import Subtitle from '../elements/subtitle'
import Layer from '../components/layer'

const Workspace = () => {
	return (
		<Box height="100%" background-color="gray" flex-direction="row">
			<Box flex-grow="1">
				<Subtitle color="white">Box Draggable Resize</Subtitle>
				<ResizableDragableBox width="50px" height="50px" background-color="purple" type="Box"/>
				
				<Subtitle color="white">Box Draggable</Subtitle>
				<DragableBox width="50px" height="50px" background-color="purple" type="Box"/>
				
				<Subtitle color="white">Box DnD</Subtitle>
				<DnDBox width="50px" height="50px" background-color="purple" type="Box"/>
			</Box>
			<Layer/>
		</Box>
	)
}

export default DragDropContext(HTML5Backend)(Workspace)