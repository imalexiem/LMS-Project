import React from 'react';
import { Link, useParams } from 'react-router-dom';


const FOCModule3Lesson2 = () => {
const { courseId } = useParams();

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
          Lesson 2: <span className="font-normal">VPN and Secure Connections</span>
        </h1>
        <hr className="mt-2 border-gray-300" />
      </header>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto text-gray-800">
        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">What is a VPN?</h2>
          <p className="mt-2 leading-relaxed">
            A <strong>VPN (Virtual Private Network)</strong> is a service that allows you to securely connect to the internet
            by routing your connection through an encrypted tunnel to a remote server. It hides your IP address and encrypts
            your online activity, making it private and secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Benefits of Using a VPN</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Protects your online privacy and identity</li>
            <li>Secures data on public Wi-Fi networks</li>
            <li>Bypasses geo-restrictions and censorship</li>
            <li>Masks your real IP address from websites and trackers</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">How VPNs Work</h2>
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>You connect to a VPN app on your device.</li>
            <li>The app encrypts your internet traffic and routes it to a secure VPN server.</li>
            <li>The VPN server sends your requests to the web, receives the response, and sends it back encrypted.</li>
            <li>Your ISP and hackers only see encrypted traffic — not your actual activity or destination.</li>
          </ol>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Common VPN Protocols</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>OpenVPN:</strong> Highly secure and widely supported.</li>
            <li><strong>WireGuard:</strong> Fast and modern VPN protocol.</li>
            <li><strong>L2TP/IPsec:</strong> Older, still used with added encryption.</li>
            <li><strong>PPTP:</strong> Outdated and less secure.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Other Secure Connections</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>HTTPS:</strong> Encrypts data between your browser and the website.</li>
            <li><strong>SSL/TLS:</strong> Protocols that secure email, chat, and other communications.</li>
            <li><strong>SSH:</strong> Secure way to remotely access servers or devices.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Why This Matters</h2>
          <p className="mt-2 leading-relaxed">
            Using VPNs and secure protocols protects your data from eavesdropping, theft, and unauthorized access. This is
            especially important when accessing confidential work files or conducting online banking.
          </p>
        </section>

        <div className="flex justify-between mt-8">
          <Link
            to={`/courses/${courseId}/modules/networksecurity/lesson1`}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded shadow-md"
          >
            Previous
          </Link>
          <Link
            to={`/courses/${courseId}/modules/bestpractices/lesson1`}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-5 py-2 rounded shadow-md"
          >
            Next: Module 4
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FOCModule3Lesson2;
