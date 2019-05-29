const Course = require('../models/course');

async function addCourse(req, res) {
  const { name, code, description } = req.body;

  const course = new Course({
    name,
    code,
    description
  });
  await course.save();
  return res.json(course);
}

async function getCourse(req, res) {
  const { id: code } = req.params;

  const course = await Course.findById(code);

  if (!course) {
    return res.status(404).json('course not found');
  }
  return res.json(course);
}

async function getAllCourses(req, res) {
  const courses = await Course.find();
  return res.json(courses);
}

function updateCourse(req, res) {}

function deleteCourse(req, res) {}

module.exports = {
  addCourse,
  getAllCourses,
  getCourse,
  updateCourse,
  deleteCourse
};
