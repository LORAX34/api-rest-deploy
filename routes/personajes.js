import { Router } from 'express';
import { PersonaController } from '../controllers/personas.js';

 export const apiRouter = Router();

apiRouter.get('/', PersonaController.getAll)
apiRouter.get('/:id',PersonaController.getById)
apiRouter.delete('/:id', PersonaController.deleteById)



