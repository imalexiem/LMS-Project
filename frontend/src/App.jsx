import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { CourseProvider } from "./context/CourseContext";

// --- Import Layout and Page Components ---
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CoursesLayout from "./pages/CoursesLayout";
import MyLibrary from "./pages/MyLibrary";
import Modules from "./pages/Modules";
import FundamentalsOfCyber from "./pages/FundamentalsOfCyber";
import FOCModule1Lesson1 from "./pages/lessons/FOCModule1Lesson1";
import FOCModule1Lesson2 from "./pages/lessons/FOCModule1Lesson2";
import FOCModule2Lesson1 from "./pages/lessons/FOCModule2Lesson1";
import FOCModule2Lesson2 from "./pages/lessons/FOCModule2Lesson2";
import FOCModule2Lesson3 from "./pages/lessons/FOCModule2Lesson3";
import FOCModule3Lesson1 from "./pages/lessons/FOCModule3Lesson1";
import FOCModule3Lesson2 from "./pages/lessons/FOCModule3Lesson2";
import FOCModule4Lesson1 from "./pages/lessons/FOCModule4Lesson1";

import ProgramIntroduction from "./pages/ProgramIntroduction";
import ProgramOutline from "./pages/ProgramOutline";
import Assignments from "./pages/Assignments";
import CompletionRequirements from "./pages/CompletionRequirements"; // Add this import

const ProtectedPagesLayout = ({ onLogout }) => {
  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <Navbar onLogout={onLogout} />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  const { user, logout } = useAuth();

  return (
    <Routes>
      {/* Public route for login */}
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />

      {/* Main protected application routes */}
      <Route path="/" element={<ProtectedRoute />}>
        <Route element={<ProtectedPagesLayout onLogout={logout} />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Navigate to="/" />} />

          {/* --- 2. Wrap the CoursesLayout Route in the CourseProvider --- */}
          {/* This makes the selected course state available to the layout and all its children */}
          <Route
            path="courses"
            element={
              <CourseProvider>
                <CoursesLayout />
              </CourseProvider>
            }
          >
            {/* These "base" routes are always available */}
            <Route index element={<Navigate to="my-library" replace />} />
            <Route path="my-library" element={<MyLibrary />} />
            <Route path="assignments" element={<Assignments />} />
            
            {/* --- 3. Make course-specific routes dynamic using :courseId --- */}
            {/* This allows URLs like /courses/some-course-id/introduction */}
            <Route path=":courseId/introduction" element={<ProgramIntroduction />} />
            <Route path=":courseId/outline" element={<ProgramOutline />} />
            <Route path=":courseId/modules" element={<Modules />} />
            <Route path=":courseId/requirements" element={<CompletionRequirements />} />
            
            {/* These highly specific routes should also be dynamic */}
            <Route path=":courseId/modules/fundamentals" element={<FundamentalsOfCyber />} />
            <Route path=":courseId/modules/fundamentals/lesson1" element={<FOCModule1Lesson1 />} />
            <Route path=":courseId/modules/fundamentals/lesson2" element={<FOCModule1Lesson2 />} />
            <Route path=":courseId/modules/ipdnsports/lesson1" element={<FOCModule2Lesson1 />} />
            <Route path=":courseId/modules/ipdnsports/lesson2" element={<FOCModule2Lesson2 />} />
            <Route path=":courseId/modules/ipdnsports/lesson3" element={<FOCModule2Lesson3 />} />
            <Route path=":courseId/modules/networksecurity/lesson1" element={<FOCModule3Lesson1 />} />
            <Route path=":courseId/modules/networksecurity/lesson2" element={<FOCModule3Lesson2 />} />
            <Route path=":courseId/modules/bestpractices/lesson1" element={<FOCModule4Lesson1 />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;