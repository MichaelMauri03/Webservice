const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { User } = require('../lib/db-connection');

router.use(bodyParser.json());

router.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  res.json(user);
});

module.exports = router;