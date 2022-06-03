const mongoose = require ('mongoose')
const express = require('express')
const port = 1999

const route = require('./Router/UserRoute')

const app = express()

const url = "mongodb://localhost/myDB"
mongoose.connect(url).then((req, res)=>{
    console.log('connected successfully')
}).catch((error)=>{
    console.log(error.message)
})

app.use(express.json())
app.use('/api', route)


app.listen(port, ()=>{
    console.log('listening to server' + port)
})