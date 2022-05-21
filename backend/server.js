const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000

const app = express()

app.use('/api/fit', require('./routes/userRoutes'))


app.listen(PORT, ()=>console.log(`server running on port ${PORT}`)) 