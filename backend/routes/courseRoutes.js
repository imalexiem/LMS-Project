const express = require('express');
const router = express.Router();

const { getCourses, 
        setCourse, 
        updateCourse, 
        deleteCourse,
        getCourseById, 
} = require('../controllers/courseController');

const { protect } = require('../middleware/authMiddleware');

// This route handles getting all courses and creating a new one
router.route('/').get(protect, getCourses).post(protect, setCourse);

// This route now handles GET (by ID), DELETE, and PUT for a single course
router
  .route('/:id')
  .get(protect, getCourseById)
  .delete(protect, deleteCourse)
  .put(protect, updateCourse);

module.exports = router;