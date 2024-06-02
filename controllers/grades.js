const Grade = require('../models/Grade');

module.exports = {
  createGrade,getGradeById,getGrades,updateGrade
};

async function createGrade(req, res) {
  try {
    const grade = await Grade.create(req.body);

    res.status(200).json(grade);
  } catch (err) {
    res.status(400).json('No Beuno:(');
  }
}
// Get Grade by ID
async function getGradeById(req, res) {
    try {
      const grade = await Grade.findById(req.params.id);
  
      res.status(200).json(grade);
    } catch (err) {
      res.status(400).send(err);
    }
  }
  async function getGrades(req, res) {
    try {
      const grades = await Grade.find({});
  
      res.status(200).json(grades);
    } catch (err) {
      res.status(400).send(err);
    }
  }
// Update a single user by ID
async function updateGrade(req, res) {
    try {
      const updatedGrade = await Grade.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
  
      res.status(200).json(updatedGrade);
    } catch (err) {
      res.status(400).send(err);
    }
  }