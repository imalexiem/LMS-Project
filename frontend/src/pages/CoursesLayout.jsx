import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  Book,
  ChevronsRight,
  FileText,
  LayoutDashboard,
  Target,
} from "lucide-react";

const sidebarNavItems = [
  { to: "/courses/my-library", icon: <Book size={20} />, label: "My Library" },
  {
    to: "/courses/introduction",
    icon: <ChevronsRight size={20} />,
    label: "Program Introduction",
  },
  {
    to: "/courses/assignments",
    icon: <FileText size={20} />,
    label: "Assignments",
  },
  {
    to: "/courses/modules",
    icon: <LayoutDashboard size={20} />,
    label: "Modules",
  },
  {
    to: "/courses/outline",
    icon: <Target size={20} />,
    label: "Program Outline",
  },
  {
    to: "/courses/requirements",
    icon: <FileText size={20} />,
    label: "Completion Requirements",
  },
];

function CoursesLayout() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  const getNavLinkClasses = ({ isActive }) => {
    const baseClasses =
      "flex items-center space-x-4 px-4 py-3 rounded-xl transition-colors duration-200";

    if (isActive) {
      return `${baseClasses} bg-white text-blue-950 font-semibold`;
    } else {
      return `${baseClasses} text-white font-medium hover:bg-blue-900`;
    }
  };

  return (
    // --- THIS IS THE CORRECTED LINE ---
    // The fixed height style is removed, and "h-full" is added.
    // "overflow-hidden" is no longer needed here.
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
