const jobModel= require("../model/job");

const createJob= async(req,res) =>{

//   process to add data and create job

   const jobObj= req.body;
   const newJob= jobModel(jobObj);
   const newlySavedJob=await newJob.save();

//    --------

    res.json({
        success:true,
        message: "job created succcessfully",
        jobId: newlySavedJob._id,
    });
};

const listJob= async(req,res) =>{
const {minSalary, maxSalary} = req.query; /*filter minimum salary */
const jobsList = await jobModel.find({
    $and: [
        {
            salary:{$gte:minSalary}
        },
        {
            salary:{$lte:maxSalary}
        },
    ],
});


    res.json({
        success:true,
        message: " list job api",
        results: jobsList,
    });
};

const editJob= async(req,res) =>{
    const jobId= req.params.id;  /* use id to find record and req,body to update*/
 
    // fineOneAndUpdate method------ this method only update one one matching record>>>>
    // const findObj={
    //     title:"fullstack developer",
    // };
    // const updateObj={
    //     location:"ayodhya",
    // };
    // await jobModel.findOneAndUpdate(findObj,updateObj);


    // ------===>>>>>updateMany method

    // await jobModel.updateMany(findObj,updateOb); //update all matching records

    await jobModel.findByIdAndUpdate(jobId, req.body);
    res.json({
        success:true,
        message: " edit job api"
    });
};

const deleteJob= async(req,res) =>{
    const jobId= req.params.id;

    // delete only one job by object

    // const findObj={
    //     age:30,
    // }
    // await jobModel.findOneAndDelete(findObj);
    // ----------
    
    // await jobModel.deleteMany(findObj);
    // delete many job with same object
    // --------->>>
    
    await jobModel.findByIdAndDelete(jobId);
    res.json({
        success:true,
        message: "delete job api successfully"
    });
};

const jobController={
    createJob,
    listJob,
    editJob,
    deleteJob
}

module.exports = jobController;