// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import LockScreen from "./screens/LockScreen";
import Dashboard from "./screens/Dashboard";
import Profile from "./screens/Profile";
import Experience from "./screens/Experience";
import Skills from "./screens/Skills";
import Achievements from "./screens/Achievements";
import Certificates from "./screens/Certificates";

// ScrollToTop component
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function App() {
  const [unlocked, setUnlocked] = useState(false); // lock state

  return (
    <Router>
      {!unlocked ? (
        // Show LockScreen first
        <LockScreen onUnlock={() => setUnlocked(true)} />
      ) : (
        <>
          {/* Scroll to top on route change */}
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route index element={<Navigate to="/profile" />} />
              <Route path="profile" element={<Profile />} />
              <Route path="experience" element={<Experience />} />
              <Route path="skills" element={<Skills />} />
              <Route path="achievements" element={<Achievements />} />
              <Route path="certificates" element={<Certificates />} />
            </Route>
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
