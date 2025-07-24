import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const FOCModule1Lesson2 = () => {
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
          <span className="ml-5 font-medium">Module 1</span>
        </Link>
      </div>

      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0e1f56]">
          Lesson 2: <span className="font-normal">Why It Matters</span>
        </h1>
        <hr className="mt-2 border-gray-300" />
      </header>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto text-gray-800">
        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">Importance of Cybersecurity</h2>
          <p className="mt-2 leading-relaxed">
            As we grow increasingly reliant on digital systems, cybersecurity becomes critical to protect data, ensure privacy,
            and maintain the trust of users and stakeholders. Even small lapses in security can lead to massive consequences.
          </p>
        </section>

        <section className="mb-6">
          <div className="aspect-video w-full rounded-md overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/zYfx4cdFCVA?si=7hMC5zX_gx2Vx1sn"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-[#0e1f56]">What You'll Learn in This Lesson</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Real-life consequences of cyberattacks</li>
            <li>Why businesses invest in security</li>
            <li>How individuals are affected by poor security practices</li>
          </ul>
        </section>

        <div className="flex justify-between mt-8">
          <Link
            to={`/courses/${courseId}/modules/fundamentals/lesson1`}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded shadow-md"
          >
            Previous
          </Link>
          <Link
            to={`/courses/${courseId}/modules/ipdnsports/lesson1`}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-5 py-2 rounded shadow-md"
          >
            Next: Module 2
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FOCModule1Lesson2;
