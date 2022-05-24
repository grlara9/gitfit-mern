const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')

connectDB()

const app = express()

app.use('/api/user', require('./routes/userRoutes'))


app.listen(PORT, ()=>console.log(`server running on port ${PORT}`)) 