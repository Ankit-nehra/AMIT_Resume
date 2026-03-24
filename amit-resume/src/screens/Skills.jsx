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
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-6 sm:py-8 px-4 sm:px-6 md:px-8">

      {/* Container */}
      <div className="w-full max-w-4xl bg-gray-800/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-6 text-center border-b-2 border-teal-500 pb-2 w-fit mx-auto">
          Skills
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50
                         rounded-xl p-3 sm:p-4 shadow-md hover:shadow-xl hover:border-teal-400/40
                         transition-all duration-300 text-gray-200 font-medium flex items-center gap-3"
            >
              <FaBrain className="text-teal-400 text-lg flex-shrink-0" />
              <span className="text-sm sm:text-base">{skill}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
