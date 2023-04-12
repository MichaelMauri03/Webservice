const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { User } = require('../models/user');

router.use(bodyParser.json());

router.get('/users', async (req, res) => {
  try{
    const { email, password } = getEmailAndPasswordFromAuthorizationHeader(req.headers.authorization);
    const user = await User.findOne({ where: { Email: email, password: password }});
    if (!user) {
      return res.json({ message: 'Utente inesistente' });
    }
    const users = await User.findAll();
    res.json(users);
  }catch(error){
  console.log(error)
  }
  });

router.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  res.json(user);
});

module.exports = router;

function getEmailAndPasswordFromAuthorizationHeader(authorizationHeader) {
  if (!authorizationHeader) {
    return null;
  }
  const encodedCredentials = authorizationHeader.replace('Basic ', '');
  const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString('utf-8');
  const [email, password] = decodedCredentials.split(':');
  return { email, password };
}