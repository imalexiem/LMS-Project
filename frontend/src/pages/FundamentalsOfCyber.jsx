import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // <-- 1. Import useParams
import './module.css';

const FundamentalsOfCyber = () => {
  // --- 2. Get the courseId from the URL ---
  const { courseId } = useParams();

  const [activeModules, setActiveModules] = useState([]);

  // --- 3. Update the modules array to use the dynamic courseId ---
  // The structure is the same, but the 'link' properties are now dynamic.
  const modules = [
    {
      title: 'Module 1: Introduction to Cybersecurity',
      lessons: [
        { title: 'Lesson 1: What is Cybersecurity?', link: `/courses/${courseId}/modules/fundamentals/lesson1` },
        { title: 'Lesson 2: Why It Matters', link: `/courses/${courseId}/modules/fundamentals/lesson2` },
      ],
    },
    {
      title: 'Module 2: Understanding IP Address, DNS, and Ports',
      lessons: [
        // These links are still placeholders, but if they were real, they'd follow the same pattern.
        { title: 'Lesson 1: What is an IP Address?', link: '#' },
        { title: 'Lesson 2: DNS Basics', link: '#' },
        { title: 'Lesson 3: What Are Network Ports?', link: '#' },
      ],
    },
    {
      title: 'Module 3: Network Security Basics',
      lessons: [
        { title: 'Lesson 1: Firewalls and Antivirus', link: '#' },
        { title: 'Lesson 2: VPN and Secure Connections', link: '#' },
      ],
    },
    {
      title: 'Module 4: Cybersecurity Best Practices',
      lessons: [
        { title: 'Lesson 1: Staying Safe Online', link: '#' },
      ],
    },
  ];

  // The rest of your component's logic and state management remains exactly the same.
  useEffect(() => {
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

  // Your JSX also remains the same. It will automatically use the updated 'modules' array.
  return (
    <div className="modules-page">
      <h3>CODE 010</h3>
      <h1><b>Fundamentals of Cybersecurity</b></h1>

      <button className="expand-collapse-btn" onClick={toggleAllModules}>
        {activeModules.length === modules.length ? 'Collapse All' : 'Expand All'}
      </button>

      {modules.map((module, index) => (
        <div key={index} className={`module ${isExpanded(index) ? 'active' : ''}`}>
          <div className="module-header" onClick={() => toggleModule(index)}>
            {module.title}
          </div>
          <div className="lessons">
            {module.lessons.map((lesson, idx) => (
              <div key={idx} className="lesson">
                <Link to={lesson.link}>{lesson.title}</Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FundamentalsOfCyber;