const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended:true}))
const Person = require("../Schemas/person.js")

const passmatch = (req,res,next)=>{
    if(req.body.Password === req.body.CnfmPass){
        next()
    }else{
        res.render('index',{match : "Passwords don't match..!"})
    }
}

router.route('/')
.get((req,res)=>{
    res.render('index',{match : ""})
})
.post(passmatch,async(req,res)=>{
    const person = new Person({
        username : req.body.Username,
        email : req.body.Email,
        password : req.body.Password
    })
    try{
        const p = await person.save()
        res.json(p)
    }
    catch(err){
        // res.send(err.message)
        // console.log(err)
        res.render('index',{match : err.message})
    }
})

router.get('/getall',async(req,res)=>{
    const people = await Person.find()
    res.json(people)
})

// router.get('/:id',async(req,res)=>{
//     const p = await Person.findById(req.params.id)
//     res.json(p)
// })

//patch method and remove for deleting 
module.exports = router