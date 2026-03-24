import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { FaUser, FaBriefcase, FaTools, FaStar, FaGraduationCap } from "react-icons/fa";
import { useSwipeable } from "react-swipeable"; // <-- added

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const sections = [
    { path: "/profile", title: "Profile", icon: <FaUser /> },
    { path: "/experience", title: "Experience", icon: <FaBriefcase /> },
    { path: "/skills", title: "Skills", icon: <FaTools /> },
    { path: "/achievements", title: "Achievements", icon: <FaStar /> },
    { path: "/certificates", title: "Certificates", icon: <FaGraduationCap /> },
  ];

  const currentIndex = sections.findIndex((sec) => sec.path === location.pathname);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < sections.length - 1) {
        navigate(sections[currentIndex + 1].path);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        navigate(sections[currentIndex - 1].path);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // optional: allows mouse drag swipe for desktop
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      
      {/* Page Content */}
      <div
        {...handlers} // <-- attach swipe events here
        className="flex-1 w-full 
                   px-3 sm:px-4 md:px-6 
                   py-6 sm:py-8 
                   pb-28 
                   flex flex-col gap-8 sm:gap-10"
      >
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 
                      w-[96%] max-w-3xl 
                      rounded-2xl sm:rounded-full 
                      bg-white/10 backdrop-blur-md shadow-xl 
                      flex justify-between items-center 
                      px-2 sm:px-4 py-2 
                      z-50">

        {sections.map((sec) => {
          const isActive = location.pathname === sec.path;

          return (
            <button
              key={sec.path}
              onClick={() => navigate(sec.path)}
              className={`flex flex-col items-center justify-center flex-1 
                          py-1 
                          transition-all duration-300
                          ${
                            isActive
                              ? "text-teal-400 scale-105"
                              : "text-gray-300 hover:text-teal-400"
                          }`}
            >
              <div className="text-base sm:text-lg md:text-xl">
                {sec.icon}
              </div>
              <span className="text-[9px] sm:text-xs mt-1">
                {sec.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
