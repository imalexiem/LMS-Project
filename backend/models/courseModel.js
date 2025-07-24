const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema({
  title: { type: String, required: true },
  linkSlug: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const moduleSchema = mongoose.Schema({
  title: { type: String, required: true },
  lessons: [lessonSchema],
  progress: { 
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
});

const introductionSchema = mongoose.Schema({
  welcomeTitle: { type: String, required: true },
  welcomeText: { type: String, required: true },
  overviewTitle: { type: String, required: true },
  overviewText: { type: String, required: true },
  overviewImageSrc: { type: String, required: true },
});

const outlineItemSchema = mongoose.Schema({
  date: { type: String, required: true },
  week: { type: String, required: true },
  module: { type: String, required: true },
  outcomes: [{ type: String }], // An array of strings
  activities: [{ type: String }], // An array of strings
});

// --- 1. Define a schema for a single item in the requirements schedule ---
const requirementItemSchema = mongoose.Schema({
  week: { type: String, required: true },
  activity: { type: String, required: true },
  type: { type: String, enum: ['Required', 'Self-Study'], required: true },
  weighting: { type: String, required: true },
  dueDate: { type: String, required: true },
});

// --- 2. Define a schema for the overall completion requirements section ---
const completionRequirementsSchema = mongoose.Schema({
  activityDescription1: { type: String, required: true },
  activityDescription2: { type: String, required: true },
  activityDescription3: { type: String, required: true },
  schedule: [requirementItemSchema],
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
    
    introduction: introductionSchema,
    programOutline: [outlineItemSchema],
    completionRequirements: completionRequirementsSchema,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', courseSchema);