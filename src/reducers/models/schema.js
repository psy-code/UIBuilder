import { ORM } from 'redux-orm'
import { Node } from './model'

export const schema = new ORM()
schema.register(Node)
export default schema