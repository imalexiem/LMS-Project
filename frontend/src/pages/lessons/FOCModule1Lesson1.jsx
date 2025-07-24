import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const FOCModule1Lesson1 = () => {
  const { courseId } = useParams(); // ← Get the dynamic course ID
  useScrollToTop(); // This handles all the scrolling logic

  return (
    <div className="px-6 md:px-12 py-8 bg-gray-100 min-h-screen">
      <div className="mb-4">
        <Link
          to={`/courses/${courseId}/modules`}
          className="inline-block text-sm text-gray-700 bg-gray-200 px-3 py-1 rounded-l-full relative"
        >
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-lg font-semibold">&lsaquo;</span>
          <span className="ml-5 font-medium">Module 1</span>
        </Link>
      </div>

      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0e1f56]">
          Lesson 1: <span className="font-normal">What is Cybersecurity?</span>
        </h1>
        <hr className="mt-2 border-gray-300" />
      </header>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto text-gray-800">
        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Overview</h2>
          <p className="mt-2 leading-relaxed">
            Cybersecurity refers to the practice of protecting systems, networks, and programs from digital attacks.
            These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information;
            extorting money from users; or interrupting normal business processes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Why It's Important</h2>
          <p className="mt-2 leading-relaxed">
            Implementing effective cybersecurity measures is particularly challenging today because there are more
            devices than people, and attackers are becoming more innovative.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Key Concepts</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Confidentiality, Integrity, and Availability (CIA Triad)</li>
            <li>Types of Threats: Malware, Phishing, Ransomware</li>
            <li>Security Best Practices: Strong Passwords, Multi-Factor Authentication</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Real-World Examples</h2>
          <p className="mt-2 leading-relaxed">
            • In 2017, the WannaCry ransomware attack affected thousands of computers in over 150 countries.
            <br />
            • Data breaches in companies like Facebook and Yahoo exposed personal information of millions of users.
          </p>
        </section>

        <div className="flex justify-end mt-8">
          <Link
            to={`/courses/${courseId}/modules/fundamentals/lesson2`}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-5 py-2 rounded shadow-md"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FOCModule1Lesson1;
