import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { useCourses } from '../hooks/useCourses';
import { useCourseContext } from '../context/CourseContext'; // Import the context hook
import LibraryCourseItem from '../components/LibraryCourseItem';

function MyLibrary() {
  const { courses, loading, error } = useCourses();
  const { setSelectedCourseId } = useCourseContext(); // Get the function to update context
  const navigate = useNavigate();

  const handleCourseClick = (courseId) => {
    // 1. Set the selected course ID in the global context
    setSelectedCourseId(courseId);
    // 2. Navigate the user to the default page for that course
    navigate(`/courses/${courseId}/modules`);
  };

  if (loading) return <div className="p-8 text-center">Loading your library...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Could not load courses.</div>;

  return (
    <div className="p-8">
      <div className="space-y-4">
        {courses.length > 0 ? (
          courses.map(course => (
            // Use a button for the click action, as Link can be tricky with complex children
            <button
              key={course._id}
              onClick={() => handleCourseClick(course._id)}
              className="w-full text-left block transition transform hover:-translate-y-1 focus:outline-none"
            >
              <LibraryCourseItem course={course} />
            </button>
          ))
        ) : (
          <p>You are not enrolled in any courses yet.</p>
        )}
      </div>
    </div>
  );
}

export default MyLibrary;