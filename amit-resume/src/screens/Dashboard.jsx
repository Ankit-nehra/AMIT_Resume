import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { FaUser, FaBriefcase, FaTools, FaStar, FaGraduationCap } from "react-icons/fa";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const sections = [
    { path: "/profile", title: "Profile", icon: <FaUser className="text-lg sm:text-xl md:text-2xl" /> },
    { path: "/experience", title: "Experience", icon: <FaBriefcase className="text-lg sm:text-xl md:text-2xl" /> },
    { path: "/skills", title: "Skills", icon: <FaTools className="text-lg sm:text-xl md:text-2xl" /> },
    { path: "/achievements", title: "Achievements", icon: <FaStar className="text-lg sm:text-xl md:text-2xl" /> },
    { path: "/certificates", title: "Certificates", icon: <FaGraduationCap className="text-lg sm:text-xl md:text-2xl" /> },
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col">
      
      {/* Page Content */}
      <div className="flex-1 w-full max-w-4xl mx-auto 
                      px-4 sm:px-6 md:px-8 
                      py-8 sm:py-10 md:py-12 
                      pb-28 sm:pb-32 
                      flex flex-col gap-10 sm:gap-12 md:gap-16">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 
                      w-[95%] sm:w-11/12 max-w-3xl 
                      rounded-2xl sm:rounded-full 
                      bg-white/10 backdrop-blur-md shadow-xl 
                      flex justify-between items-center 
                      px-3 sm:px-6 py-2 sm:py-3 
                      z-50">
        
        {sections.map((sec) => {
          const isActive = location.pathname === sec.path;

          return (
            <button
              key={sec.path}
              onClick={() => navigate(sec.path)}
              className={`flex flex-col items-center justify-center flex-1 
                          transition-all duration-300
                          ${
                            isActive
                              ? "text-teal-400 scale-105 sm:scale-110"
                              : "text-gray-300 hover:text-teal-400"
                          }`}
            >
              {sec.icon}
              <span className="text-[10px] sm:text-xs mt-1 truncate">
                {sec.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
