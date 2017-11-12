const express = require('express');
const Student = require('../models/student')
const validate = require('../middlewares/validate')
const studentRouter = express.Router();


// Register a new student
studentRouter.post('/api/students', validate, async (req, res) => {
  const admin = {name : req.decoded.username, mode : 'created', timeStamp : Date.now()}
  const data = {...req.body, admin : [admin]}

  try {
    const student = await Student.create(data)
    res.status(200).json({ student, msg : 'Created new student' })
  }
  catch(err) {
    res.status(500).send(err)
  }
});


// Fetch list of students
studentRouter.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find()
    res.status(200).json({ students })
  }
  catch(err) {
    res.status(500).send(err)
  }
});


//View a student's profile
studentRouter.get('/api/students/:id', async (req, res) => {
  let id = req.params.id;
  const admin = {name : req.decoded.username, mode : 'viewed', timeStamp : Date.now()}
  try {
    let viewedStudent = await Student.findById(id)
    //student.admin.unshift(admin)
    //const viewedStudent = await student.save()
    res.status(200).json({ student : viewedStudent, msg : 'Viewing student info' })
  }
  catch(err) {
    res.status(500).send(err)
  }
});


// Update a student's profile
studentRouter.put('/api/students/:id', validate,  async (req, res) => {
  const id = req.params.id;
  const admin = {name : req.decoded.username, mode : 'edited', timeStamp : Date.now()}
  try {
    let student = await Student.findById(id)
    student.admin.unshift(admin)
    student.updatedAt = Date.now() // mongo takes care of this if making update req
    Object.assign(student, req.body)
    const updatedStudent = await student.save()

    res.status(200).json({ student : updatedStudent, msg : 'Edited student info' })
  }
  catch(err) {
    res.status(500).send(err)
  }
});


// Delete a student's profile from the record
studentRouter.delete('/api/students/:id', async (req, res) => {
  const id = req.params.id;
  const admin = {name : req.decoded.username, mode : 'deleted', timeStamp : Date.now()}
  try {
    await Student.findByIdAndRemove(id)
    res.status(200).json({ admin, msg : 'Deleted student info'})
  }
  catch(err) {
    res.status(500).send(err)
  }
});

module.exports = studentRouter;