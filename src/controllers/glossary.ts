import { Request, Response } from 'express'
import { Glossary } from '../models/glossary'
export const getGlossary = async (req: Request, res: Response) => {
	try {
		const glossary = await Glossary.find()
        
		res.status(200).json(glossary)
	} catch (error: any) {
		res.status(500).json({message: error.message})
	}
}


export const getGlossaryById = async (req:Request, res:Response) => {
	const {id} = req.params
	try {
		const glossary = await Glossary.findById(id)
        
		res.status(200).json(glossary)
	} catch (error: any) {
		res.status(500).json({message: error.message})
	}
}

export const postGlosary =async (req:Request, res:Response) => {

	const {name, description} = req.body
	try {
		const glossary = new Glossary({name, description})


		await glossary.save()
        
		res.status(200).json(glossary)
	} catch (error: any) {
		res.status(500).json({message: error.message})
	}
}

export const updateGlossary = async (req:Request, res:Response) => {
	const {id} = req.params
	try {
		const glossary = await Glossary.findByIdAndUpdate(id, req.body, {new:true})
        
		res.status(200).json(glossary)
	} catch (error: any) {
		res.status(500).json({message: error.message})
	}
}

export const deleteGlossary = async (req:Request, res:Response) => {
	const {id} = req.params
	try {
		await Glossary.findByIdAndDelete(id)
        
		res.status(200).json({message: 'definition deleted successfully'})
	} catch (error: any) {
		res.status(500).json({message: error.message})
	}
}