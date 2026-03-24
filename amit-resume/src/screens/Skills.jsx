// src/sections/Skills.jsx
import { FaBrain } from "react-icons/fa";

export default function Skills() {
  const skillsData = [
    "Warehouse Management Systems (WMS)",
    "Inventory Control & Optimization",
    "Fulfillment Tracking",
    "SOP Development",
    "Client Relationship Management",
    "Warehouse Process Optimization",
    "Cross-Departmental Coordination",
    "Operations Management",
    "Process Improvement & Cost Reduction",
    "KPI Monitoring & Reporting",
    "Team Leadership & Training",
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-6 sm:py-8">
      {/* Heading with top margin */}
      <h1 className="text-3xl sm:text-4xl font-bold text-teal-400 mt-6 sm:mt-8 mb-6 text-center border-b-2 border-teal-500 pb-2 w-fit">
        Skills
      </h1>

      {/* Container */}
      <div className="w-full max-w-4xl px-4 sm:px-0 bg-gray-800/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="bg-gray-700/50 p-3 sm:p-4 rounded-lg shadow-inner hover:shadow-teal-400
                         text-gray-200 flex items-center gap-3 transition-shadow"
            >
              {/* Left aligned icon */}
              <FaBrain className="text-teal-400 text-xl flex-shrink-0" />
              <span className="text-sm sm:text-base">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
