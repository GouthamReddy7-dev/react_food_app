const mongoose=require("mongoose")

const customersschema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const customermodel=mongoose.model("customers",customersschema)//customers is table name and second is schema name it is like models.model in django
module.exports= customermodel