import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const FOCModule2Lesson2 = () => {
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
          Lesson 2: <span className="font-normal">DNS Basics</span>
        </h1>
        <hr className="mt-2 border-gray-300" />
      </header>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto text-gray-800">
        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">What is DNS?</h2>
          <p className="mt-2 leading-relaxed">
            DNS stands for <strong>Domain Name System</strong>. It is like the phonebook of the internet.
            Humans access information online through domain names like <code className="bg-gray-100 px-1 rounded">www.google.com</code> or <code className="bg-gray-100 px-1 rounded">www.facebook.com</code>.
            Web browsers interact through IP addresses, so DNS translates domain names to IP addresses,
            allowing browsers to load internet resources.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">How DNS Works</h2>
          <p className="mt-2 leading-relaxed">When you type a website address into your browser, here's what happens behind the scenes:</p>
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>The browser checks if it already knows the IP address (from cache).</li>
            <li>If not, it sends a request to a <strong>DNS resolver</strong> (usually provided by your ISP).</li>
            <li>The resolver queries a <strong>root DNS server</strong> to find the right <strong>Top-Level Domain (TLD)</strong> server (like .com, .org, .net).</li>
            <li>The TLD server returns the address of the <strong>authoritative DNS server</strong> for that domain.</li>
            <li>The resolver then queries the authoritative server to get the actual IP address.</li>
            <li>Finally, the browser uses this IP to access the website.</li>
          </ol>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">DNS Structure</h2>
          <p className="mt-2 leading-relaxed">The DNS is a hierarchical system divided into levels:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Root Level:</strong> Represented by a dot (<code className="bg-gray-100 px-1 rounded">.</code>), it's the top of the DNS hierarchy.</li>
            <li><strong>Top-Level Domains (TLDs):</strong> Examples include <code className="bg-gray-100 px-1 rounded">.com</code>, <code className="bg-gray-100 px-1 rounded">.org</code>, <code className="bg-gray-100 px-1 rounded">.gov</code>, <code className="bg-gray-100 px-1 rounded">.ph</code>.</li>
            <li><strong>Second-Level Domains:</strong> These are names registered by users, like <code className="bg-gray-100 px-1 rounded">google</code> in <code className="bg-gray-100 px-1 rounded">google.com</code>.</li>
            <li><strong>Subdomains:</strong> For example, <code className="bg-gray-100 px-1 rounded">mail.google.com</code> has <code className="bg-gray-100 px-1 rounded">mail</code> as a subdomain.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Common DNS Terms</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>DNS Server:</strong> A server that stores DNS records and responds to DNS queries.</li>
            <li><strong>IP Address:</strong> A unique string of numbers identifying each device on the network.</li>
            <li><strong>DNS Cache:</strong> A temporary storage of DNS lookups saved by your browser or OS to speed up repeat visits.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Why DNS is Important</h2>
          <p className="mt-2 leading-relaxed">
            Without DNS, users would have to remember complex IP addresses for every website they visit.
            DNS simplifies internet use and allows websites to change IP addresses without affecting users.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Bonus: Example DNS Query</h2>
          <p className="mt-2 leading-relaxed">Let’s say you visit <code className="bg-gray-100 px-1 rounded">www.example.com</code>:</p>
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>Your computer checks local DNS cache.</li>
            <li>If not found, it contacts your configured DNS resolver (e.g., Google DNS <code className="bg-gray-100 px-1 rounded">8.8.8.8</code>).</li>
            <li>The resolver contacts root → TLD → authoritative server → returns IP.</li>
            <li>Your browser connects to the IP address and loads the site.</li>
          </ol>
        </section>

        <div className="flex justify-between mt-8">
          <Link
            to={`/courses/${courseId}/modules/ipdnsports/lesson1`}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded shadow-md"
            onClick={() => window.scrollTo(0, 0)}
          >
            Previous
          </Link>
          <Link
            to={`/courses/${courseId}/modules/ipdnsports/lesson3`}
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

export default FOCModule2Lesson2;
