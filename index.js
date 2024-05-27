// console.log("hello");

const express= require("express");
const mongoose= require("mongoose");
const dotenv= require("dotenv");

const jobRoutes= require("./route/job");
// const mongoose = require("mongodb");


const app= express();

dotenv.config();

app.use(express.json());

mongoose
.connect(process.env.DB_CONNECTION_URL)
.then(()=> console.log("server established"))
.catch(()=> console.log("error",err));


app.use(jobRoutes);

app.listen(10000,()=>console.log("server is running"));