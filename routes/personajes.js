import { Router } from 'express';
import { PersonaModel } from '../models/personaje.js';

 export const apiRouter = Router();

apiRouter.get('/', async(req,res)=>{
    const {house} = req.query
    const hp =  await PersonaModel.getAll({house})
    res.json(hp)
})

apiRouter.get('/:id', async(req,res)=>{
    
    const {id} = req.params
    const hp = await PersonaModel.getById({id})
    if(hp) return res.json(hp)
    res.status(404).json({
        message: "Personaje not Found"
    })
})

apiRouter.delete('/:id', async (req,res)=>{
    
    const {id} = req.params
    const result = await PersonaModel.deleteById({id})

    if(result === false) return res.status(404).json({
        message: 'Personaje not Found'
    })
    
    res.status(200).json({
        message: "Personaje deleted"
    })
})



