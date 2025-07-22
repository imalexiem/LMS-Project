import React from "react";

const outlineData = [
  {
    date: "December 20, 2024",
    week: "Orientation Week",
    module: "Programme Orientation",
    outcomes: [
      "Discuss the use of specific emergent technology for improving business performance.",
      "Identify how new technologies can disrupt existing industries.",
    ],
    activities: [
      "Programme Introduction",
      "Faculty Introduction & Meet-and-Greet",
      "Learning Platform Overview",
    ],
  },
  {
    date: "December 27, 2024",
    week: "Week 1",
    module: "The Foundation of Leadership",
    outcomes: [
      "Define the core principles of effective leadership.",
      "Differentiate between management and leadership.",
      "Develop a strategic mindset for long-term planning.",
      "Utilize frameworks like SWOT for strategic analysis.",
    ],
    activities: [
      "Interactive Lecture: What is a Leader?",
      "Case Study Analysis: Great Leaders in History",
    ],
  },
  {
    date: "January 3, 2025",
    week: "Week 2",
    module: "Effective Communication",
    outcomes: [
      "Master active listening techniques.",
      "Learn to provide constructive feedback.",
    ],
    activities: [
      "Role-playing: Difficult Conversations",
      "Workshop: Crafting a Compelling Message",
    ],
  },
  {
    date: "January 10, 2025",
    week: "Week 3",
    module: "Strategic Thinking",
    outcomes: [
      "Develop a strategic mindset for long-term planning.",
      "Utilize frameworks like SWOT for strategic analysis.",
    ],
    activities: ["SWOT Analysis Workshop", "Scenario Planning Exercise"],
  },
  {
    date: "January 17, 2025",
    week: "Week 4",
    module: "Final Project Kick-off",
    outcomes: [
      "Apply learned concepts to a real-world leadership problem.",
      "Develop a comprehensive project plan.",
    ],
    activities: [
      "Project Brainstorming Session",
      "Team Formation and Role Assignment",
    ],
  },
  {
    date: "January 24, 2025",
    week: "Week 5",
    module: "Conflict Resolution",
    outcomes: [
      "Identify sources of conflict in a team environment.",
      "Apply negotiation and mediation techniques.",
    ],
    activities: [
      "Simulation: Resolving Team Disputes",
      "Lecture: The Thomas-Kilmann Conflict Mode Instrument",
    ],
  },
  {
    date: "January 31, 2025",
    week: "Week 6",
    module: "Leading Change",
    outcomes: [
      "Understand the psychological impact of organizational change.",
      "Develop strategies to lead a team through transition.",
    ],
    activities: [
      "Case Study: A Major Corporate Restructuring",
      "Guest Speaker: A Leader in Change Management",
    ],
  },
  {
    date: "February 7, 2025",
    week: "Week 7",
    module: "Project Presentations",
    outcomes: [
      "Present project findings clearly and persuasively.",
      "Demonstrate leadership through project execution.",
    ],
    activities: [
      "Final Project Presentations to Panel",
      "Peer Feedback Session",
      "Course Wrap-up and Certificate Distribution",
    ],
  },
];

const greetings = [
  "Ready to dive in? 🚀",
  "Let's get started! 🎯",
  "Time to conquer those modules! 💪",
  "Onward to learning! 📚",
];
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

const ProgramOutline = () => {
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
          <div className="absolute top-24 -right-12 w-60 h-60 bg-purple-500 rounded-full filter blur-lg opacity-30 animate-pulse [animation-delay:-2s]"></div>
          <div className="absolute top-10 left-40 w-24 h-24 bg-cyan-400 rounded-full filter blur-sm opacity-60 animate-bounce [animation-delay:-1s]"></div>
          <div className="absolute bottom-10 left-10 w-28 h-28 bg-pink-400 rounded-full filter blur-md opacity-50 animate-pulse [animation-delay:-3s]"></div>
        </div>

        {/* --- THIS IS THE ONLY LINE THAT WAS CHANGED --- */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10"></div>

        <div className="relative z-20 max-w-md space-y-4">
          <p className="text-cyan-300 italic">{randomGreeting}</p>
          <h1 className="text-5xl font-bold text-white">Program Outline</h1>
          <p className="text-gray-200 font-semibold">
            The program outline displays the summary of tasks that's been done.
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

      <div className="space-y-4 -mt-4">
        {outlineData.map((item, idx) => (
          <div
            key={idx}
            className={
              `grid grid-cols-12 gap-6 p-6 rounded-2xl shadow-sm border border-transparent ` +
              `odd:bg-white even:bg-gray-50 transition-all duration-300 ease-in-out ` +
              `hover:shadow-lg hover:-translate-y-1 hover:border-gray-200 `
            }
            tabIndex={0}
          >
            <div className="col-span-2 text-center text-gray-800 font-semibold self-center">
              {item.date}
            </div>
            <div className="col-span-2 text-center text-gray-700 self-center">
              {item.week}
            </div>
            <div className="col-span-2 text-center text-gray-700 self-center">
              {item.module}
            </div>
            <div className="col-span-3 text-gray-700 border-l border-gray-200">
              <ul className="list-disc list-outside space-y-2 marker:text-gray-400 pl-5">
                {item.outcomes.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>
            <div className="col-span-3 text-gray-700 border-l border-gray-200">
              <ul className="list-disc list-outside space-y-2 marker:text-gray-400 pl-5">
                {item.activities.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramOutline;
