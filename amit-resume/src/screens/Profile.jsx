import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function Profile() {
  const timelineRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const visible = Math.min(
        Math.max(windowHeight - rect.top, 0),
        rect.height
      );

      setHeight(visible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="w-full bg-gray-800/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl">

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-teal-400">
          {profileData.name}
        </h1>
        <p className="text-teal-200 text-sm sm:text-lg mt-2">
          {profileData.role}
        </p>
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-gray-300 text-sm sm:text-base">

        <div className="flex items-start gap-2">
          <FaMapMarkerAlt className="text-teal-400 mt-1" />
          <span>Current: {profileData.currentAddress}</span>
        </div>

        <div className="flex items-start gap-2">
          <FaMapMarkerAlt className="text-teal-400 mt-1" />
          <span>Permanent: {profileData.permanentAddress}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaPhone className="text-teal-400" />
          <span>{profileData.phone}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaEnvelope className="text-teal-400" />
          <span className="break-all">{profileData.email}</span>
        </div>

        <div className="flex items-center gap-2 sm:col-span-2">
          <FaLinkedin className="text-teal-400" />
          <a
            href={`https://${profileData.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="underline text-teal-300"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-4 border-b-2 border-teal-500 w-fit pb-1">
          Professional Summary
        </h2>
        <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
          {profileData.professionalSummary}
        </p>
      </div>

      {/* Education Timeline */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-6 border-b-2 border-teal-500 w-fit pb-1">
          Education
        </h2>

        <div className="relative flex gap-6" ref={timelineRef}>

{/* Static line */}
<div className="absolute left-[10px] top-0 w-[2px] h-full bg-gray-700"></div>

{/* Animated line */}
<div
  className="absolute left-[10px] top-0 w-[2px] bg-teal-400 transition-all duration-300"
  style={{ height: `${height}px` }}
></div>

          {/* Content */}
          <div className="flex flex-col gap-8 w-full">
            {profileData.education.map((edu, idx) => (
              <div key={idx} className="flex items-start gap-4">

                {/* Year badge */}
<div className="min-w-[60px] text-center">
  <div className="bg-teal-500/20 backdrop-blur-sm border border-teal-400/50 
                  text-teal-300 text-xs sm:text-sm font-semibold 
                  px-3 py-1 rounded-xl 
                  shadow-sm hover:shadow-md hover:bg-teal-500/30 
                  transition-all duration-300">
    {edu.year}
  </div>
</div>

                {/* Card */}
                <div className="flex-1 bg-gradient-to-br from-gray-900/60 to-gray-800/40 
                                border border-gray-700/40 rounded-xl p-4 sm:p-6 
                                shadow-md hover:shadow-xl hover:border-teal-400/40 transition-all">

                  <p className="text-gray-100 font-semibold text-base sm:text-lg">
                    {edu.degree}
                  </p>

                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    {edu.college}
                  </p>

                  <div className="h-px bg-gray-700/50 my-3"></div>

                  <p className="text-gray-400 text-xs sm:text-sm">
                    {edu.cgpa
                      ? `CGPA: ${edu.cgpa}`
                      : edu.percentage
                      ? edu.percentage
                      : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
