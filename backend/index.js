import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

const app = express()

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

connectDB()

app.get('/', (req, res) => {
  res.send('API is running')
})

// getData()

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
