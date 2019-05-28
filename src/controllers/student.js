const Student = require('../models/student');

async function addStudent(req, res) {
  const student = new Student({
    firstName: 'a',
    lastName: 'b',
    email: '123@test.com'
  });
  await student.save();
  return res.json(student);
}

function getStudent(req, res) {}

async function getAllStudents(req, res) {
  const students = await Student.find();
  return res.json(students);
}

function updateStudent(req, res) {}

function deleteStudent(req, res) {}

module.exports = {
  addStudent,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent
};
