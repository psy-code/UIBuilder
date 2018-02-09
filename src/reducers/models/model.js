import {fk,  attr, Model} from 'redux-orm'

export class Node extends Model {}

Node.modelName = 'Node'

Node.fields = {
	_id: attr(),
	type: attr(),
	selected: attr(),
	//parent: fk('Node'),
	parent: fk('Node', 'children')
}