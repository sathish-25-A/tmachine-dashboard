import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';


const SecondaryNavbar = () => {
  const location = useLocation();


  const renderLinks = () => {
    if (location.pathname === '/leave-tracker' || location.pathname.startsWith('/leave')) {
      return (
        <div className="flex space-x-6">
          <NavLink to="/leave-summary" className="cursor-pointer hover:bg-gray-700 p-2 rounded">
            Leave Summary
          </NavLink>
          <NavLink to="/leave-balance" className="cursor-pointer hover:bg-gray-700 p-2 rounded">
            Leave Balance
          </NavLink>
        </div>
      );
    } else {
      return (
        <div className="flex space-x-6">
          <div className="cursor-pointer hover:bg-gray-700 p-2 rounded">Overview</div>
          <div className="cursor-pointer hover:bg-gray-700 p-2 rounded">Dashboard</div>
          <div className="cursor-pointer hover:bg-gray-700 p-2 rounded">Calendar</div>
        </div>
      );
    }
  };


  return (
    <div className="bg-gray-800 text-white flex justify-between items-center p-2">
      {renderLinks()}
    </div>
  );
};


export default SecondaryNavbar;