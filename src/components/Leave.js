import React from "react";
import {
  FaRegCalendarAlt,
  FaClipboardCheck,
  FaBriefcaseMedical,
  FaExclamationCircle,
  FaBaby,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Leave = () => {
  const navigate = useNavigate();

  const leaveTypes = [
    {
      name: "Compensatory Off",
      available: "0 day",
      booked: "0 day",
      icon: <FaClipboardCheck className="text-blue-500 text-2xl" />,
    },
    {
      name: "Earned Leave",
      available: "4 days",
      booked: "0 day",
      icon: <FaRegCalendarAlt className="text-green-500 text-2xl" />,
    },
    {
      name: "Sick Leave",
      available: "0 day",
      booked: "0 day",
      icon: <FaBriefcaseMedical className="text-red-500 text-2xl" />,
    },
    {
      name: "Leave Without Pay",
      available: "N/A",
      booked: "0 day",
      icon: <FaExclamationCircle className="text-yellow-500 text-2xl" />,
    },
    {
      name: "Paternity Leave",
      available: "0 day",
      booked: "0 day",
      icon: <FaBaby className="text-purple-500 text-2xl" />,
    },
  ];

  const handleAvailClick = () => {
    navigate("/apply-leave"); // Navigate to ApplyLeavePage
  };

  return (
    <div className="bg-gray-50 shadow-lg p-6 rounded-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Leave Overview</h2>

      {/* Leave List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {leaveTypes.map((leave, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
          >
            {/* Icon */}
            <div className="mb-4">{leave.icon}</div>

            {/* Leave Name */}
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              {leave.name}
            </h3>

            {/* Leave Details */}
            <div className="flex justify-between w-full text-center text-sm mb-4">
              <div className="w-1/2">
                <p className="text-gray-500">Available</p>
                <p className="font-semibold text-gray-800">{leave.available}</p>
              </div>
              <div className="w-1/2">
                <p className="text-gray-500">Booked</p>
                <p className="font-semibold text-gray-800">{leave.booked}</p>
              </div>
            </div>

            {/* Apply Leave Button */}
            <button
              onClick={handleAvailClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition w-full text-sm font-medium"
            >
              Apply Leave
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leave;
