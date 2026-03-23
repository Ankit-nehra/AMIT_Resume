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
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-4xl bg-gray-800/50 backdrop-blur-xl rounded-3xl p-10 shadow-2xl">
        <h1 className="text-4xl font-bold text-teal-400 mb-10 text-center border-b border-teal-500 pb-2 w-48">
          Achievements
        </h1>

        <ul className="flex flex-col gap-4">
          {achievementsData.map((ach, idx) => (
            <li key={idx} className="bg-gray-700/50 p-4 rounded-xl shadow-inner hover:shadow-teal-400 text-gray-200 transition-shadow">
              <div className="flex items-center gap-3">
                <FaStar className="text-teal-400" />
                <span>{ach}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}