// src/sections/Skills.jsx
import { FaTools } from "react-icons/fa";

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
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-4xl bg-gray-800/50 backdrop-blur-xl rounded-3xl p-10 shadow-2xl">
        <h1 className="text-4xl font-bold text-teal-400 mb-10 text-center border-b border-teal-500 pb-2 w-32">
          Skills
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="bg-gray-700/50 p-4 rounded-lg shadow-inner hover:shadow-teal-400 text-gray-200 text-center font-medium transition-shadow"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}