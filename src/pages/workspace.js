import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import ResizableDragableBox from '../containers/resize-draggable-box'
import DragableBox from '../elements/box-draggable'
import DnDBox from '../elements/box-dnd'
import Box from '../elements/box'
import Icon from '../elements/icon'
import Subtitle1 from '../elements/subtitle1'
import Title from '../elements/title'
import TitleDraggable from '../elements/title-draggable'
import Subtitle1Draggable from '../elements/subtitle1-draggable'
import Subtitle2Draggable from '../elements/subtitle2-draggable'
import Subtitle3Draggable from '../elements/subtitle3-draggable'
import Subtitle4Draggable from '../elements/subtitle4-draggable'
import Subtitle5Draggable from '../elements/subtitle5-draggable'
import Layer from '../components/layer'
import ElementProperties from '../components/element-properties'
import Logo from '../components/logo'

const Workspace = () => {
	return (
		<Box height="100%" background-color="gray" flex-direction="row">
			<Box flex-grow="1">
				<Title color="white">Elements panel</Title>

				<TitleDraggable type="TitleDraggable" color="white" value="Title">Title</TitleDraggable>
				<Subtitle1Draggable type="Subtitle1Draggable" color="white" value="Subtitle 1">Subtitle 1</Subtitle1Draggable>
				<Subtitle2Draggable type="Subtitle2Draggable" color="white" value="Subtitle 2">Subtitle 2</Subtitle2Draggable>
				<Subtitle3Draggable type="Subtitle3Draggable" color="white" value="Subtitle 3">Subtitle 3</Subtitle3Draggable>
				<Subtitle4Draggable type="Subtitle4Draggable" color="white" value="Subtitle 4">Subtitle 4</Subtitle4Draggable>
				<Subtitle5Draggable type="Subtitle5Draggable" color="white" value="Subtitle 5">Subtitle 5</Subtitle5Draggable>


				<Subtitle1 color="white">Box Draggable Resize</Subtitle1>
				<ResizableDragableBox width="50px" height="50px" background-color="purple" type="Box"/>
				
				<Subtitle1 color="white">Box Draggable</Subtitle1>
				<DragableBox width="50px" height="50px" background-color="purple" type="Box"/>
				
				<Subtitle1 color="white">Box DnD</Subtitle1>
				<DnDBox width="50px" height="50px" background-color="purple" type="Box"/>
			
				<Subtitle1Draggable type="Subtitle" color="white" value="drag text ;)">Subtitle Draggable</Subtitle1Draggable>
			
				<Icon name="down-arrow"/>
				<Logo link="/#" image="/src/assets/images/Jevelin-logov1.png"/>
			</Box>

			<Layer/>

			<ElementProperties/>

		</Box>
	)
}

export default DragDropContext(HTML5Backend)(Workspace)