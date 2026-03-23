import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import LockScreen from "./screens/LockScreen"; // your lockscreen component
import Dashboard from "./screens/Dashboard";
import Profile from "./screens/Profile";
import Experience from "./screens/Experience";
import Skills from "./screens/Skills";
import Achievements from "./screens/Achievements";
import Certificates from "./screens/Certificates";

function App() {
  const [unlocked, setUnlocked] = useState(false); // lock state

  return (
    <Router>
      {!unlocked ? (
        // Show LockScreen first
        <LockScreen onUnlock={() => setUnlocked(true)} />
      ) : (
        // Show Dashboard and routes after unlocking
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
      )}
    </Router>
  );
}

export default App;