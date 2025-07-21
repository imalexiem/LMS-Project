import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoChevronBackCircleOutline } from "react-icons/io5";
import './LessonPage.css'; 


const FOCModule1Lesson1 = () => {
  // --- 2. Get the courseId from the URL ---
  const { courseId } = useParams();

  return (
    <div>
      <header className="lesson-header">
        <h1>Lesson 1: What is Cybersecurity?</h1>
      </header>


      <div className="lesson-container">
        <h2>Overview</h2>
        <p>
          Cybersecurity refers to the practice of protecting systems, networks, and programs from digital attacks.
          These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information;
          extorting money from users; or interrupting normal business processes.
        </p>


        <br />
        <h2>Why It's Important</h2>
        <p>
          Implementing effective cybersecurity measures is particularly challenging today because there are more
          devices than people, and attackers are becoming more innovative.
        </p>


        <br />
        <h2>Key Concepts</h2>
        <ul>
          <li>Confidentiality, Integrity, and Availability (CIA Triad)</li>
          <li>Types of Threats: Malware, Phishing, Ransomware</li>
          <li>Security Best Practices: Strong Passwords, Multi-Factor Authentication</li>
        </ul>


        <br />
        <h2>Real-World Examples</h2>
        <p>
          - In 2017, the WannaCry ransomware attack affected thousands of computers in over 150 countries.
          <br />
          - Data breaches in companies like Facebook and Yahoo exposed personal information of millions of users.
        </p>


        <Link to={`/courses/${courseId}/modules/fundamentals`} className="back-link">
          Back to Modules
        </Link>
      </div>
    </div>
  );
};


export default FOCModule1Lesson1;



