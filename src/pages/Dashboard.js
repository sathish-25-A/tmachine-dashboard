import React, { useState } from "react";
import Overview from "../components/Overview";
import DepartmentWall from "../components/DepartmentWall";
import DepartmentMembers from "../components/DepartmentMembers";
import WorkSchedule from "../components/WorkSchedule";
import Profile from "../components/Profile";
import Leave from "../components/Leave";
import Attendance from "../components/Attendance";

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState("Activities");

  const links = ["Activities", "Profile", "Leave", "Attendance"];

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // Reset to default view (Activities) when clicking the logo or Overview
  const resetToDefault = () => {
    setActiveLink("Activities");
  };

  return (
    <div className="p-4 overflow-hidden">
      {/* Two-column layout */}
      <div className="grid grid-cols-[390px_1fr] gap-4 max-w-full">
        {/* Left Column with fixed width */}
        <div className="space-y-4 overflow-hidden">
          {/* Parent scrollable container */}
          <div className="max-h-[600px] overflow-y-auto custom-scrollbar">
            <div className="grid grid-cols-1 gap-2">
              {/* Overview */}
              <div className="w-full" onClick={resetToDefault}>
                <Overview />
              </div>

              {/* Department Wall */}
              <div className="w-full">
                <DepartmentWall />
              </div>

              {/* Department Members */}
              <div className="w-full">
                <DepartmentMembers />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column with scrollable content */}
        <div className="space-y-4 overflow-hidden">
          {/* Navigation Section */}
          <div className="flex space-x-4">
            {links.map((link, index) => (
              <a
                key={index}
                href="#"
                onClick={() => handleLinkClick(link)}
                className={`flex-1 text-center py-2 px-4 rounded-lg text-gray-700 hover:text-white hover:bg-blue-500 transition-all duration-300 ease-in-out ${
                  activeLink === link ? "bg-blue-500 text-white" : ""
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Scrollable container for component rendering */}
          <div className="max-h-[600px] overflow-y-auto custom-scrollbar">
            {/* Conditional Rendering of Components */}
            {activeLink === "Activities" && <WorkSchedule />}
            {activeLink === "Profile" && <Profile />}
            {activeLink === "Leave" && <Leave />}
            {activeLink === "Attendance" && <Attendance />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
