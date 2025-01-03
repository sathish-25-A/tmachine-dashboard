import React, { useState } from "react";
import {
  FaPlus,
  FaMapMarkerAlt,
  FaBuilding,
  FaRegClock,
  FaRegCalendarAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Profile = () => {
  const [showAbout, setShowAbout] = useState(false); // Toggle About section

  return (
    <div className="bg-gray-50  rounded-lg shadow-lg max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Profile Information</h2>

      {/* Scrollable Profile Information Container */}
      <div className="overflow-y-auto h-[500px] space-y-6">
        {/* Basic Details Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-4">Basic Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-500 mr-2" />
              <p>
                <strong>Location:</strong> Research & Development Office
              </p>
            </div>
            <div className="flex items-center">
              <FaBuilding className="text-green-500 mr-2" />
              <p>
                <strong>Department:</strong> Software Engineering
              </p>
            </div>
            <div className="flex items-center">
              <FaRegClock className="text-yellow-500 mr-2" />
              <p>
                <strong>Shift:</strong> Day
              </p>
            </div>
            <div className="flex items-center">
              <FaRegCalendarAlt className="text-purple-500 mr-2" />
              <p>
                <strong>Time zone:</strong> (GMT+05:30)
              </p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-red-500 mr-2" />
              <p>
                <strong>Email ID:</strong> sathish.as@tmachinesoftware.com
              </p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-orange-500 mr-2" />
              <p>
                <strong>Mobile Phone:</strong> 91-6382524059
              </p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-orange-500 mr-2" />
              <p>
                <strong>Work Phone:</strong> 91-6382524059
              </p>
            </div>
          </div>

          {/* About Section */}
          <div
            className="flex items-center cursor-pointer mt-6"
            onClick={() => setShowAbout(!showAbout)}
          >
            <FaPlus className="text-gray-500 mr-2" />
            <p className="text-blue-600 font-semibold">About</p>
          </div>
          {showAbout && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md">
              <p>About Me: [Add About]</p>
            </div>
          )}
        </div>

        {/* Organization Structure Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-4">Organization Structure</h3>
          <div>
            <p>
              <strong>Department:</strong> Software Engineering
            </p>
          </div>
        </div>

        {/* Basic Information Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-4">Basic Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            <p>
              <strong>Employee ID:</strong> TM-240815
            </p>
            <p>
              <strong>First Name:</strong> Sathish
            </p>
            <p>
              <strong>Last Name:</strong> Ashok
            </p>
            <p>
              <strong>Nick Name:</strong> -
            </p>
            <p>
              <strong>Email Address:</strong> sathish.as@tmachinesoftware.com
            </p>
          </div>
        </div>

        {/* Work Information Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-4">Work Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <p>
              <strong>Department:</strong> Software Engineering
            </p>
            <p>
              <strong>Location:</strong> Research & Development Office
            </p>
            <p>
              <strong>Designation:</strong> Associate Software Engineer
            </p>
            <p>
              <strong>Zoho Role:</strong> Team member
            </p>
            <p>
              <strong>Employment Type:</strong> Permanent
            </p>
            <p>
              <strong>Employee Status:</strong> Active
            </p>
            <p>
              <strong>Source of Hire:</strong> -
            </p>
            <p>
              <strong>Date of Joining:</strong> 19-Aug-2024
            </p>
          </div>
        </div>

        {/* Hierarchy Information Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-4">Hierarchy Information</h3>
          <div>
            <p>
              <strong>Reporting Manager:</strong> Anand Sivanandam TM-230401
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
