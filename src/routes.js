const express = require('express');
const studentRoute = require('./routes/student');
const courseRoute = require('./routes/course');
const userRoute = require('./routes/user');
const router = express.Router();

router.use('/students', studentRoute);
router.use('/courses', courseRoute);
router.use('/users', userRoute);

module.exports = router;
