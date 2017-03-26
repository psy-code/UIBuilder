import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import ResizableDragableBox from '../containers/resize-draggable-box'
import DragableBox from '../elements/box-draggable'
import DnDBox from '../elements/box-dnd'
import Box from '../elements/box'
import Icon from '../elements/icon'
import Subtitle from '../elements/subtitle'
import Title from '../elements/title'
import SubtitleDraggable from '../elements/subtitle-draggable'
import Layer from '../components/layer'
//import ElementProperties from '../components/element-properties'
import Logo from '../components/logo'

const Workspace = () => {
	return (
		<Box height="100%" background-color="gray" flex-direction="row">
			<Box flex-grow="1">
				<Title color="white">Elements panel</Title>

				<Subtitle color="white">Box Draggable Resize</Subtitle>
				<ResizableDragableBox width="50px" height="50px" background-color="purple" type="Box"/>
				
				<Subtitle color="white">Box Draggable</Subtitle>
				<DragableBox width="50px" height="50px" background-color="purple" type="Box"/>
				
				<Subtitle color="white">Box DnD</Subtitle>
				<DnDBox width="50px" height="50px" background-color="purple" type="Box"/>
			
				<SubtitleDraggable type="Subtitle" color="white" value="drag text ;)">Subtitle Draggable</SubtitleDraggable>
			
				<Icon name="down-arrow"/>
				<Logo link="/#" image="/src/assets/images/Jevelin-logov1.png"/>
			</Box>

			<Layer/>

			{/*<ElementProperties/>*/}

		</Box>
	)
}

export default DragDropContext(HTML5Backend)(Workspace)