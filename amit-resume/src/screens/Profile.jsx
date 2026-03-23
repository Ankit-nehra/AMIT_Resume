// src/sections/Profile.jsx
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Profile() {
  const profileData = {
    name: "Amit Nehra",
    role: "Operations Executive",
    currentAddress: "Haryana, Panipat",
    permanentAddress: "Panipat, Haryana",
    phone: "8814089451",
    email: "Nehraa728@gmail.com",
    linkedin: "linkedin.com/in/amitnehra",
    professionalSummary: `Dedicated Operations Executive with over 2 years of experience in operations management,
    adept at managing and optimizing warehousing operations, addressing client requirements, and streamlining
    processes to improve efficiency. Expertise in WMS, high-turnover inventory management, and leading
    cross-functional teams to achieve organizational goals.`,
    education: [
      {
        degree: "Master in Business Administration",
        college: "D.C.R.U.S.T., Murthal",
        year: 2023,
        cgpa: "7.2 (CGPA)",
      },
      {
        degree: "Bachelor of Commerce",
        college: "Arya P.G. College, Panipat",
        year: 2020,
        percentage: "69.25%",
      },
    ],
  };

  return (
    <div className="bg-gray-800/40 backdrop-blur-xl rounded-3xl p-10 shadow-2xl max-w-4xl mx-auto">
      {/* Name & Role */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-teal-400">{profileData.name}</h1>
        <p className="text-teal-200 text-xl mt-2 tracking-wide">{profileData.role}</p>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-gray-300">
        <div className="flex items-center gap-3 hover:text-teal-400 transition-colors">
          <FaMapMarkerAlt className="text-teal-400" />
          <span>Current: {profileData.currentAddress}</span>
        </div>
        <div className="flex items-center gap-3 hover:text-teal-400 transition-colors">
          <FaMapMarkerAlt className="text-teal-400" />
          <span>Permanent: {profileData.permanentAddress}</span>
        </div>
        <div className="flex items-center gap-3 hover:text-teal-400 transition-colors">
          <FaPhone className="text-teal-400" />
          <span>{profileData.phone}</span>
        </div>
        <div className="flex items-center gap-3 hover:text-teal-400 transition-colors">
          <FaEnvelope className="text-teal-400" />
          <span>{profileData.email}</span>
        </div>
        <div className="flex items-center gap-3 md:col-span-2 justify-center md:justify-start hover:text-teal-400 transition-colors">
          <FaLinkedin className="text-teal-400" />
          <a
            href={`https://${profileData.linkedin}`}
            target="_blank"
            className="underline text-teal-300 hover:text-teal-400 transition-colors"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-teal-400 mb-4 border-b border-teal-500 w-40 pb-1">
          Professional Summary
        </h2>
        <p className="text-gray-200 leading-relaxed text-lg">{profileData.professionalSummary}</p>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-3xl font-semibold text-teal-400 mb-6 border-b border-teal-500 w-32 pb-1">
          Education
        </h2>
        <div className="relative border-l-2 border-teal-500 pl-6">
          {profileData.education.map((edu, idx) => (
            <div key={idx} className="mb-8 relative">
              <div className="absolute -left-4 top-1 w-3 h-3 bg-teal-400 rounded-full border-2 border-gray-800"></div>
              <p className="text-gray-200 font-medium text-lg">{edu.degree}</p>
              <p className="text-gray-400 text-sm">{edu.college}</p>
              <p className="text-gray-400 text-sm mt-1">
                Year: {edu.year} {edu.cgpa ? `| CGPA: ${edu.cgpa}` : edu.percentage ? `| ${edu.percentage}` : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}