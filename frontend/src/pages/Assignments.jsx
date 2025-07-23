import React, { useState } from 'react';
import { ChevronRight, Calendar, User, BookOpen, CheckCircle, Clock, AlertCircle, ChevronDown, ChevronUp, Play } from 'lucide-react';
import logo from '../assets/logo.png';
import { useCourses } from '../hooks/useCourses';

function Assignments() {
  // 2. Replace the mock data with our live data hook
  const { courses, loading, error } = useCourses();
  
  // This state now holds a selected *course* object, not an assignment
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showChapterDetails, setShowChapterDetails] = useState(false);

  // Helper to format the date nicely
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Your helper functions are perfect, no changes needed
  const getStatusColor = (status) => { /* ... */ };
  const getStatusIcon = (status) => { /* ... */ };

  // --- DETAIL VIEW ---
  // This now renders based on the selectedCourse state
  if (selectedCourse) {
    // We treat the course's modules as "chapters" for this view
    const chapters = selectedCourse.modules.map(module => ({
      ...module,
      id: module._id, // Use MongoDB's ID
      progress: selectedCourse.progress, // Use the overall course progress for now
    }));

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => {
              setSelectedCourse(null);
              setShowChapterDetails(false);
            }}
            className="flex items-center text-blue-600 hover:text-blue-950 mb-6 text-sm font-medium"
          >
            ← Back to Assignments
          </button>

          {/* Map over the formatted chapters */}
          <div className="space-y-4">
            {chapters.map((chapter) => (
              <div key={chapter.id} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">{chapter.title}</h2>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-[#FBBC04] h-2 rounded-full" style={{ width: `${chapter.progress}%` }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-12">{chapter.progress}%</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">{selectedCourse.description}</p>
                <div className="mb-4">
                  <button onClick={() => setShowChapterDetails(!showChapterDetails)} className="...">
                    {/* ... button content ... */}
                  </button>
                </div>
                {showChapterDetails && chapter.lessons && (
                  <div className="border-t pt-4">
                    {chapter.lessons.map((lesson, index) => (
                      <div key={lesson._id} className="flex items-center p-3">
                         {/* ... lesson content ... */}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN LIST VIEW ---
  // Handle loading and error states
  if (loading) return <div className="p-8 text-center">Loading assignments...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Could not load assignments.</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Assignments</h1>
          <p className="text-gray-600 mt-2">Track your course progress and upcoming deadlines</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="grid grid-cols-12 ...">
            {/* Table Header */}
          </div>
          <div className="divide-y divide-gray-200">
            {/* 3. Map over the fetched 'courses' array */}
            {courses.map((course) => (
              <div
                key={course._id}
                className="grid grid-cols-12 gap-4 p-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedCourse(course)}
              >
                <div className="col-span-4 flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg"><BookOpen className="h-5 w-5 text-blue-600" /></div>
                  <div>
                    <h3 className="font-medium text-gray-900">{course.code.split(' | ')[1]}</h3>
                    <p className="text-sm text-gray-500">Course</p>
                  </div>
                </div>
                <div className="col-span-2 flex items-center space-x-2">
                  <img src={logo} alt="ALPs" className="w-8 h-8 rounded-full" />
                  <span className="text-sm text-gray-700">ALPs</span>
                </div>
                <div className="col-span-2 flex items-center">
                  <span className="text-sm text-gray-700">{formatDate(course.dueDate)}</span>
                </div>
                <div className="col-span-2 flex items-center">
                  <div className={`px-3 py-1 rounded-full text-xs ... ${getStatusColor(course.status)}`}>
                    {getStatusIcon(course.status)}
                    <span>{course.status.replace('_', ' ')}</span>
                  </div>
                </div>
                <div className="col-span-2 flex items-center justify-end">
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assignments;