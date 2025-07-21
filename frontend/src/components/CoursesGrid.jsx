import React, { useState } from 'react';
import { useCourses } from '../hooks/useCourses'; // <-- Step 1: Import the new hook

// Import your view components (no change here)
import CourseCard from './CourseCard';
import CourseListItem from './CourseListItem';
import { Grid, List } from 'lucide-react';

function CoursesGrid() {
  // --- Step 2: Replace all fetching logic with the hook ---
  // This one line replaces useState for courses/loading and the entire useEffect block.
  const { courses, loading, error } = useCourses();
  
  // This state is specific to the UI of this component, so it stays here.
  const [view, setView] = useState('grid');

  // --- Step 3: Add robust loading and error states ---
  if (loading) {
    return <div className="text-center p-8">Loading courses...</div>;
  }
  
  if (error) {
    return <div className="p-8 text-center text-red-500">Could not load courses.</div>;
  }

  // --- Step 4: The JSX for rendering remains the same ---
  // It now gets its data from the `courses` variable provided by the hook.
  return (
    <main className="p-4 sm:p-6 lg:p-8">
      {/* View Toggle Buttons */}
      <div className="flex justify-end items-center mb-6 space-x-2">
        <Grid 
          className={`h-6 w-6 cursor-pointer ${view === 'grid' ? 'text-gray-800' : 'text-gray-400'}`}
          onClick={() => setView('grid')}
        />
        <List 
          className={`h-6 w-6 cursor-pointer ${view === 'list' ? 'text-gray-800' : 'text-gray-400'}`}
          onClick={() => setView('list')}
        />
      </div>
      
      {/* Conditional Rendering */}
      <div>
        {view === 'grid' ? (
          // GRID VIEW
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course._id}
                code={course.code}
                description={course.description}
                progress={course.progress}
              />
            ))}
          </div>
        ) : (
          // LIST VIEW
          <div className="space-y-4">
            {courses.map((course) => (
              <CourseListItem
                key={course._id}
                title={course.code}
                progress={course.progress}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default CoursesGrid;