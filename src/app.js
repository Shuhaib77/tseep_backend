import express from 'express'
import cors from  'cors'
import { DB } from '../config/connectDB.js'
import authRoute from './routes/authRoute.js'
import qpoolRoute from './routes/qpoolRoutes.js'

const app=express()

app.use(cors())
app.use(express.json())
app.use('/api',authRoute)
app.use('/api',qpoolRoute)
DB()

export default app

