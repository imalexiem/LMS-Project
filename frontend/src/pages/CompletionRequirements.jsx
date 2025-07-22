import React from 'react';
import { CheckCircle, Calendar, BookOpen } from 'lucide-react';

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
  const tableData = [
    {
      week: "Week 1",
      activity: "Introduction to Presentation Fundamentals",
      type: "Required",
      weighting: "20%",
      dueDate: "Aug 1, 2025"
    },
    {
      week: "Week 2", 
      activity: "Audience Analysis and Content Development",
      type: "Self-Study",
      weighting: "15%",
      dueDate: "Aug 8, 2025"
    },
    {
      week: "Week 3",
      activity: "Visual Design and Slide Creation",
      type: "Required",
      weighting: "25%",
      dueDate: "Aug 15, 2025"
    },
    {
      week: "Week 4",
      activity: "Delivery Techniques and Body Language",
      type: "Required",
      weighting: "20%",
      dueDate: "Aug 22, 2025"
    },
    {
      week: "Week 5",
      activity: "Final Presentation Assessment",
      type: "Required",
      weighting: "20%",
      dueDate: "Aug 29, 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
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
              <p className="mb-4">
                This course is designed to provide comprehensive training in presentation skills through a series of structured activities and assessments. Each week focuses on different aspects of effective presentation delivery, from fundamental concepts to advanced techniques.
              </p>
              <p className="mb-4">
                Students will engage in both theoretical learning and practical application, including video submissions, peer reviews, and live presentation sessions. The curriculum emphasizes hands-on practice to build confidence and competence in public speaking scenarios.
              </p>
              <p>
                All activities are designed to progressively build your skills, starting with basic presentation concepts and advancing to sophisticated delivery techniques and audience engagement strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Passing Criteria Section */}
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
                  {tableData.map((row, index) => (
                    <TableRow key={index} {...row} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Additional Information */}
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