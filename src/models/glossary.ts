import { Schema, model } from 'mongoose'

// 1. Create an interface representing a document in MongoDB.
interface IGlossary {
	name: string
	description: string
}


// 2. Create a Schema corresponding to the document interface.
const glossarySchema = new Schema<IGlossary>({
	name: { type: String, required: true },
	description: { type: String, required: true }
})

glossarySchema.methods.toJSON = function(){
	// eslint-disable-next-line no-unused-vars
	const {__v, ...glossary} = this.toObject()

	return glossary
}

// 3. Create a Model.
export const Glossary = model<IGlossary>('Glossary', glossarySchema)