import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom"; // <-- Import useParams
import { useCourseContext } from "../context/CourseContext";
import {
  Book,
  ChevronsRight,
  FileText,
  LayoutDashboard,
  Target,
} from "lucide-react";

function CoursesLayout() {
  const { selectedCourseId, setSelectedCourseId } = useCourseContext();
  const params = useParams(); // Hook to get URL params like :courseId

  // --- THIS IS THE KEY CHANGE ---
  // The old effect that hid the menu is gone. This new, simpler effect ensures
  // that if you land directly on a course page (e.g., from a bookmark or refresh),
  // the context is updated and the menu appears correctly.
  useEffect(() => {
    if (params.courseId) {
      setSelectedCourseId(params.courseId);
    }
  }, [params.courseId, setSelectedCourseId]);
  
  // --- The rest of the component remains the same ---
  // Dynamically build the navigation array
  const baseNavItems = [
    { to: "/courses/my-library", icon: <Book size={20} />, label: "My Library" },
    { to: "/courses/assignments", icon: <FileText size={20} />, label: "Assignments" },
  ];
  
  const courseSpecificNavItems = selectedCourseId ? [
    { to: `/courses/${selectedCourseId}/modules`, icon: <LayoutDashboard size={20} />, label: "Modules" },
    { to: `/courses/${selectedCourseId}/introduction`, icon: <ChevronsRight size={20} />, label: "Program Introduction" },
    { to: `/courses/${selectedCourseId}/outline`, icon: <Target size={20} />, label: "Program Outline" },
    { to: `/courses/${selectedCourseId}/requirements`, icon: <FileText size={20} />, label: "Completion Requirements" },
  ] : [];

  const sidebarNavItems = [...baseNavItems, ...courseSpecificNavItems];

  // Your existing state and functions for the slide-in animation
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const getNavLinkClasses = ({ isActive }) => {
    const baseClasses = "flex items-center space-x-4 px-4 py-3 rounded-xl transition-colors duration-200";
    return isActive ? `${baseClasses} bg-white text-blue-950 font-semibold` : `${baseClasses} text-white font-medium hover:bg-blue-900`;
  };

  // The JSX is unchanged
  return (
    <div className="flex h-full">
      <aside
        className={`w-72 bg-blue-950 text-white p-5 flex-shrink-0 transition-transform duration-500 ease-out ${
          isMounted ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col space-y-2">
          {sidebarNavItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={getNavLinkClasses}>
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <main
        className={`flex-1 p-6 sm:p-8 lg:p-10 overflow-y-auto transition-opacity duration-700 ease-out ${
          isMounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default CoursesLayout;