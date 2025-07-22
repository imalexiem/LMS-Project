import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Module2Lesson1 from "../../assets/Module1Lesson1.mp4";

const FOCModule2Lesson1 = () => {
  const { courseId } = useParams(); 

  return (
    <div className="px-6 md:px-12 py-8 bg-gray-100 min-h-screen">
      <div className="mb-4">
        <Link
          to={`/courses/${courseId}/modules`}
          className="inline-block text-sm text-gray-700 bg-gray-200 px-3 py-1 rounded-l-full relative"
        >
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-lg font-semibold">&lsaquo;</span>
          <span className="ml-5 font-medium">Module 2</span>
        </Link>
      </div>

      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0e1f56]">
          Lesson 1: <span className="font-normal">What is an IP Address?</span>
        </h1>
        <hr className="mt-2 border-gray-300" />
      </header>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto text-gray-800">
        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Introduction to IP Addresses</h2>
          <p className="mt-2 leading-relaxed">
            An IP address (Internet Protocol address) is a unique identifier assigned to each device connected to a
            network. It allows devices to send and receive information across the internet.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Types of IP Addresses</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>IPv4:</strong> Most commonly used, written as four numbers separated by dots (e.g., 192.168.1.1)</li>
            <li><strong>IPv6:</strong> A newer version with a longer format to support more devices (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334)</li>
          </ul>
        </section>

        <section className="mb-6">
          <div className="aspect-video w-full rounded-md overflow-hidden">
            <video className="w-full h-full" controls>
              <source src={Module2Lesson1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Why It Matters</h2>
          <p className="mt-2 leading-relaxed">
            IP addresses are essential for identifying devices and routing data properly. Without them, the internet wouldn't know where to deliver your emails, websites, or messages.
          </p>
        </section>

        <div className="flex justify-between mt-8">
          <Link
            to={`/courses/${courseId}/modules/fundamentals/lesson1`}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded shadow-md"
          >
            Previous
          </Link>
          <Link
            to={`/courses/${courseId}/modules/ipdnsports/lesson2`}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-5 py-2 rounded shadow-md"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FOCModule2Lesson1;
