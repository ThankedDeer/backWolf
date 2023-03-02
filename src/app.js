import  express  from 'express'
import numeros from './routes/numeros.routes.js'
import reportes from './routes/reportes.routes.js'
import cors from 'cors'



const app = express()
app.use(cors());

app.use(express.json())

app.use(reportes)
app.use(numeros)

export default app;