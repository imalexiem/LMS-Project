import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Modules = () => {
  const { courseId } = useParams();
  const { token } = useAuth();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeModules, setActiveModules] = useState([]);

  useEffect(() => {
    if (token && courseId) {
      const fetchCourseDetails = async () => {
        setLoading(true);
        const config = { headers: { Authorization: `Bearer ${token}` } };
        try {
          const response = await axios.get(`/api/courses/${courseId}`, config);
          setCourse(response.data);
          // --- By default, expand all modules that we fetched ---
          setActiveModules(response.data.modules.map((_, i) => i));
          setError(null);
        } catch (err) {
          setError('Failed to load course details. Please try again.');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchCourseDetails();
    }
  }, [courseId, token]);

  const isExpanded = (index) => activeModules.includes(index);

  const toggleModule = (index) => {
    setActiveModules((prev) =>
      isExpanded(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleAllModules = () => {
    if (activeModules.length === course.modules.length) {
      setActiveModules([]);
    } else {
      setActiveModules(course.modules.map((_, i) => i));
    }
  };

  if (loading) return <div className="p-8 text-center">Loading course content...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;
  if (!course) return <div className="p-8 text-center">Course data not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h3 className="text-xl font-medium text-[#051C43]">
        {course.code.split(' | ')[0]}
      </h3>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-[#051C43]">
          {course.code.split(' | ')[1]}
        </h1>
        <button
          onClick={toggleAllModules}
          className="px-4 py-2 text-white rounded shadow hover:brightness-110 transition"
          style={{ backgroundColor: "#FBBC04" }}
        >
          {activeModules.length === course.modules.length ? "Collapse All" : "Expand All"}
        </button>
      </div>

      {/* --- RENDER MODULES FROM THE FETCHED COURSE DATA --- */}
      {course.modules.map((module, index) => (
        <div key={index} className="mb-4 border rounded-lg overflow-hidden shadow-sm">
          <div
            className="px-4 py-3 cursor-pointer flex justify-between items-center"
            style={{ backgroundColor: "#680911", color: "white" }}
            onClick={() => toggleModule(index)}
          >
            <span className="font-semibold">{module.title}</span>
            <span>{isExpanded(index) ? "▾" : "▸"}</span>
          </div>
          {isExpanded(index) && (
            <div className="bg-white divide-y divide-gray-200">
              {module.lessons.map((lesson, idx) => (
                <div key={idx} className="px-4 py-3 hover:bg-gray-100 transition">
                  <Link
                    // Construct the full link using the courseId and the lesson's linkSlug
                    to={`/courses/${courseId}/modules/${lesson.linkSlug}`}
                    className="font-medium text-[#051C43]"
                  >
                    {lesson.title}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Modules;