const mongoose= require("mongoose");

// new mongoose.Schema helps to conver object into schema

const jobSchema =new mongoose.Schema({
    title: {
        type:String,
        required:true,  /*if this value not appear data not store*/
        // unique:true,   /*prevent dupliction*/
    },
    description: {
        type:String,
        required:true,
    },
    company: {
        type:String,
        required:true,
    },
    location: {
        type:String,
        required:true,
    },
    salary: {
        type:Number,
        // required:true,
        default:0,
    },

});

// to make collections

const jobModel=mongoose.model("jobs",jobSchema);
module.exports= jobModel;