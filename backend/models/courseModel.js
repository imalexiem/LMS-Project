const mongoose = require('mongoose');

// Define a schema for a single lesson
const lessonSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  // We use a "slug" for the link to keep it clean (e.g., 'what-is-cybersecurity')
  // We'll construct the full URL on the frontend.
  linkSlug: {
    type: String,
    required: true,
  },
});

// Define a schema for a single module, which contains lessons
const moduleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  // A module can contain an array of lessons
  lessons: [lessonSchema],
});

const courseSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    code: {
      type: String,
      required: [true, 'Please add a course code'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    progress: {
      type: Number,
      required: true,
      default: 0,
    },
    // --- THIS IS THE KEY ADDITION ---
    // A course can now contain an array of modules
    modules: [moduleSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Course', courseSchema);