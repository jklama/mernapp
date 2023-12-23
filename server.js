const express = require('express')

const dotenv = require('dotenv')
dotenv.config()

const connectDB = require('./backend/config/dbConnect')

// Connect Database
connectDB()

// Init Middleware
const app = express()

// Bodyparser Middleware

app.use(express.json())

// Define Routes
app.use('/api/goals', require('./backend/router/goalRoute'))
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
