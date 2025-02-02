export const schemaTypes = [product]; // Replace [...] with your schema definitions



import { type SchemaTypeDefinition } from 'sanity'
import product from './product'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}

