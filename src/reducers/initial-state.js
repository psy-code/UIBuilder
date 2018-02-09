const initialDataTree = {
	'layer': {
		selected: []
	},
	0: {
		id: 0,
		type: 'BoxDroppable',
		counter: 0,
		styles: {
			height: '100%',
			'background-color': 'blue',
			'flex-grow': '5'
		},
		childIds: [1, 2, 3, 4, 5],
		selected: false,
		parentId: null
	},
	1: {
		id: 1,
		type: 'Boxdnd',
		counter: 0,
		styles: {
			height: '100px',
			width: '100px',
			'background-color': 'green'
		},
		childIds: [],
		selected: false,
		parentId: 0
	}/*,
	2: {
		id: 2,
		type: 'Boxdnd',
		counter: 0,
		styles: {
			height: '100px',
			width: '100px',
			'background-color': 'yellow'
		},
		childIds: [],
		selected: false,
		parentId: 0 
	},
	3: {
		id: 3,
		type: 'Boxdnd',
		counter: 0,
		styles: {
			height: '100px',
			width: '100px',
			'background-color': 'orange'
		},
		childIds: [],
		selected: false,
		parentId: 0 
	},
	4: {
		id: 4,
		type: 'Subtitle1Draggable',
		text: 'Subtitle',
		counter: 0,
		styles: {
			'color': 'orange'
		},
		childIds: [],
		selected: false,
		parentId: 0 
	},
	5: {
		id: 5,
		type: 'Icon',
		name: 'down-arrow',
		counter: 0,
		styles: {
			'color': 'orange'
		},
		childIds: [],
		selected: false,
		parentId: 0 
	}*/
}

export default initialDataTree