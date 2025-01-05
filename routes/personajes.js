import { Router } from 'express';
import { readJSON } from '../util.js';

const hp = readJSON('./api/personajes.json') 
 export const apiRouter = Router();

apiRouter.get('/',(req,res)=>{
    
    const {house} = req.query
   
    if(house){
        const filterHouse = hp.filter((persona)=>persona.house===house);
        return res.json(filterHouse);   
    }

    res.json(hp)
})

apiRouter.get('/:id',(req,res)=>{
    
    const {id} = req.params

    const personaje = hp.find((persona)=> persona.id === id)

    if(personaje) return res.status(200).json(personaje)

    res.status(404).json({
        message: "Personaje not Found"
    })
})

apiRouter.delete('/:id',(req,res)=>{
    
    const {id} = req.params

    const personajeIndex = hp.findIndex(persona => persona.id === id)

    if(personajeIndex === -1){
        return res.status(404).json({
            message: "Personaje not Found"
        })
    }
    hp.splice()
    hp.splice(personajeIndex,1)

    res.status(200).json({
        message: "Personaje eliminado"
    })
})



