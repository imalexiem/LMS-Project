import React, { useRef, useEffect } from "react";
// Slider is no longer used, so the import can be removed.
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// --- 1. IMPORT YOUR LOCAL VIDEO ASSET ---
import welcomeVideo from "../assets/WelcometoALPS.mp4";
// moduleCardImage is no longer used.
// import moduleCardImage from "../assets/ModuleCards.png";

const pageData = {
  welcome: {
    title: "Fundamentals of Cybersecurity",
    text: "In an increasingly connected world, understanding cybersecurity is essential for everyone. This foundational course is designed to demystify the world of digital defense, providing you with the core knowledge to identify cyber threats, protect personal and organizational data, and understand the principles of online security. From malware and phishing to network security and cryptography, you will gain a clear insight into the challenges and solutions that define the digital age, building a crucial skill set for any modern career path.",
  },
  overview: {
    title: "OVERVIEW",
    text: "TThis course offers a comprehensive overview of the cybersecurity landscape, covering a wide range of critical topics. We will explore the core pillars of security: confidentiality, integrity, and availability. You'll learn about common attack vectors, including social engineering, and the defensive measures used to counter them, such as firewalls, encryption, and access control. Our curriculum is designed to provide not just theoretical knowledge but also a practical understanding of risk management and how to implement a security-first mindset, empowering you to make informed decisions and protect digital assets effectively.",
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
};

const ProgramIntroduction = () => {
  return (
    <div className="space-y-24 w-full font-sans mb-15">
      {/* Welcome Section */}
      <section className="relative min-h-[400px] rounded-2xl overflow-hidden flex items-center p-12 mb-40">
        {/* Video Background */}
        <video
          src={welcomeVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
        ></video>
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-0"></div>

        <div className="relative z-10 max-w-3xl text-white drop-shadow-lg">
          <h1 className="text-6xl font-bold mb-4">{pageData.welcome.title}</h1>
          <p className="leading-relaxed">{pageData.welcome.text}</p>
        </div>
      </section>

      {/* Overview Section with Image Placeholder */}
      <section className="flex items-center gap-16 ">
        <div className="flex-1">
          <h2 className="text-6xl font-bold text-gray-800 mb-4">
            {pageData.overview.title}
          </h2>
          <p className="text-gray-600 leading-relaxed ">
            {pageData.overview.text}
          </p>
        </div>
        <div className="flex-1 h-96 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 ">
          <img
            src={pageData.overview.imageSrc}
            alt="Leadership program overview"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default ProgramIntroduction;
