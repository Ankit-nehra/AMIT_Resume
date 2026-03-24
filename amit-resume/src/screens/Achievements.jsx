// src/sections/Achievements.jsx
import { FaStar } from "react-icons/fa";

export default function Achievements() {
  const achievementsData = [
    'Received "High Potential Employee (HIPO)" certificate within 6 months of joining.',
    "Successfully managed high-turnover inventory and maintained stock accuracy during peak seasons.",
    "Suggested/Implemented observations for continuous improvement in operations and SOPs.",
    "Implemented measures to reduce damages and TAT for picking and packing.",
    "Student member of editorial board for annual reports of University – DCRUST, 2023.",
    "Coordinator of management society – DCRUST, (2021-2023).",
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-6 sm:py-8 px-4 sm:px-6 md:px-8">
      
      {/* Container */}
      <div className="w-full max-w-4xl bg-gray-800/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-6 text-center border-b-2 border-teal-500 pb-2 w-fit mx-auto">
          Achievements
        </h1>

        {/* Achievement List */}
        <ul className="flex flex-col gap-4">
          {achievementsData.map((ach, idx) => (
            <li
              key={idx}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50
                         rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl hover:border-teal-400/40
                         transition-all duration-300 flex items-start gap-3 text-gray-200"
            >
              <FaStar className="text-teal-400 mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base leading-relaxed">{ach}</p>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
