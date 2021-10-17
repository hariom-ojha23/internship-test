import express from 'express'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import addData from './addData.js'
import connectDB from './config/db.js'
import dataRoute from './routes/dataRoute.js'

const app = express()
const __dirname = path.resolve(path.dirname(''))

dotenv.config()
connectDB()
addData()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, './frontend')))
app.use(cors())

app.use('/data', dataRoute)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
