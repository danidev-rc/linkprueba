import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import routes from './routes/index.js'
import { FRONTEND_URL } from './config/enviroments.js'

const app = express()
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use('/api', routes)

if (process.env.NODE_ENV === 'production') {
  const path = await import('path')
  app.use(express.static('../../client/dist'))

  app.get('*', (req, res) => {
    console.log(path.resolve('client', 'dist', 'index.html'))
    res.sendFile(path.resolve('client', 'dist', 'index.html'))
  })
}

export default app
