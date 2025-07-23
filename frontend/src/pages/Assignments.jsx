import React, { useState } from 'react';
import { ChevronRight, Calendar, User, BookOpen, CheckCircle, Clock, AlertCircle, ChevronDown, ChevronUp, Play } from 'lucide-react';
import logo from '../assets/logo.png';
import { useCourses } from '../hooks/useCourses';

function Assignments() {
  const { courses, loading, error } = useCourses();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showChapterDetails, setShowChapterDetails] = useState(false);

  // Helper functions (no changes needed)
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  const getStatusColor = (status) => {
    switch (status) {
      case 'COMPLETED': return 'bg-green-100 text-green-800';
      case 'IN_PROGRESS': return 'bg-blue-100 text-blue-800';
      case 'PENDING': return 'bg-yellow-100 text-yellow-800';
      case 'OVERDUE': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  const getStatusIcon = (status) => {
    switch (status) {
      case 'COMPLETED': return <CheckCircle className="h-4 w-4" />;
      case 'IN_PROGRESS': return <Clock className="h-4 w-4" />;
      // ... other cases
      default: return <Clock className="h-4 w-4" />;
    }
  };

  // --- DETAIL VIEW ---
  if (selectedCourse) {
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

          <div className="space-y-4">
            {/* 1. We map directly over the modules from the fetched course */}
            {selectedCourse.modules.map((module) => (
              <div key={module._id} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">{module.title}</h2>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      {/* 2. The FIX: Use module.progress instead of chapter.progress */}
                      <div
                        className="bg-[#FBBC04] h-2 rounded-full"
                        style={{ width: `${module.progress || 0}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-12">
                      {module.progress || 0}%
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">{selectedCourse.description}</p>
                <div className="mb-4">
                   <button onClick={() => setShowChapterDetails(!showChapterDetails)} className="px-4 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 font-medium transition-colors flex items-center space-x-2">
                    <span>{showChapterDetails ? 'Hide Assignments' : 'View Assignments'}</span>
                    {showChapterDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                </div>
                {showChapterDetails && module.lessons && (
                  <div className="border-t pt-4">
                    {module.lessons.map((lesson, index) => (
                      <div key={lesson._id} className="flex items-center justify-between p-3 rounded-lg">
                        <div className="flex items-center space-x-3">
                           <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">{index + 1}</span>
                          </div>
                          <span className="text-gray-900 font-medium">{lesson.title}</span>
                        </div>
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
          <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
            <div className="col-span-4">TITLE</div>
            <div className="col-span-2">ASSIGNER</div>
            <div className="col-span-2">DUE BY</div>
            <div className="col-span-2">STATUS</div>
            <div className="col-span-2"></div>
          </div>
          <div className="divide-y divide-gray-200">
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
                  <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(course.status)}`}>
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