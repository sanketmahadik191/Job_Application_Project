const express = require("express");
const mongoose = require("mongoose");
const jobRoutes = require("./routes/job");

const app = express();
app.use(express.json());

//----------- moongose-----------------------------------
mongoose
.connect("mongodb+srv://sanketm457:A24BoRgX2tyAHyOz@jobapp.ezdevqu.mongodb.net/")
// .connect("mongodb://localhost:27017/jobApp")
.then(()=>console.log("Connection done"))
.catch((err)=>console.log("Error in connection"+err))

//--------------routes-----------------------------------

app.get('/',(req,res)=>{
    res.send("helelo")
})

app.use(jobRoutes)

app.listen(10000,()=>{
    console.log("Server Started");
})



//----------------other-------------------------
//mongodb+srv://sanketm457:A24BoRgX2tyAHyOz@jobapp.ezdevqu.mongodb.net/
// sanketm457
