const express = require('express');
const {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
  getStudent,
  addCourse
} = require('../controllers/student');
const router = express.Router();

router.get('/', getAllStudents);
router.get('/:id', getStudent);
router.post('/', addStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);
router.post('/:id/courses/:code', addCourse);

module.exports = router;
