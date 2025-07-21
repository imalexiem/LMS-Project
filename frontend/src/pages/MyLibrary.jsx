import React from 'react';
import { useCourses } from '../hooks/useCourses'; // Import the hook
import LibraryCourseItem from '../components/LibraryCourseItem'; // Import the new component

function MyLibrary() {
  // Use the hook to get all the data and state you need in one line
  const { courses, loading, error } = useCourses();

  if (loading) {
    return <div className="p-8 text-center">Loading your library...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">Could not load courses.</div>;
  }

  return (
    <div className="p-8">
      <div className="space-y-4">
        {courses.length > 0 ? (
          courses.map(course => (
            <LibraryCourseItem key={course._id} course={course} />
          ))
        ) : (
          <p>You are not enrolled in any courses yet.</p>
        )}
      </div>
    </div>
  );
}

export default MyLibrary;