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
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-4xl bg-gray-800/50 backdrop-blur-xl rounded-3xl p-10 shadow-2xl">
        <h1 className="text-4xl font-bold text-teal-400 mb-10 text-center border-b border-teal-500 pb-2 w-44">
          Certificates
        </h1>

        <ul className="flex flex-col gap-4">
          {certificatesData.map((cert, idx) => (
            <li key={idx} className="bg-gray-700/50 p-4 rounded-xl shadow-inner hover:shadow-teal-400 text-gray-200 transition-shadow">
              <div className="flex items-center gap-3">
                <FaGraduationCap className="text-teal-400" />
                <span>{cert}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}