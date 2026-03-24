// src/sections/Certificates.jsx
import { FaGraduationCap } from "react-icons/fa";

export default function Certificates() {
  const certificatesData = [
    "PowerBI Basics Certification – Skill Course",
    "Export Management – Arya P.G. College",
    "Microsoft Excel – Udemy",
    "HIPO Certificate – AAJ Supply Chain Management Pvt. Ltd.",
    "Master Course in Logistics and Supply Chain Management – Udemy",
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-6 sm:py-8 px-4 sm:px-6 md:px-8">

      {/* Container */}
      <div className="w-full max-w-4xl bg-gray-800/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-6 text-center border-b-2 border-teal-500 pb-2 w-fit mx-auto">
          Certificates
        </h1>

        {/* Certificates List */}
        <ul className="flex flex-col gap-4">
          {certificatesData.map((cert, idx) => (
            <li
              key={idx}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50
                         rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl hover:border-teal-400/40
                         transition-all duration-300 flex items-center gap-3 text-gray-200"
            >
              <FaGraduationCap className="text-teal-400 text-lg flex-shrink-0" />
              <span className="text-sm sm:text-base">{cert}</span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
