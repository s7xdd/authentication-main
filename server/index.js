 const express = require('express')
 const dotenv = require('dotenv').config()
 const cors = require('cors')
 const mongoose = require('mongoose')

 const app = express()
 app.use(express.json())

 mongoose.connect(process.env.MONGO_URL).then(() => console.log('Connected successfully')).catch(() => console.log('Error'))
 
 app.use('/', require('./routes/authRoutes'))

 port = 5000
 app.listen(port, () => console.log(`Listening on port ${port}`))