import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const FOCModule3Lesson1 = () => {
const { courseId } = useParams(); 
useScrollToTop(); // This handles all the scrolling logic

  return (
    <div className="px-6 md:px-12 py-8 bg-gray-100 min-h-screen">
      <div className="mb-4">
        <Link
          to={`/courses/${courseId}/modules`}
          className="inline-block text-sm text-gray-700 bg-gray-200 px-3 py-1 rounded-l-full relative"
        >
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-lg font-semibold">&lsaquo;</span>
          <span className="ml-5 font-medium">Module 3</span>
        </Link>
      </div>

      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0e1f56]">
          Lesson 1: <span className="font-normal">Firewalls and Antivirus</span>
        </h1>
        <hr className="mt-2 border-gray-300" />
      </header>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto text-gray-800">
        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">What is a Firewall?</h2>
          <p className="mt-2 leading-relaxed">
            A firewall is a security system that monitors and controls incoming and outgoing network traffic based on
            predetermined security rules. It acts as a barrier between a trusted internal network and untrusted external
            networks, such as the internet.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Types of Firewalls</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Hardware Firewall:</strong> A physical device placed between your network and the internet.</li>
            <li><strong>Software Firewall:</strong> A program installed on your computer that protects against unauthorized access.</li>
            <li><strong>Cloud Firewall:</strong> A firewall provided and managed in the cloud for virtual infrastructures.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">How Firewalls Work</h2>
          <p className="mt-2 leading-relaxed">
            Firewalls use rules to allow or block data packets. These rules may be based on IP addresses, port numbers,
            protocols, or keywords. They help prevent malware, unauthorized access, and data leaks.
          </p>
        </section>

        <div className="relative overflow-hidden rounded-lg shadow-lg mb-6 pb-[56.25%] h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/kDEX1HXybrU?si=YskZbsZkMJxAsTu3"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">What is Antivirus Software?</h2>
          <p className="mt-2 leading-relaxed">
            Antivirus software is designed to detect, prevent, and remove malicious software (malware) such as viruses,
            worms, trojans, spyware, and ransomware.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Functions of Antivirus Software</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Real-time protection against malware</li>
            <li>System scanning and threat removal</li>
            <li>Quarantine suspicious files</li>
            <li>Update virus definitions regularly</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Why Are Firewalls and Antivirus Important?</h2>
          <p className="mt-2 leading-relaxed">
            Both are essential components of cybersecurity. Firewalls prevent unauthorized access, while antivirus software
            protects against internal threats and infected files. Using both provides layered protection for your systems.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Common Antivirus Software</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Windows Defender</li>
            <li>Avast</li>
            <li>Norton</li>
            <li>Kaspersky</li>
            <li>Bitdefender</li>
          </ul>
        </section>

        <div className="flex justify-between mt-8">
          <Link
            to={`/courses/${courseId}/modules/ipdnsports/lesson3`}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded shadow-md"
            onClick={() => window.scrollTo(0, 0)}
          >
            Previous
          </Link>
          <Link
            to={`/courses/${courseId}/modules/networksecurity/lesson2`}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-5 py-2 rounded shadow-md"
            onClick={() => window.scrollTo(0, 0)}
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FOCModule3Lesson1;
