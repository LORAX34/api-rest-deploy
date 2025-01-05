import express from 'express'
import { apiRouter } from './routes/personajes.js'
import { corsMiddlewares } from './middlewares/cors.js'
const app = express()

app.use(express.json())
app.use(corsMiddlewares())
app.use('/api',apiRouter)

const PORT = process.env.PORT ?? 3000
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})