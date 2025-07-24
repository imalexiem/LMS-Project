import React from 'react';
import { useCourses } from '../hooks/useCourses';
import LibraryCourseItem from '../components/LibraryCourseItem';

function MyLibrary() {
  const { courses, loading, error } = useCourses();

  if (loading) return <div className="p-8 text-center">Loading your library...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Could not load courses.</div>;

  return (
    <div className="p-8">
      <div className="space-y-4">
        {courses.length > 0 ? (
          // The .map is now much simpler. It just renders the component.
          // There is no more onClick wrapper.
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