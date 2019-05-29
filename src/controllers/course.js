const Course = require('../models/course');

async function addCourse(req, res) {
  const course = new Course({
    code: 'EFG3',
    name: 'Intro to Web',
    description: 'intro'
  });
  await course.save();
  return res.json(course);
}

function getCourse(req, res) {}

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
