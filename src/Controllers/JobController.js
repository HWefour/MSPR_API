const {getAllJobs , createJob} = require("../Models/Job");

exports.getAllJobs = async (req , res) => {
    try{
        const job = await getAllJobs();
        res.status(200).json(job);
    } catch(err) {
        res.status(400).json({message : err.message});
    }
};

exports.createJob = async (req , res) => {
    try {
        const job = await createJob(req.body);
        res.status(201).json(job);
    } catch(err){
        res.status(400).json({message: err.message})
    }
};