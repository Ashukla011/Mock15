const mongoose=require("mongoose");


const modelSchema=mongoose.Schema({
    name:String,
    email:String,
    destination:String,
    no_of_travellers:Number,
    budget:Number,

})

Tripmodel=mongoose.model("Trip",modelSchema)


module.exports={Tripmodel}