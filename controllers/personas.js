import { PersonaModel } from '../models/personaje.js'

export class PersonaController {
    static async getAll(req,res){
        const {house} = req.query
        const hp =  await PersonaModel.getAll({house})
        res.json(hp)
    }

    static async getById (req,res){
        const {id} = req.params
        const hp = await PersonaModel.getById({id})
        if(hp) return res.json(hp)
            res.status(404).json({
                message: "Personaje not Found"
            })
    }

    static async deleteById(req,res){
        const {id} = req.params
        const result = await PersonaModel.deleteById({id})
    
        if(result === false) return res.status(404).json({
            message: 'Personaje not Found'
        })
        
        res.status(200).json({
            message: "Personaje deleted"
        })
    }
}