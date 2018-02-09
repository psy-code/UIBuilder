export default function bootstrap(schema) {
	const state = schema.getEmptyState()

	// Begin a mutating session with that state.
	// `state` will be mutated.
	const session = schema.mutableSession(state)

	// Model classes are available as properties of the
	// Session instance.
	const Node = session.Node

	// Start by creating entities whose props are not dependent
	// on others.
	Node.create({
		id: 0,
		parent: null,
		type: 'BoxDroppable',
		styles: {
			height: '100%',
			'background-color': 'blue',
			'flex-grow': '5'
		}
	})

	Node.create({
		id: 1,
		parent: 0,
		type: 'BoxDroppable',
		styles: {
			height: '100%',
			'background-color': 'blue',
			'flex-grow': '5'
		}
	})
	/*
	const user = User.create({
		id: 0, // optional. If omitted, Redux-ORM uses a number sequence starting from 0.
		name: 'Tommi',
	});
	const otherUser = User.create({
		id: 1, // optional.
		name: 'John',
	});

	// Tags to start with.
	const cero = Node.create({ name: 'work' });
	const personal = Tag.create({ name: 'personal' });
	const urgent = Tag.create({ name: 'urgent' });
	const chore = Tag.create({ name: 'chore' });
*/
	// Todo's for `user`
	/*
	Todo.create({
		text: 'Buy groceries',
		done: false,
		user,
		tags: [personal], // We could also pass ids instead of the Tag instances.
	});
	Todo.create({
		text: 'Attend meeting',
		done: false,
		user,
		tags: [work],
	});
	Todo.create({
		text: 'Pay bills',
		done: false,
		user,
		tags: [personal, urgent],
	});

	// Todo's for `otherUser`
	Todo.create({
		text: 'Prepare meals for the week',
		done: false,
		user: otherUser,
		tags: [personal, chore],
	});
	Todo.create({
		text: 'Fix the washing machine',
		done: false,
		user: otherUser,
		tags: [personal, chore],
	});
	Todo.create({
		text: 'Negotiate internet subscription',
		done: false,
		user: otherUser,
		tags: [personal, urgent],
	});*/

	// Return the whole Redux initial state.
	return {
		orm: state,
		idRoot: 0
	}
}