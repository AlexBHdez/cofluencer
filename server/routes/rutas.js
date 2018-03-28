const express = require('express');
const router = express.Router();

router.get('/private', (req, res, next) => {
  res.status(200).json({ message: 'Hola estas en la ruta' });
});

module.exports = router;
