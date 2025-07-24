import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const FOCModule2Lesson3 = () => {
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
          <span className="ml-5 font-medium">Module 2</span>
        </Link>
      </div>

      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0e1f56]">
          Lesson 3: <span className="font-normal">What Are Network Ports?</span>
        </h1>
        <hr className="mt-2 border-gray-300" />
      </header>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto text-gray-800">
        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Introduction to Network Ports</h2>
          <p className="mt-2 leading-relaxed">
            Network ports are virtual communication endpoints for managing multiple services on a device. When data
            is sent or received over the internet, it travels through specific ports tied to particular services or applications.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">How Ports Work</h2>
          <p className="mt-2 leading-relaxed">
            Each device on a network has an IP address, and each service running on that device listens on a specific port number.
            Ports help differentiate multiple types of traffic sent to the same IP address.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li><strong>Example:</strong> Web traffic (HTTP) typically uses <code className="bg-gray-100 px-1 rounded">port 80</code>, while secure web traffic (HTTPS) uses <code className="bg-gray-100 px-1 rounded">port 443</code>.</li>
            <li><strong>Email servers:</strong> Use ports like <code className="bg-gray-100 px-1 rounded">25</code> (SMTP), <code className="bg-gray-100 px-1 rounded">110</code> (POP3), or <code className="bg-gray-100 px-1 rounded">143</code> (IMAP).</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Types of Ports</h2>
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li><strong>Well-Known Ports (0–1023):</strong> Reserved for common protocols like HTTP, HTTPS, FTP, and SSH.</li>
            <li><strong>Registered Ports (1024–49151):</strong> Used by software applications.</li>
            <li><strong>Dynamic/Private Ports (49152–65535):</strong> Used for temporary connections.</li>
          </ol>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Common Port Numbers and Their Uses</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><code className="bg-gray-100 px-1 rounded">20/21</code> – FTP (File Transfer Protocol)</li>
            <li><code className="bg-gray-100 px-1 rounded">22</code> – SSH (Secure Shell)</li>
            <li><code className="bg-gray-100 px-1 rounded">23</code> – Telnet</li>
            <li><code className="bg-gray-100 px-1 rounded">25</code> – SMTP (Sending Email)</li>
            <li><code className="bg-gray-100 px-1 rounded">53</code> – DNS</li>
            <li><code className="bg-gray-100 px-1 rounded">80</code> – HTTP (Web)</li>
            <li><code className="bg-gray-100 px-1 rounded">110</code> – POP3 (Email Receiving)</li>
            <li><code className="bg-gray-100 px-1 rounded">443</code> – HTTPS (Secure Web)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Security Implications</h2>
          <p className="mt-2 leading-relaxed">
            Open ports can be exploited by attackers if not properly secured. It’s important to close unused ports
            and monitor open ones to reduce vulnerabilities.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Bonus: Tools to Check Open Ports</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><code className="bg-gray-100 px-1 rounded">netstat</code> – View active connections and listening ports on your computer.</li>
            <li><code className="bg-gray-100 px-1 rounded">nmap</code> – A network scanner to discover devices and open ports on a network.</li>
          </ul>
        </section>

        <div className="flex justify-between mt-8">
          <Link
            to={`/courses/${courseId}/modules/ipdnsports/lesson2`}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded shadow-md"
            onClick={() => window.scrollTo(0, 0)}
          >
            Previous
          </Link>
          <Link
            to={`/courses/${courseId}/modules/networksecurity/lesson1`}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-5 py-2 rounded shadow-md"
            onClick={() => window.scrollTo(0, 0)}
          >
            Next: Module 3
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FOCModule2Lesson3;
