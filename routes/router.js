const express = require("express");
const router = express.Router();
const swaggerSetup = require('../swagger.js');

router.get('/health', (req, res) => {
  res.set({
    'Content-type': 'application/json'
  });
  res.send({health : 'ok'});
});
/**
 * @swagger
 * /router/health:
 *   get:
 *     summary: Health ok 
 *     tags: [Health]
 *     responses:
 *       '200':
 *         description: OK 
 */

module.exports = router;