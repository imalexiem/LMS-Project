const Course = require('../models/courseModel');

// @desc    Get courses
// @route   GET /api/courses
// @access  Private (for now, we'll make it public for testing)
const getCourses = async (req, res) => {
  // Only find courses where the 'user' field matches the logged-in user's ID.
  const courses = await Course.find({ user: req.user.id });
  res.status(200).json(courses);
};

// @desc    Set course
// @route   POST /api/courses
// @access  Private
const setCourse = async (req, res) => {
  // Check for the new required fields from the model
  if (!req.body.code || !req.body.description) {
    res.status(400);
    // Send a more helpful error message
    throw new Error('Please add a course code and a description');
  }

  // Create a new course using the correct fields
  const course = await Course.create({
    code: req.body.code,
    description: req.body.description,
    progress: req.body.progress || 0, // Use provided progress or default to 0
    user: req.user.id,
  });

  res.status(201).json(course); // 201 means something was created
};

// @desc    Update course
// @route   PUT /api/courses/:id
// @access  Private
const updateCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    res.status(404);
    throw new Error('Course not found');
  }

  // Check if the logged-in user owns the course
  if (course.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedCourse);
};

// @desc    Delete course
// @route   DELETE /api/courses/:id
// @access  Private
const deleteCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    res.status(404);
    throw new Error('Course not found');
  }

  // Check if the logged-in user owns the course
  if (course.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }
  
  await course.deleteOne();

  res.status(200).json({ id: req.params.id, message: 'Course removed' });
};

// @desc    Get a single course by ID
// @route   GET /api/courses/:id
// @access  Private
const getCourseById = async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    res.status(404);
    throw new Error('Course not found');
  }

  // Security check: Make sure the logged-in user is authorized to see this course
  if (course.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  res.status(200).json(course);
};


module.exports = {
  getCourses,
  setCourse,
  updateCourse,
  deleteCourse,
  getCourseById,  
};