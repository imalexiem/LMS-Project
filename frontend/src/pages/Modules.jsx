import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Modules = () => {
  const { courseId } = useParams(); // 🔑 Get the current course ID from URL
  const [activeModules, setActiveModules] = useState([]);

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
    // Expand all modules by default on mount
    setActiveModules(modules.map((_, i) => i));
  }, []);

  const isExpanded = (index) => activeModules.includes(index);

  const toggleModule = (index) => {
    setActiveModules((prev) =>
      isExpanded(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const toggleAllModules = () => {
    if (activeModules.length === modules.length) {
      setActiveModules([]);
    } else {
      setActiveModules(modules.map((_, i) => i));
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h3 className="text-xl font-medium text-[#051C43]">CODE 010</h3>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-[#051C43]">
          Fundamentals of Cybersecurity
        </h1>
        <button
          onClick={toggleAllModules}
          className="px-4 py-2 text-white rounded shadow hover:brightness-110 transition"
          style={{ backgroundColor: "#FBBC04" }}
        >
          {activeModules.length === modules.length
            ? "Collapse All"
            : "Expand All"}
        </button>
      </div>

      {modules.map((module, index) => (
        <div
          key={index}
          className="mb-4 border rounded-lg overflow-hidden shadow-sm"
        >
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
                <div
                  key={idx}
                  className="px-4 py-3 hover:bg-gray-100 transition"
                >
                  <Link
                    to={lesson.link}
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
