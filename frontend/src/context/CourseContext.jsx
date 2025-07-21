import React, { createContext, useState, useContext } from 'react';

// 1. Create the context itself
const CourseContext = createContext();

// 2. Create the provider component that will wrap our layout
export function CourseProvider({ children }) {
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const value = {
    selectedCourseId,
    setSelectedCourseId,
  };

  return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
}

// 3. Create a custom hook for easy access
export function useCourseContext() {
  return useContext(CourseContext);
}