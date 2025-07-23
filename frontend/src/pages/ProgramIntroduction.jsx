import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import welcomeVideo from "../assets/WelcometoALPS.mp4"; // Generic video can stay

const ProgramIntroduction = () => {
  // --- 1. SET UP STATE AND HOOKS ---
  const { courseId } = useParams();
  const { token } = useAuth();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- 2. FETCH COURSE DATA ON LOAD ---
  useEffect(() => {
    if (token && courseId) {
      const fetchCourseDetails = async () => {
        setLoading(true);
        const config = { headers: { Authorization: `Bearer ${token}` } };
        try {
          const response = await axios.get(`/api/courses/${courseId}`, config);
          setCourse(response.data);
        } catch (err) {
          setError("Failed to load course introduction.");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchCourseDetails();
    }
  }, [courseId, token]);

  // --- 3. HANDLE LOADING AND ERROR STATES ---
  if (loading) {
    return <div className="p-8 text-center">Loading Introduction...</div>;
  }
  if (error) {
    return <div className="p-8 text-center text-red-500">{error}</div>;
  }
  // Also handle if the course or its intro data doesn't exist
  if (!course || !course.introduction) {
    return <div className="p-8 text-center">Introduction content not found for this course.</div>;
  }
  
  // --- 4. RENDER JSX WITH DYNAMIC DATA ---
  // The 'pageData' object is gone, replaced by the 'course' state object.
  return (
    <div className="space-y-24 w-full font-sans mb-15">
      {/* Welcome Section */}
      <section className="relative min-h-[400px] rounded-2xl overflow-hidden flex items-center p-12 mb-40">
        <video
          src={welcomeVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
        ></video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-0"></div>

        <div className="relative z-10 max-w-3xl text-white drop-shadow-lg">
          <h1 className="text-6xl font-bold mb-4">{course.introduction.welcomeTitle}</h1>
          <p className="leading-relaxed">{course.introduction.welcomeText}</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="flex items-center gap-16 ">
        <div className="flex-1">
          <h2 className="text-6xl font-bold text-gray-800 mb-4">
            {course.introduction.overviewTitle}
          </h2>
          <p className="text-gray-600 leading-relaxed ">
            {course.introduction.overviewText}
          </p>
        </div>
        <div className="flex-1 h-96 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 ">
          <img
            src={course.introduction.overviewImageSrc}
            alt={`${course.introduction.welcomeTitle} overview`}
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default ProgramIntroduction;