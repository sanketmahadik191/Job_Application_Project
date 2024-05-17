const express = require("express");
const mongoose = require("mongoose");

const app = express();

const jobRoutes = require("./routes/job");

app.use(express.json());
app.use(jobRoutes)

// moongose
mongoose
.connect("mongodb://localhost:27017/jobApp")
.then(()=>console.log("Connection done"))
.catch((err)=>console.log("error"+err))

//routes

app.get('/',(req,res)=>{
    res.send("helelo")
})

app.listen(3002,()=>{
    console.log("Server Started");
})

