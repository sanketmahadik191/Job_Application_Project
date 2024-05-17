const jobModel = require("../model/job");

const createJobs = async (req, res) => {
  const jobObj = req.body;
  const newJob = new jobModel(jobObj);
  await newJob.save();
  res.json({
    success: true,
    message: "Job added succesful",
  });
};

const listJobs = async (req, res) => {
  const {minSalary, maxSalary} = req.query;
  const jobsList = await jobModel.find({
    $and:[{salary :{$gte:minSalary}}]
  });

  res.json({
    success:true,
    message:"list job api",
    result: jobsList
  })
};

const editJobs = async (req, res) => {
  
  const id = req.parms.id;
  console.log(id);
  jobModel.findByIdAndUpdate(id,)
  res.json({
    success: true,
    message: "Dummy edit",
  });
};

const deleteJobs = async (req, res) => {
  res.json({
    success: true,
    message: "Dummy delete",
  });
};

const jobController = {
  createJobs,
  editJobs,
  listJobs,
  deleteJobs,
};

module.exports = jobController;
