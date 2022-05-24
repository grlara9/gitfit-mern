const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')

connectDB()

//middleware to use body, ex :req.body
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const app = express()

app.use('/api/user', require('./routes/userRoutes'))


app.listen(PORT, ()=>console.log(`server running on port ${PORT}`)) 