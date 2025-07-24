import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { CheckCircle, Calendar, BookOpen } from 'lucide-react';

// The TableRow component is perfect as is. No changes needed here.
const TableRow = ({ week, activity, type, weighting, dueDate }) => (
  <tr className="even:bg-gray-50 hover:bg-gray-100 transition-colors">
    <td className="p-4 text-center border-t border-gray-200">{week}</td>
    <td className="p-4 text-left border-t border-gray-200">{activity}</td>
    <td className="p-4 text-center border-t border-gray-200">
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
        type === 'Required' 
          ? 'bg-red-100 text-red-800' 
          : 'bg-blue-100 text-blue-800'
      }`}>
        {type}
      </span>
    </td>
    <td className="p-4 text-center border-t border-gray-200 font-medium">{weighting}</td>
    <td className="p-4 text-center border-t border-gray-200">{dueDate}</td>
  </tr>
);

function CompletionRequirements() {
  // --- 1. SET UP DYNAMIC DATA FETCHING ---
  const { courseId } = useParams();
  const { token } = useAuth();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (courseId && token) {
      const fetchCourseData = async () => {
        setLoading(true);
        const config = { headers: { Authorization: `Bearer ${token}` } };
        try {
          const response = await axios.get(`/api/courses/${courseId}`, config);
          console.log("Fetched Course Data:", response.data); // <-- DEBUGGING: Check what the API returns
          setCourse(response.data);
        } catch (err) {
          setError("Could not load completion requirements.");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchCourseData();
    }
  }, [courseId, token]);

  // --- 2. HANDLE LOADING, ERROR, AND MISSING DATA STATES ---
  if (loading) {
    return <div className="p-8 text-center text-lg font-semibold">Loading Requirements...</div>;
  }
  if (error) {
    return <div className="p-8 text-center text-lg text-red-500">{error}</div>;
  }
  // This is a crucial check. It prevents the component from rendering before the data is ready
  // or if the data from the DB is missing the 'completionRequirements' field.
  if (!course || !course.completionRequirements) {
    return <div className="p-8 text-center text-lg">Completion requirements are not available for this course.</div>;
  }

  // --- 3. RENDER YOUR ORIGINAL JSX WITH DYNAMIC DATA ---
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section (Unchanged) */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white/20 p-3 rounded-lg mr-4">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold">Completion Requirements</h1>
          </div>
          <p className="text-blue-100 text-lg mt-4 max-w-2xl mx-auto">
            Upon successfully completing this programme, you will be awarded a verified Digital Certificate of Completion.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Activities Section */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Activities</h2>
            </div>
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              {/* These paragraphs are now dynamic */}
              <p className="mb-4">{course.completionRequirements.activityDescription1}</p>
              <p className="mb-4">{course.completionRequirements.activityDescription2}</p>
              <p>{course.completionRequirements.activityDescription3}</p>
            </div>
          </div>
        </section>

        {/* Passing Criteria Section (Unchanged) */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Passing Criteria</h2>
            </div>
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                To successfully complete this course and receive your Digital Certificate of Completion, you must achieve a minimum overall score of 70% across all assessed activities.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Required Activities</h3>
                  <p className="text-blue-800">Must be completed with a passing grade of 70% or higher. These activities are mandatory for course completion.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Self-Study Activities</h3>
                  <p className="text-green-800">Optional activities that contribute to your overall grade and provide additional learning opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Schedule Table */}
        <section>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center">
                <div className="bg-gray-200 p-2 rounded-lg mr-3">
                  <Calendar className="h-5 w-5 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Course Schedule & Assessment Overview</h3>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="px-4 py-4 text-center font-semibold">Week</th>
                    <th className="px-4 py-4 text-left font-semibold">Activities</th>
                    <th className="px-4 py-4 text-center font-semibold">Type</th>
                    <th className="px-4 py-4 text-center font-semibold">Weighting</th>
                    <th className="px-4 py-4 text-center font-semibold">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {/* The static `tableData` is replaced with the dynamic schedule from the fetched course */}
                  {course.completionRequirements.schedule.map((row, index) => (
                    <TableRow key={index} {...row} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Additional Information (Unchanged) */}
        <section className="mt-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-lg mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Notes</h3>
                <ul className="text-blue-800 space-y-2">
                  <li>• All assignments must be submitted by 11:59 PM on the specified due date</li>
                  <li>• Late submissions will be penalized 10% per day unless prior arrangements are made</li>
                  <li>• Technical issues should be reported immediately to course support</li>
                  <li>• Certificate will be issued within 5 business days of course completion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CompletionRequirements;