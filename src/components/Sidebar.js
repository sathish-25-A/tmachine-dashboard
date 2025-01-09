import React from "react";
import { FaHome, FaFileAlt, FaRegClock, FaCalendar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", icon: <FaHome />, path: "/overview" },
    { name: "Leave Tracker", icon: <FaFileAlt />, path: "/" },
    { name: "Time Tracker", icon: <FaRegClock />, path: "/time-tracker" },
    { name: "Attendance", icon: <FaCalendar />, path: "/attendance" },
  ];

  return (
    <div className="bg-gray-800 text-white h-screen w-[5rem] flex flex-col items-center py-4">
      <ul className="space-y-16">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => navigate(item.path)}
            className={
              "flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer hover:bg-gray-700"
            }
          >
            <span className="text-2xl mb-2">{item.icon}</span>
            <span className="text-xs text-center">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
