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
		type: 'BoxDroppable',
		counter: 0,
		styles: {
			height: '50px',
			width: '50px',
			'background-color': 'green'
		},
		childIds: [],
		selected: false,
		parentId: 0
	},
	2: {
		id: 2,
		type: 'BoxDraggable',
		counter: 0,
		styles: {
			height: '50px',
			width: '50px',
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
			height: '50px',
			width: '50px',
			'background-color': 'orange'
		},
		childIds: [],
		selected: false,
		parentId: 0 
	},
	4: {
		id: 4,
		type: 'Subtitle',
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
	}
}

export default initialDataTree