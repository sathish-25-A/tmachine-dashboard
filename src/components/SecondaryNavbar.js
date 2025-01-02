import React from 'react';

const SecondaryNavbar = () => {
  return (
    <div className="bg-gray-800 text-white flex justify-between items-center p-2">
      <div className="flex space-x-6">
        <div className="cursor-pointer hover:bg-gray-700 p-2 rounded">Overview</div>
        <div className="cursor-pointer hover:bg-gray-700 p-2 rounded">Dashboard</div>
        <div className="cursor-pointer hover:bg-gray-700 p-2 rounded">Calendar</div>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
