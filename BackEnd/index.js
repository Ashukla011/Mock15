


const express=require("express");

const {connection}=require("./config/db")
require("dotenv").config();
const {tripRouter}=require("./routes/Trip.routes");

const cors=require("cors")

app=express();

app.use(express.json())

app.use(cors({
    origin:"*"
}))



app.use("/",tripRouter)



app.listen(4500,async()=>{
    try{
await connection;
console.log(`port is running on 4500`)
    }
    catch(err){
        console.log(err)
    }
    
})



