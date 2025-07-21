import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const FOCModule4Lesson1 = () => {
const { courseId } = useParams();

  return (
    <div className="px-6 md:px-12 py-8 bg-gray-100 min-h-screen">
      <div className="mb-4">
        <Link
          to={`/courses/${courseId}/modules`}
          className="inline-block text-sm text-gray-700 bg-gray-200 px-3 py-1 rounded-l-full relative"
        >
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-lg font-semibold">&lsaquo;</span>
          <span className="ml-5 font-medium">Module 4</span>
        </Link>
      </div>

      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0e1f56]">
          Lesson 1: <span className="font-normal">Staying Safe Online</span>
        </h1>
        <hr className="mt-2 border-gray-300" />
      </header>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto text-gray-800">
        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Overview</h2>
          <p className="mt-2 leading-relaxed">
            Staying safe online involves using smart habits, tools, and awareness to avoid cyber threats and protect your personal
            data. With the internet being part of daily life, it's crucial to understand how to navigate it securely.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Tips for Safe Browsing</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Always check for HTTPS when visiting websites</li>
            <li>Avoid clicking on suspicious links or attachments</li>
            <li>Keep your browser and plugins up to date</li>
            <li>Be cautious of pop-ups and ads</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Creating Strong Passwords</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Use a mix of letters, numbers, and symbols</li>
            <li>Avoid using personal info like birthdays or names</li>
            <li>Use different passwords for each account</li>
            <li>Consider using a password manager</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Social Media Awareness</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Review your privacy settings regularly</li>
            <li>Be mindful of what you post publicly</li>
            <li>Watch out for social engineering tactics</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Safe Email Practices</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Verify the sender before opening links or files</li>
            <li>Look for spelling errors or odd language</li>
            <li>Don’t share sensitive information via email</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Why It Matters</h2>
          <p className="mt-2 leading-relaxed">
            Online safety helps prevent identity theft, financial loss, and unauthorized access to your accounts. Practicing
            cybersecurity hygiene is essential for protecting yourself and your community.
          </p>
        </section>

        <div className="flex justify-between mt-8">
          <Link
            to={`/courses/${courseId}/modules/networksecurity/lesson2`}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded shadow-md"
          >
            Previous
          </Link>
          <Link
            to={`/courses/${courseId}/modules`}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-5 py-2 rounded shadow-md"
          >
            Done
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FOCModule4Lesson1;
