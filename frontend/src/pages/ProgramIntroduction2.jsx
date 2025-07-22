import React from "react";

const pageData = {
  welcome: {
    title: "New Course Title",
    text: "Content for this section is coming soon. Please check back later for updates on this exciting new course offering.",
  },
  overview: {
    title: "OVERVIEW",
    text: "A detailed overview of this course, including its objectives, target audience, and key benefits, will be available here shortly.",
    // A generic placeholder image source
    imageSrc:
      "https://images.unsplash.com/photo-1588421357574-87938a86fa28?q=80&w=2070&auto=format&fit=crop",
  },
};

const ProgramIntroduction2 = () => {
  return (
    <div className="space-y-24 w-full font-sans mb-15">
      {/* Welcome Section */}
      <section className="relative min-h-[400px] rounded-2xl overflow-hidden flex items-center p-12 mb-40 bg-gray-600">
        {/* Using a solid color background instead of a video */}
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
        <div className="flex-1 h-96 rounded-lg overflow-hidden shadow-lg bg-gray-200">
          <img
            src={pageData.overview.imageSrc}
            alt="Placeholder for course overview"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default ProgramIntroduction2;
