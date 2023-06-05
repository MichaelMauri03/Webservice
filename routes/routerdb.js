const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
const swaggerSetup = require('../swagger.js');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API per la gestione degli utenti
 */

/**
 * @swagger
 * /routerdb/users:
 *   get:
 *     summary: Ottieni tutti gli utenti
 *     security:
 *       - basicAuth: [] 
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/user'
 */
router.get('/users', async (req, res) => {
  try {
    //const { email, password } = getEmailAndPasswordFromAuthorizationHeader(req.headers.authorization);
    //const user = await User.findOne({ where: { Email: email, password: password }});
    //if (!user) {
      //return res.json({ message: 'Utente inesistente' });
    //}
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
});

/**
 * @swagger
 * /routerdb/users/create:
 *   put:
 *     summary: Crea un nuovo utente
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       '201':
 *         description: Created
 */
router.put('/users/create', async (req, res) => {
  const user = await User.create(req.body);
  res.sendStatus(201);
});

/**
 * @swagger
 * /routerdb/users/delete:
 *   delete:
 *     summary: Elimina un utente
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       '200':
 *         description: OK
 */
router.delete('/users/delete', async (req, res) => {
  const user = await User.destroy({ where: { ID: req.query.ID } });
  res.sendStatus(200);
});

/**
 * @swagger
 * /routerdb/users/patch:
 *   patch:
 *     summary: Aggiorna un utente
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       '200':
 *         description: OK
 */
router.patch('/users/patch', async (req, res) => {
  const user = await User.update(req.body, { where: { ID: req.body.ID } });
  res.sendStatus(200);
});

module.exports = router;

function getEmailAndPasswordFromAuthorizationHeader(authorizationHeader) {
  if (!authorizationHeader) {
    return null;
  }
  const encodedCredentials = authorizationHeader.replace('Basic ', '');
  const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString('utf-8');
  const [Email, password] = decodedCredentials.split(':');
  return { Email, password };
}

