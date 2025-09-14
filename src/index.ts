import express from "express";
import router from "./router/router";
import mongoose, { mongo } from 'mongoose';
const app=express();

 mongoose.connect("mongodb://localhost:27017")
.then(()=>{console.log("DB connected successfully")})
.catch((err)=> console.log("error in db connection ",err))
app.use(express.json())


app.use("/api",router)


app.listen(4000,()=>{
    console.log("server is running at port : ",4000)
})