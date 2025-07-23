const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema({
  title: { type: String, required: true },
  linkSlug: { type: String, required: true },
  completed: { type: Boolean, default: false }, // <-- Add completed status to lessons
});

const moduleSchema = mongoose.Schema({
  title: { type: String, required: true },
  lessons: [lessonSchema],
});

const courseSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    code: { type: String, required: true },
    description: { type: String, required: true },
    progress: { type: Number, required: true, default: 0 },
    modules: [moduleSchema],

    dueDate: {
      type: Date,
      required: false, // Make it optional
    },
    status: {
      type: String,
      enum: ['COMPLETED', 'IN_PROGRESS', 'PENDING', 'OVERDUE'], // Restrict to specific values
      default: 'PENDING',
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', courseSchema);