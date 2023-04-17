const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { User } = require('../models/user');

router.use(bodyParser.json());

router.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.put('/users/create', async (req, res) => {
  const user = await User.create(req.body);
  res.sendStatus(201);
});
router.delete('/users/delete', async (req, res) => {
  const user = await User.destroy({where: {ID : req.body.ID}});
  res.sendStatus(200);
});
router.patch('/users/patch', async (req, res) => {
  const user = await User.update(req.body,{where: {ID : req.body.ID}});
  res.sendStatus(200);
});
module.exports = router;