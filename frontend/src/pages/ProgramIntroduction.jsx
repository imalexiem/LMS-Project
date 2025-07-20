import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { Play } from "lucide-react"; // --- 1. IMPORT THE PLAY ICON ---

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const pageData = {
  welcome: {
    title: "Leadership Training",
    text: "The leadership training course is important because organizations take on the personality of their leaders. Leadership development can optimize productivity, shape a positive culture and promote teamwork. Leaders must lead individuals and teams using an appropriate leadership style to achieve this goal. Leadership is tough. It does not matter how effortless some leaders appear to manage. The track of a leader is one fraught with constant challenges and surprises. However, a leader does not face the challenges alone. By definition, a leader has a team working to meet each challenge and achieve each goal.",
    videoSrc:
      "https://videos.pexels.com/video-files/853871/853871-hd_1920_1080_30fps.mp4",
  },
  overview: {
    title: "OVERVIEW",
    text: "The leader’s job is not to solve every problem alone but to inspire their teams to solve the challenges. Leaders recognize that they do not have all the answers and constantly reeducate themselves on their businesses. They are sharpening their leadership skills. Beyond personal qualities such as vision and positive thought, a leader must also take careful steps to communicate with their staff in the best way possible. Our Leadership training course covers a variety of topics — such as leading solid teams and ethical leadership — that not only strengthen leaders’ confidence and capability but equip them to build a culture of engagement where team members are confident with their abilities and enthusiastic about contributing.",
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  modules: {
    title: "MODULES",
    items: [
      { id: 1, text: "The Foundation<br />of Leadership" },
      { id: 2, text: "Effective<br />Communication" },
      { id: 3, text: "Leading High-<br />Performing Teams" },
      { id: 4, text: "Ethical<br />Decision-Making" },
      { id: 5, text: "Strategic<br />Thinking & Vision" },
      { id: 6, text: "Change<br />Management" },
    ],
  },
};

const ProgramIntroduction = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 800, settings: { slidesToShow: 2 } },
      { breakpoint: 550, settings: { slidesToShow: 1 } },
    ],
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  }, []);

  return (
    <div className="space-y-24 w-full">
      {/* Welcome Section */}
      <section className="relative min-h-[400px] rounded-2xl overflow-hidden flex items-center p-12 mb-50">
        <video
          src={pageData.welcome.videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        ></video>
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        <div className="relative z-10 max-w-3xl text-white drop-shadow-lg">
          <h1 className="text-6xl font-bold mb-4">{pageData.welcome.title}</h1>
          <p className="leading-relaxed">{pageData.welcome.text}</p>
        </div>

        <div className="absolute top-5 right-5 z-10 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-xs font-semibold text-white">
          <Play className="h-3 w-3 fill-white" />
          <span>Video Placeholder</span>
        </div>
      </section>

      {/* Overview Section with Image Placeholder */}
      <section className="flex items-center gap-16 mb-50">
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

      {/* Tilted Modules Carousel Section */}
      <section>
        <h2 className="text-6xl font-bold text-gray-800 text-center mb-20">
          {pageData.modules.title}
        </h2>
        <Slider ref={sliderRef} {...settings}>
          {pageData.modules.items.map((module, index) => (
            <div key={module.id} className="px-4 py-4">
              <div
                className={`
                  bg-gray-200 rounded-2xl h-80 w-67 flex items-center justify-center text-center
                  font-bold text-xl text-gray-600 p-4 transition-transform duration-300 ease-in-out
                  ${index % 2 === 0 ? "-rotate-2" : "rotate-2"}
                  hover:!rotate-0 hover:scale-105 hover:shadow-xl mb-15
                `}
                dangerouslySetInnerHTML={{ __html: module.text }}
              />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default ProgramIntroduction;
