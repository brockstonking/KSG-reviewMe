const express = require('express');
const router = express.Router();

router.get('/get/test', (req, res, next) => {
    res.status(200).send('working')
  })

module.exports = router;