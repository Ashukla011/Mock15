const express=require("express");
const {Tripmodel}=require("../module/Trip.module");

const tripRouter=express.Router();

tripRouter.get("/",async(req,res)=>{
    try{
     let data=await Tripmodel.find()
     res.send(data)
    }
    catch(err){
        console.log(err)
    }

})

tripRouter.post("/trip",async(req,res)=>{
    try{
        const payload=req.body;
        try{
    const new_trip=new Tripmodel(payload)
    await new_trip.save();
    res.send("Created the trip")
        }
        catch(err){
            console.log(err)
        }
    }
    catch(err){
        console.log(err)
    }
})

module.exports={tripRouter};