// console.log("hello");

const express= require("express");
const mongoose= require("mongoose");

const jobRoutes= require("./route/job");
// const mongoose = require("mongodb");


const app= express();

app.use(express.json());

mongoose
.connect("mongodb://localhost:27017/jobapp")
.then(()=> console.log("server established"))
.catch(()=> console.log("error",err));


app.use(jobRoutes);

app.listen(8080,()=>console.log("server is running"));