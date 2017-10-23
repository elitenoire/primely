const express = require('express');
const bodyParser = require('body-parser');
const validator = require('../../common/utils/validator'); //in validate.js
const studentRouter = express.Router();

studentRouter.use(bodyParser.json());


studentRouter.get('/students', (req, res) => {
  //
  res.send('List of Student')
});


studentRouter.get('/students/:id', (req, res) => {
  let id = req.params.id;
  //
  res.send('Student Detail')
});


studentRouter.post('/students', (req, res) => {
  //validate schema
  //create student resource
  res.send('New Student created')
});


studentRouter.delete('/students/:id', (req, res) => {
  let id = req.params.id;
  //
  res.send('Deleted Student')
});

module.exports = studentRouter;