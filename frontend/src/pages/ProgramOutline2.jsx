import React from "react";

// The outlineData array is now empty.
const outlineData = [];

const greetings = [
  "A new journey awaits! ✨",
  "Exciting content coming soon! ⏳",
  "Get ready for a new course! 🎓",
];
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

const ProgramOutline2 = () => {
  return (
    <div className="w-full space-y-8 font-sans">
      <section
        className="relative rounded-2xl p-8 flex items-center bg-[#757575] shadow-lg overflow-hidden min-h-[224px] 
                   transition-transform duration-300 ease-in-out transform hover:scale-[1.02]"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-8 left-12 w-16 h-16 bg-cyan-300 rounded-full filter blur-lg opacity-50 animate-pulse [animation-delay:-0.5s]"></div>
          <div className="absolute top-0 -left-24 w-72 h-72 bg-pink-500 rounded-full filter blur-xl opacity-40 animate-pulse"></div>
          <div className="absolute -bottom-16 right-0 w-80 h-80 bg-cyan-500 rounded-full filter blur-xl opacity-40 animate-bounce"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10"></div>
        <div className="relative z-20 max-w-md space-y-4">
          <p className="text-cyan-300 italic">{randomGreeting}</p>
          <h1 className="text-5xl font-bold text-white">Program Outline</h1>
          <p className="text-gray-200 font-semibold">
            The course outline is currently being prepared.
          </p>
        </div>
      </section>

      <div
        className="grid grid-cols-12 gap-6 bg-[#757575] text-white font-semibold text-sm uppercase p-4 rounded-2xl shadow-md 
                   transition-transform duration-300 ease-in-out transform hover:scale-[1.01]"
      >
        <div className="col-span-2 text-center">Date</div>
        <div className="col-span-2 text-center">Week</div>
        <div className="col-span-2 text-center">Module</div>
        <div className="col-span-3">Module Outcomes</div>
        <div className="col-span-3">Key Activities</div>
      </div>

      {/* --- DATA ROWS SECTION --- */}
      <div className="space-y-4 -mt-4">
        {outlineData.length > 0 ? (
          outlineData.map((item, idx) => (
            <div
              key={idx}
              className={
                `grid grid-cols-12 gap-6 p-6 rounded-2xl shadow-sm border border-transparent ` +
                `odd:bg-white even:bg-gray-50 transition-all duration-300 ease-in-out ` +
                `hover:shadow-lg hover:-translate-y-1 hover:border-gray-200 `
              }
              tabIndex={0}
            >
              {/* Table row content would go here */}
            </div>
          ))
        ) : (
          // This message will be shown since outlineData is empty
          <div className="text-center p-10 bg-white rounded-2xl shadow-sm">
            <p className="text-gray-500">
              No outline details are available for this course yet. Please check
              back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramOutline2;
