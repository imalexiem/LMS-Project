import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

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
import ProgramIntroduction from "./pages/ProgramIntroduction";
import ProgramOutline from "./pages/ProgramOutline";

// --- Placeholder Page Components ---
const Assignments = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Assignments</h1>
  </div>
);
const CompletionRequirements = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Completion Requirements</h1>
  </div>
);

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

      <Route path="/" element={<ProtectedRoute />}>
        <Route element={<ProtectedPagesLayout onLogout={logout} />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Navigate to="/" />} />

          <Route path="courses" element={<CoursesLayout />}>
            <Route index element={<Navigate to="my-library" replace />} />
            <Route path="my-library" element={<MyLibrary />} />
            <Route path="introduction" element={<ProgramIntroduction />} />
            <Route path="outline" element={<ProgramOutline />} />
            <Route path="assignments" element={<Assignments />} />
            <Route path="modules" element={<Modules />} />
            <Route path="requirements" element={<CompletionRequirements />} />
            <Route
              path="modules/fundamentals"
              element={<FundamentalsOfCyber />}
            />
            <Route
              path="modules/fundamentals/lesson1"
              element={<FOCModule1Lesson1 />}
            />
            <Route
              path="modules/fundamentals/lesson2"
              element={<FOCModule1Lesson2 />}
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
