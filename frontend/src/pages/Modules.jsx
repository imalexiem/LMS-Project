import React from "react";
import { Link } from "react-router-dom";

const Modules = () => {
  return (
    <div className="card-container">
      <a href="presentation-skills.html" className="card-link">
        <div className="card">
          <p className="code">CODE 020</p>
          <h2 className="title">Presentation Skills</h2>
          <div className="placeholder"></div>
        </div>
      </a>

      <a href="advanced-communication.html" className="card-link">
        <div className="card">
          <p className="code">CODE 021</p>
          <h2 className="title">
            Advanced
            <br />
            Communication
          </h2>
          <div className="placeholder"></div>
        </div>
      </a>

      <Link to="fundamentals" className="card-link">
        <div className="card">
          <p className="code">CODE 010</p>
          <h2 className="title">
            Fundamentals of
            <br />
            Cybersecurity
          </h2>
          <div className="placeholder"></div>
        </div>
      </Link>
    </div>
  );
};

export default Modules;
