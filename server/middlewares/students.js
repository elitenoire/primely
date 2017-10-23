const express = require('express');
const bodyParser = require('body-parser');
const validator = require('../../common/utils/validator'); //in validate.js
const studentRouter = express.Router();

studentRouter.use(bodyParser.json());


studentRouter.get('/students', (req, res) => {
  //
});


studentRouter.get('/students/:id', (req, res) => {
  let id = req.params.id;
  //
});


studentRouter.post('/students', (req, res) => {
  //validate schema
  //create student resource
});


studentRouter.delete('/students/:id', (req, res) => {
  let id = req.params.id;
  //
});

module.exports = studentRouter;