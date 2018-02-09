import { schema } from '../reducers/models/schema'
import { createSelector } from 'reselect'

export const ormSelector = (state, id) => {
	console.log('ormSelector', state, id)
	return state.orm
}

export const nodes = createSelector(
	ormSelector,
	(state, id) => id,
	schema.createSelector((orm, id) => {

		const obj = Object.assign({}, orm.Node.withId(id).ref)
		obj.children = orm.Node.withId(id).children.toRefArray().map(node => node.id)
		
		return obj
		//return orm.Node.withId(idRoot).ref
		/*
		console.log('Runing selectors', idRoot)
		console.log('all', orm.Node.all())
		console.log('filtered', orm.Node.all().filter({id: idRoot}))
		let result = orm.Node.all().filter({id: idRoot}).toRefArray(node => {
			console.log(idRoot)
			console.log('node', node)
			const obj = Object.assign({}, node.ref)
			return obj
		})
		console.log('result', result)
		return result*/
	})
)