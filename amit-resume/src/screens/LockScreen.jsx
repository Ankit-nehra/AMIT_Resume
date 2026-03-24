// src/screens/LockScreen.jsx
import { useEffect, useState } from "react";

export default function LockScreen({ onUnlock }) {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [unlocking, setUnlocking] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      setTime(`${h}:${m}`);
      setDate(
        now.toLocaleDateString([], {
          weekday: "long",
          month: "long",
          day: "numeric",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  let startY = 0;
  const handleStart = (y) => (startY = y);
  const handleEnd = (y) => {
    if (startY - y > 80) {
      setUnlocking(true);
      setTimeout(onUnlock, 500);
    }
  };

  return (
    <div
      className={`h-screen relative overflow-hidden text-white transition-transform duration-500 ${
        unlocking ? "-translate-y-full" : ""
      }`}
      onTouchStart={(e) => handleStart(e.touches[0].clientY)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientY)}
      onMouseDown={(e) => handleStart(e.clientY)}
      onMouseUp={(e) => handleEnd(e.clientY)}
      style={{
        background: "linear-gradient(135deg, #1a1a1f, #23232b, #1a1a1f)",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md"></div>

      {/* Center content */}
      <div className="flex flex-col items-center pt-24 sm:pt-28 px-6 text-center z-10 relative">
        {/* Profile Image */}
        <img
          src="/profile.enc" // Place your profile image in public folder
          alt="Profile"
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-teal-400 shadow-lg mb-4 object-cover"
        />

        <p className="text-gray-400 text-lg mb-2">{date}</p>
        <h1 className="text-teal-400 text-8xl font-light leading-none">{time}</h1>

        {/* User info card */}
        <div className="mt-6 px-8 py-6 bg-white/10 backdrop-blur-lg rounded-3xl border border-gray-700 shadow-inner shadow-black/20 w-full max-w-sm transition-transform duration-500 transform hover:-translate-y-1">
          <div className="border-b border-teal-400 pb-2">
            <p className="text-2xl font-semibold text-teal-400">Amit Nehra</p>
          </div>
          <p className="text-gray-200 mt-2 text-sm">
            Senior Manager – Strategy & Operations
          </p>
        </div>
      </div>

      {/* Swipe hint */}
      <div className="absolute bottom-21 w-full flex justify-center z-10">
        <div className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full flex items-center gap-2 animate-bounce">
          <span className="text-gray-200 text-sm">Swipe up</span>
          <svg
            className="w-4 h-4 text-gray-200"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
