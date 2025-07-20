import React from "react";
import illustration from "../assets/undraw_project_completed.png";

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

const ProgramOutline = () => {
  return (
    <div className="w-full space-y-8">
      <section className="relative rounded-2xl p-8 flex items-center shadow-lg overflow-hidden h-56">
        <img
          src={illustration}
          alt="Program background"
          className="absolute inset-0 w-full h-full gap-6 bg-[#757575] object-cover object-[100%_40%] shadow-md z-0 transition-transform duration-500 ease-in-out scale-100 "
        />
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="relative z-20">
          <h1 className="text-5xl font-bold text-white shadow-black">
            Program Outline
          </h1>
          <p className="text-gray-100 mt-2 font-semibold shadow-black">
            The program outline displays the summary of tasks that's been done.
          </p>
        </div>
      </section>

      {/* Table Structure */}
      <div>
        <div className="grid grid-cols-12 gap-6 bg-[#757575] text-white font-bold p-4 rounded-2xl shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
          <div className="col-span-2 text-center">Date</div>
          <div className="col-span-2 text-center">Week</div>
          <div className="col-span-2 text-center">Module</div>
          <div className="col-span-3">Module Outcomes</div>
          <div className="col-span-3">Key Activities</div>
        </div>

        <div className="space-y-4 pt-4">
          {outlineData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-12 gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:border-slate-200"
            >
              <div className="col-span-2 text-center text-gray-800 font-medium self-center">
                {item.date}
              </div>
              <div className="col-span-2 text-center text-gray-600 self-center">
                {item.week}
              </div>
              <div className="col-span-2 text-center text-gray-600 self-center">
                {item.module}
              </div>
              <div className="col-span-3 text-gray-600">
                <ul className="list-disc list-outside pl-4 space-y-2">
                  {item.outcomes.map((outcome, i) => (
                    <li key={i}>{outcome}</li>
                  ))}
                </ul>
              </div>
              <div className="col-span-3 text-gray-600">
                <ul className="list-disc list-outside pl-4 space-y-2">
                  {item.activities.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramOutline;
