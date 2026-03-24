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
    <div className="w-full 
                    bg-gray-800/40 backdrop-blur-xl 
                    rounded-2xl sm:rounded-3xl 
                    p-4 sm:p-6 md:p-8 
                    shadow-xl">

      {/* Name & Role */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-teal-400">
          {profileData.name}
        </h1>
        <p className="text-teal-200 text-sm sm:text-lg mt-2">
          {profileData.role}
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 text-gray-300 text-sm sm:text-base">
        
        <div className="flex items-start gap-2 sm:gap-3">
          <FaMapMarkerAlt className="text-teal-400 mt-1" />
          <span>Current: {profileData.currentAddress}</span>
        </div>

        <div className="flex items-start gap-2 sm:gap-3">
          <FaMapMarkerAlt className="text-teal-400 mt-1" />
          <span>Permanent: {profileData.permanentAddress}</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <FaPhone className="text-teal-400" />
          <span>{profileData.phone}</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <FaEnvelope className="text-teal-400" />
          <span className="break-all">{profileData.email}</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 sm:col-span-2">
          <FaLinkedin className="text-teal-400" />
          <a
            href={`https://${profileData.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="underline text-teal-300 text-sm sm:text-base"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-3 border-b border-teal-500 w-fit pb-1">
          Professional Summary
        </h2>
        <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
          {profileData.professionalSummary}
        </p>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-4 border-b border-teal-500 w-fit pb-1">
          Education
        </h2>

        <div className="relative border-l-2 border-teal-500 pl-4 sm:pl-6">
          {profileData.education.map((edu, idx) => (
            <div key={idx} className="mb-6 relative">
              
              <div className="absolute -left-[7px] top-1 w-2.5 h-2.5 bg-teal-400 rounded-full border-2 border-gray-800"></div>

              <p className="text-gray-200 font-medium text-sm sm:text-lg">
                {edu.degree}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                {edu.college}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Year: {edu.year}{" "}
                {edu.cgpa
                  ? `| CGPA: ${edu.cgpa}`
                  : edu.percentage
                  ? `| ${edu.percentage}`
                  : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
