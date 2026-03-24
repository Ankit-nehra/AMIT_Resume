// src/sections/Experience.jsx
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  const experienceData = [
    {
      role: "Store Manager",
      company: "Blinkit",
      location: "Haryana, Panipat",
      period: "01/2026 – Present",
      description: [
        "Promoted from Assistant Store Manager to Store Manager.",
        "Led end-to-end store operations including inbound, inventory control, picking, packing, and last-mile dispatch, ensuring consistent SLA adherence.",
        "Reported to upper management about store SLAs and monthly matrix.",
        "Managed a team of pickers/putters/auditors and last-mile riders with shift-wise planning and productivity tracking.",
        "Monitored and improved KPIs: Order Fill Rate, Item Availability %, Shrinkage %, Wastage %, Customer Complaints, Hourly Throughput.",
        "Ensured strict adherence to SOPs, safety, hygiene, and compliance standards; cleared internal/external audits with minimal deviations.",
        "Led team performance management including hiring, training, mentoring, and disciplinary actions.",
      ],
    },
    {
      role: "Assistant Store Manager",
      company: "Blinkit",
      location: "Haryana, Panipat",
      period: "04/2025 – 12/2025",
      description: [
        "Supervised daily store operations: inbound, picking, packing, dispatch.",
        "Managed team of pickers and riders with shift-wise manpower planning.",
        "Maintained inventory levels and stock accuracy through audits and FIFO/FEFO practices.",
        "Ensured adherence to SOPs for receiving, putaway, and order fulfillment.",
        "Monitored KPIs: order fill rate, shrinkage, item availability, hourly throughput.",
        "Handled store-level escalations and coordinated with supply chain, category, and central ops teams.",
        "Implemented safety, hygiene, and compliance protocols; trained and mentored staff.",
      ],
    },
    {
      role: "Operations Executive",
      company: "AAJ Supply Chain Management Pvt. Ltd.",
      location: "Ghaziabad, Uttar Pradesh",
      period: "05/2023 – 04/2025",
      description: [
        "Oversaw daily operations across 5 warehouse departments: Inward, Inventory, Picking & Packing, Dispatch, Sales Return.",
        "Maintained coordination with external stakeholders and clients.",
        "Controlled inventory shortages and maintained fulfillment via regular counts and inward cross-checks.",
        "Managed operations (POC) of Cambridge University Press for 1.8 years, along with 3 other non-publishing clients.",
        "Tracked and shared departmental reports.",
        "Recommended process improvements to reduce TAT and operational costs.",
        "Collaborated with software team to enhance WMS functionalities for picking and packing.",
        "Implemented and improved SOPs to improve order accuracy and minimize damages/errors.",
        "Coordinated dispatch using TMS for local and outstation deliveries.",
        "Prepared daily MIS reports and monthly billing for clients.",
        "Trained and mentored new hires to ensure SOP adherence.",
      ],
    },
    {
      role: "Subject Matter Expert - Operations Management",
      company: "Chegg (Freelance)",
      location: "Remote",
      period: "02/2023 – 05/2023",
      description: [
        "Assisted students in understanding key concepts in Operations Management.",
        "Solved complex queries and case studies ensuring accurate and practical solutions.",
        "Provided detailed, step-by-step solutions to enhance students' learning and problem-solving skills.",
      ],
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-6 sm:py-8">

      {/* Top margin only for heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-teal-400 mt-6 sm:mt-8 mb-6 text-center border-b-2 border-teal-500 pb-2 w-fit">
        Experience
      </h1>

      {/* Experience Cards: no outer container, full width */}
      <div className="flex flex-col gap-6 w-full max-w-4xl px-4 sm:px-0">
        {experienceData.map((exp, idx) => (
          <div
            key={idx}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl hover:border-teal-400/40 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1 sm:gap-0">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-200 flex items-center gap-2">
                <FaBriefcase className="text-teal-400" /> {exp.role}
              </h2>
              <span className="flex items-center text-gray-400 gap-2">
                <FaCalendarAlt className="text-teal-400" /> {exp.period}
              </span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-2">{exp.company} | {exp.location}</p>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-sm sm:text-base">{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
