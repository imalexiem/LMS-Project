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
    title: "Leadership Training",
    text: "The leadership training course is important because organizations take on the personality of their leaders. Leadership development can optimize productivity, shape a positive culture and promote teamwork. Leaders must lead individuals and teams using an appropriate leadership style to achieve this goal. Leadership is tough. It does not matter how effortless some leaders appear to manage. The track of a leader is one fraught with constant challenges and surprises. However, a leader does not face the challenges alone. By definition, a leader has a team working to meet each challenge and achieve each goal.",
  },
  overview: {
    title: "OVERVIEW",
    text: "The leader’s job is not to solve every problem alone but to inspire their teams to solve the challenges. Leaders recognize that they do not have all the answers and constantly reeducate themselves on their businesses. They are sharpening their leadership skills. Beyond personal qualities such as vision and positive thought, a leader must also take a careful step to communicate with their staff in the best way possible. Our Leadership training course covers a variety of topics — such as leading solid teams and ethical leadership — that not only strengthen leaders’ confidence and capability but equip them to build a culture of engagement where team members are confident with their abilities and enthusiastic about contributing.",
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  // The modules section is no longer used.
  // modules: { ... },
};

const ProgramIntroduction = () => {
  // sliderRef and settings are no longer needed.
  // const sliderRef = useRef(null);
  // const settings = { ... };

  // useEffect for slider is no longer needed.
  // useEffect(() => { ... });

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

      {/* --- Tilted Modules Carousel Section REMOVED --- */}
    </div>
  );
};

export default ProgramIntroduction;
