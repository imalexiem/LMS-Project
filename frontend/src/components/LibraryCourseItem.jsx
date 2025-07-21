import React from 'react';

function LibraryCourseItem({ course }) {
  // Parse the 'code' field (e.g., "CODE 010 | Fundamentals of Cybersecurity")
  // into its two parts. We add fallbacks to prevent errors.
  const parts = course.code.split(' | ');
  const courseCode = parts[0] || 'CODE';
  const courseTitle = parts[1] || course.code; // Default to full string if split fails

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm w-full">
      <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
        {courseCode}
      </p>
      <h2 className="text-3xl font-bold text-slate-800 mt-1">
        {courseTitle}
      </h2>
      <div className="flex items-center space-x-3 mt-4">
        <button className="text-sm font-medium text-slate-600 bg-white border border-slate-400 rounded-full px-4 py-1 hover:bg-slate-100">
          Program Introduction
        </button>
        <button className="text-sm font-medium text-yellow-800 bg-white border border-yellow-400 rounded-full px-4 py-1 hover:bg-yellow-50">
          Programme Outline
        </button>
        <button className="text-sm font-medium text-red-800 bg-white border border-red-400 rounded-full px-4 py-1 hover:bg-red-50">
          + Completion Requirements
        </button>
      </div>
    </div>
  );
}

export default LibraryCourseItem;