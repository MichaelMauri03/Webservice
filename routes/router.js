const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.set({
    'Content-type': 'application/json'
  });
  res.send({health : 'ok'});
});

module.exports = router;