const express = require('express');
const router = express.Router();

const engcaption = require('./engcaption')
const engimage = require('./engimage')
const labels = require('./labels')
const viecaption = require('./viecaption')

router.use('/engcaption', engcaption)
router.use('/engimage',engimage);
router.use('/labels', labels)
router.use('/viecaption', viecaption);


module.exports = router;