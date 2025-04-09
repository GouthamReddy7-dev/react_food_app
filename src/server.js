const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const customermodel=require("./customers")
const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/school")
app.post('/login',(req,res)=>{
    const {name,password}=req.body
    customermodel.findOne({name:name})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("successful")
            }
            else{
                res.json("incorrect password")
            }
        }
        else{
            res.json("No record existed")
        }
    })
})
app.post('/register',(req,res)=>{
    customermodel.create(req.body)
    .then(customer=>res.json(customer))
    .catch(err=>res.json(err))
})
app.listen(3001,()=>{
    console.log("surver is running")
})