const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Person = require('./Schemas/person')
const mongoose = require('mongoose')
const homeRouter = require("./routes/home.js")
mongoose.connect('mongodb://localhost:27017/SignUp',{useNewUrlParser : true},(error)=>{
    if(error){
        console.log("Error connecting to database..!")
    }else{
        console.log("Connected to database..!")
    }
})

app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.listen(3000,()=>{
    console.log("Server listening at port 3000..!!")
})
app.use('/',homeRouter)
