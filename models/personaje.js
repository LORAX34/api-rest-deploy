import { readJSON } from '.../util.js';

const hp = readJSON('../api/personajes.json') 

export class PersonaModel{
    static async getAll ({house}){
        if(house){
            return hp.filter(
                persona => persona.house.some(g => g.toLowerCase() === genre.toLowerCase())
            )
        }

        return hp
    }

    static async getById ({id}){
        
        const personaje = hp.find((persona)=> persona.id === id)
        
        return personaje
    }

    static async deleteById ({id}){
        
    const personajeIndex = hp.findIndex(persona => persona.id === id)

    if(personajeIndex === -1) return false
    
    hp.splice(personajeIndex,1)
    
    return true
    }
}