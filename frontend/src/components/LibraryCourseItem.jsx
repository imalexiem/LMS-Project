import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useCourseContext } from '../context/CourseContext';

function LibraryCourseItem({ course }) {
  const navigate = useNavigate();
  const { setSelectedCourseId } = useCourseContext();

  // --- 3. Create a generic handler for all clicks ---
  // It takes the destination page ('modules', 'introduction', etc.) as an argument
  const handleNavigation = (destination) => {
    setSelectedCourseId(course._id);
    navigate(`/courses/${course._id}/${destination}`);
  };

  const parts = course.code.split(' | ');
  const courseCode = parts[0] || 'CODE';
  const courseTitle = parts[1] || course.code;

  return (
    // You can make the main title clickable to go to the default page (modules)
    <div className="bg-white p-6 rounded-lg shadow-sm w-full">
      <button 
        onClick={() => handleNavigation('modules')} 
        className="text-left w-full focus:outline-none"
        title={`View modules for ${courseTitle}`}
      >
        <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
          {courseCode}
        </p>
        <h2 className="text-3xl font-bold text-slate-800 mt-1">
          {courseTitle}
        </h2>
      </button>

      {/* --- 4. Add specific onClick handlers to each button --- */}
      <div className="flex items-center space-x-3 mt-4">
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevents the parent button's onClick from firing
            handleNavigation('introduction');
          }}
          className="text-sm font-medium text-slate-600 bg-white border border-slate-400 rounded-full px-4 py-1 hover:bg-slate-100"
        >
          Program Introduction
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNavigation('outline');
          }}
          className="text-sm font-medium text-yellow-800 bg-white border border-yellow-400 rounded-full px-4 py-1 hover:bg-yellow-50"
        >
          Programme Outline
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNavigation('requirements');
          }}
          className="text-sm font-medium text-red-800 bg-white border border-red-400 rounded-full px-4 py-1 hover:bg-red-50"
        >
          + Completion Requirements
        </button>
      </div>
    </div>
  );
}

export default LibraryCourseItem;