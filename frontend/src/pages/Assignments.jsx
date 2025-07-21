import React, { useState } from 'react';
import { ChevronRight, Calendar, User, BookOpen, CheckCircle, Clock, AlertCircle, ChevronDown, ChevronUp, Play } from 'lucide-react';
import logo from '../assets/logo.png';

function Assignments() {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [showChapterDetails, setShowChapterDetails] = useState(false);

  // Mock assignments data
  const assignments = [
    {
      id: 1,
      title: "Presentation Skills",
      type: "Course",
      assigner: "ALPs",
      assignerAvatar: logo,
      dueDate: "Fri, July 27, 2025",
      status: "COMPLETED",
      progress: 100,
      description: "Effective presentation skills are essential for success in both personal and professional settings. This course is designed to equip participants with the techniques and confidence needed to deliver compelling presentations that captivate and persuade audiences. ",
      chapters: [
        { 
          id: 1, 
          title: "Presentation Skills", 
          progress: 100, 
          completed: true,
          lessons: [
            { id: 1, title: "Introduction to Effective Presentation Skills", completed: false}
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Advanced Communication",
      type: "Course", 
      assigner: "ALPs",
      assignerAvatar: logo,
      dueDate: "Fri, July 27, 2025",
      status: "COMPLETED",
      progress: 100,
      description: "The main objective of this Communication Skills training is to enhance your ability to communicate in the workplace. It teaches you how to engage and persuade during various situations.",
      chapters: [
        { 
          id: 1, 
          title: "Advanced Communication", 
          progress: 100, 
          completed: true,
          lessons: [
            { id: 1, title: "Communication is key to success", completed: false }
          ]
        }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'COMPLETED':
        return 'bg-green-100 text-green-800';
      case 'IN_PROGRESS':
        return 'bg-blue-100 text-blue-800';
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'OVERDUE':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'COMPLETED':
        return <CheckCircle className="h-4 w-4" />;
      case 'IN_PROGRESS':
        return <Clock className="h-4 w-4" />;
      case 'PENDING':
        return <AlertCircle className="h-4 w-4" />;
      case 'OVERDUE':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  if (selectedAssignment) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <button
            onClick={() => {
              setSelectedAssignment(null);
              setShowChapterDetails(false);
            }}
            className="flex items-center text-blue-600 hover:text-blue-950 mb-6 text-sm font-medium"
          >
            ← Back to Assignments
          </button>

          {/* Course Chapters */}
          <div className="space-y-4">
            {selectedAssignment.chapters.map((chapter) => (
              <div key={chapter.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                {/* Chapter Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <h2 className="text-xl font-bold text-gray-900">{chapter.title}</h2>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#FBBC04] h-2 rounded-full"
                        style={{ width: `${chapter.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-12">{chapter.progress}%</span>
                  </div>
                </div>

                {/* Chapter Description */}
                <p className="text-gray-700 mb-6">{selectedAssignment.description}</p>

                {/* View Assignments Button */}
                <div className="mb-4">
                  <button
                    onClick={() => setShowChapterDetails(!showChapterDetails)}
                    className="px-4 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 font-medium transition-colors flex items-center space-x-2"
                  >
                    <span>{showChapterDetails ? 'Hide Assignments' : 'View Assignments'}</span>
                    {showChapterDetails ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Assignment Details */}
                {showChapterDetails && chapter.lessons && (
                  <div className="border-t pt-4">
                    {chapter.lessons.map((lesson, index) => (
                      <div key={lesson.id} className="flex items-center justify-between p-3 rounded-lg">
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

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Assignments</h1>
          <p className="text-gray-600 mt-2">Track your course progress and upcoming deadlines</p>
        </div>

        {/* Assignments Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
            <div className="col-span-4">TITLE</div>
            <div className="col-span-2">ASSIGNER</div>
            <div className="col-span-2">DUE BY</div>
            <div className="col-span-2">STATUS</div>
            <div className="col-span-2"></div>
          </div>

          {/* Assignment Rows */}
          <div className="divide-y divide-gray-200">
            {assignments.map((assignment) => (
              <div
                key={assignment.id}
                className="grid grid-cols-12 gap-4 p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => setSelectedAssignment(assignment)}
              >
                {/* Title */}
                <div className="col-span-4 flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{assignment.title}</h3>
                    <p className="text-sm text-gray-500">{assignment.type}</p>
                  </div>
                </div>

                {/* Assigner */}
                <div className="col-span-2 flex items-center space-x-2">
                  <img 
                    src={assignment.assignerAvatar} 
                    alt={assignment.assigner}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm text-gray-700">{assignment.assigner}</span>
                </div>

                {/* Due Date */}
                <div className="col-span-2 flex items-center">
                  <span className="text-sm text-gray-700">{assignment.dueDate}</span>
                </div>

                {/* Status */}
                <div className="col-span-2 flex items-center">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(assignment.status)}`}>
                    {getStatusIcon(assignment.status)}
                    <span>{assignment.status.replace('_', ' ')}</span>
                  </div>
                </div>

                {/* Arrow */}
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