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

async function updateCourse(req, res) {
  const { id: code } = req.params;
  const { name, description } = req.body;
  const newCourse = await Course.findByIdAndUpdate(
    code,
    { name, description },
    {
      new: true // return the updated object
      // runValidators: true // run validator against new value
    }
  );
  if (!newCourse) {
    return res.status(404).json('course not found');
  }
  return res.json(newCourse);
}

async function deleteCourse(req, res) {
  const { id: code } = req.params;
  const course = await Course.findByIdAndDelete(code);
  if (!course) {
    return res.status(404).json('course not found');
  }
  return res.sendStatus(200);
}

module.exports = {
  addCourse,
  getAllCourses,
  getCourse,
  updateCourse,
  deleteCourse
};
