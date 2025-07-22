import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; 


const Modules = () => {
  const { courseId } = useParams(); // 🔑 Get the current course ID from URL
  const { token } = useAuth(); // Get the token from the context
  
   // Add state for fetching the specific course details
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [activeModules, setActiveModules] = useState([]);

  // Add a useEffect to fetch the course data when the component loads
  useEffect(() => {
    // Only fetch if we have the necessary information
    if (token && courseId) {
      const fetchCourseDetails = async () => {
        setLoading(true);
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        try {
          // Use the dynamic courseId to fetch the specific course
          const response = await axios.get(`/api/courses/${courseId}`, config);
          setCourse(response.data);
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
  }, [courseId, token]); // Re-run this effect if the courseId or token changes

  const modules = [
    {
      title: "Module 1: Introduction to Cybersecurity",
      lessons: [
        {
          title: "Lesson 1: What is Cybersecurity?",
          link: `/courses/${courseId}/modules/fundamentals/lesson1`,
        },
        {
          title: "Lesson 2: Why It Matters",
          link: `/courses/${courseId}/modules/fundamentals/lesson2`,
        },
      ],
    },
    {
      title: "Module 2: Understanding IP Address, DNS, and Ports",
      lessons: [
        {
          title: "Lesson 1: What is an IP Address?",
          link: `/courses/${courseId}/modules/ipdnsports/lesson1`,
        },
        {
          title: "Lesson 2: DNS Basics",
          link: `/courses/${courseId}/modules/ipdnsports/lesson2`,
        },
        {
          title: "Lesson 3: What Are Network Ports?",
          link: `/courses/${courseId}/modules/ipdnsports/lesson3`,
        },
      ],
    },
    {
      title: "Module 3: Network Security Basics",
      lessons: [
        {
          title: "Lesson 1: Firewalls and Antivirus",
          link: `/courses/${courseId}/modules/networksecurity/lesson1`,
        },
        {
          title: "Lesson 2: VPN and Secure Connections",
          link: `/courses/${courseId}/modules/networksecurity/lesson2`,
        },
      ],
    },
    {
      title: "Module 4: Cybersecurity Best Practices",
      lessons: [
        {
          title: "Lesson 1: Staying Safe Online",
          link: `/courses/${courseId}/modules/bestpractices/lesson1`,
        },
      ],
    },
  ];

  useEffect(() => {
    setActiveModules(modules.map((_, i) => i));
  }, [modules.length]); // Use modules.length to avoid re-running on every render

  const isExpanded = (index) => activeModules.includes(index);
  const toggleModule = (index) => { /* ... no change needed ... */ };
  const toggleAllModules = () => { /* ... no change needed ... */ };

  // --- 6. Handle loading and error states before rendering ---
  if (loading) {
    return <div className="p-8 text-center">Loading course content...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">{error}</div>;
  }

  // --- 7. Update the JSX to use the fetched data ---
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* These titles are now dynamic */}
      <h3 className="text-xl font-medium text-[#051C43]">
        {course ? course.code.split(' | ')[0] : 'Loading Code...'}
      </h3>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-[#051C43]">
          {course ? course.code.split(' | ')[1] : 'Loading Title...'}
        </h1>
        <button
          onClick={toggleAllModules}
          className="px-4 py-2 text-white rounded shadow hover:brightness-110 transition"
          style={{ backgroundColor: "#FBBC04" }}
        >
          {activeModules.length === modules.length ? "Collapse All" : "Expand All"}
        </button>
      </div>

      {/* The rest of your JSX remains the same */}
      {modules.map((module, index) => (
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
                  <Link to={lesson.link} className="font-medium text-[#051C43]">
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