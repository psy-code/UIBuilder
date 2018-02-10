import { fk,  attr, Model} from 'redux-orm'
import { DELETE_NODE, SELECT_NODE, CREATE_NODE } from '../../actions'

export class Node extends Model {
	static reducer(action, Node) {

		const {payload, type} = action

		switch (type) {

			case DELETE_NODE:
				Node.withId(payload).delete()
				break

			case SELECT_NODE:
				Node.all().toModelArray().map(node => {
					if (node.id === payload)
						node.selected = !node.selected
					else
						node.selected = false
				})
				break

			case CREATE_NODE:
				Node.create({
					parent: 	payload.parentId,
					text: 		payload.text,
					type: 		payload.nodeType
				})
				break
		}
	}
}

Node.modelName = 'Node'

Node.fields = {
	_id: attr(),
	type: attr(),
	selected: attr(),
	parent: fk('Node', 'children')
}
