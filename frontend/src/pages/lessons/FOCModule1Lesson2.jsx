import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoChevronBackCircleOutline } from "react-icons/io5";
import './LessonPage.css';


const FOCModule1Lesson2 = () => {
  // --- 2. Get the courseId from the URL ---
  const { courseId } = useParams();

  return (
    <div>
      <header className="lesson-header">
        <h1>Lesson 2: Why It Matters</h1>
      </header>


      <div className="lesson-container">
        <h2>Importance of Cybersecurity</h2>
        <p>
          As we grow increasingly reliant on digital systems, cybersecurity becomes critical to protect data, ensure privacy,
          and maintain the trust of users and stakeholders. Even small lapses in security can lead to massive consequences.
        </p>


        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/inWWhr5tnEA?si=SUovvTnVSO2-6nEp"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>


        <h2>What You'll Learn in This Lesson</h2>
        <ul>
          <li>Real-life consequences of cyberattacks</li>
          <li>Why businesses invest in security</li>
          <li>How individuals are affected by poor security practices</li>
        </ul>


        <Link className="back-link" to={`/courses/${courseId}/modules/fundamentals`}>
          Back to Modules
        </Link>
      </div>
    </div>
  );
};


export default FOCModule1Lesson2;



