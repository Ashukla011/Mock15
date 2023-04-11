const mongoose=require("mongoose")

mongoose.set('strictQuery', false)
require("dotenv").config();
const connection=mongoose.connect('mongodb+srv://kavanish011:super30shukla@cluster0.cqhfocy.mongodb.net/mock15?retryWrites=true&w=majority')

module.exports={connection};