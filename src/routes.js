const express = require('express');
const studentRoute = require('./routes/student');
const courseRoute = require('./routes/course');
const router = express.Router();

router.use('/students', studentRoute);
router.use('/courses', courseRoute);

module.exports = router;
