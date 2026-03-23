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
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md"></div>

      {/* Top Status Bar */}
      <div className="flex justify-between items-center px-4 pt-4 text-gray-300 text-sm z-10 relative">
        <div className="flex items-center gap-1">
          <div className="flex gap-[2px]">
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="w-1 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-1 h-3 bg-gray-300 rounded-full"></span>
            <span className="w-1 h-4 bg-gray-300 rounded-full"></span>
          </div>
          <span className="ml-1">5G</span>
        </div>
        <span className="text-gray-200 font-medium">{time}</span>
        <div className="flex items-center gap-2">
          <div className="relative w-4 h-4">
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-300 rounded-full"></span>
            <span className="absolute bottom-1 left-1 w-2 h-[2px] bg-gray-300 rounded-full"></span>
          </div>
          <div className="flex items-center border border-gray-300 rounded-sm w-8 h-4 p-[1px]">
            <div className="bg-gray-300 h-full w-7/8 rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Center */}
      <div className="flex flex-col items-center justify-center h-full text-center z-10 relative">
        <p className="text-gray-400 text-lg mb-2">{date}</p>
        <h1 className="text-teal-400 text-8xl font-light">{time}</h1>

        <div className="mt-8 px-10 py-6 bg-white/10 backdrop-blur-lg rounded-3xl border border-gray-700 shadow-inner shadow-black/20">
          <div className="border-b border-teal-400 pb-2">
            <p className="text-2xl font-semibold text-teal-400">Amit Nehra</p>
          </div>
          <p className="text-gray-200 mt-2 text-sm">
            Senior Manager – Strategy & Operations
          </p>
        </div>
      </div>

      {/* Swipe Hint */}
      <div className="absolute bottom-16 w-full flex justify-center z-10">
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