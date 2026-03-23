import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { FaUser, FaBriefcase, FaTools, FaStar, FaGraduationCap } from "react-icons/fa";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const sections = [
    { path: "/profile", title: "Profile", icon: <FaUser size={24} /> },
    { path: "/experience", title: "Experience", icon: <FaBriefcase size={24} /> },
    { path: "/skills", title: "Skills", icon: <FaTools size={24} /> },
    { path: "/achievements", title: "Achievements", icon: <FaStar size={24} /> },
    { path: "/certificates", title: "Certificates", icon: <FaGraduationCap size={24} /> },
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Dynamic page content */}
      <div className="flex-1 px-6 py-12 flex flex-col gap-16 max-w-4xl mx-auto">
        <Outlet />
      </div>

      {/* Bottom Glass Navigation Bar */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-11/12 max-w-3xl rounded-full bg-white/10 backdrop-blur-md shadow-xl flex justify-between items-center px-6 py-3 z-50">
        {sections.map((sec) => {
          const isActive = location.pathname === sec.path;
          return (
            <button
              key={sec.path}
              onClick={() => navigate(sec.path)}
              className={`flex flex-col items-center justify-center transition-all duration-300 ${
                isActive ? "text-teal-400 scale-110" : "text-gray-300 hover:text-teal-400 hover:scale-105"
              }`}
            >
              {sec.icon}
              <span className="text-xs mt-1">{sec.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}