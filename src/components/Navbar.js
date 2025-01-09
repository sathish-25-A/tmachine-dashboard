import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';


const Navbar = () => {
  const location = useLocation();


  const renderLinks = () => {
    if (location.pathname === '/leave-tracker' || location.pathname.startsWith('/leave')) {
      return (
        <nav className="ml-10">
          <ul className="flex space-x-6">
            <li>
              <NavLink to="/leave-summary" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}>
                My Data
              </NavLink>
            </li>
            <li>
              <NavLink to="/leave-requests" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}>
                Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/leave-holiday-dashboard" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}>
                Holiday
              </NavLink>
            </li>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav className="ml-10">
          <ul className="flex space-x-6">
            <li>
              <NavLink to="/my-space" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}>
                My Space
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}>
                Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/organization" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}>
                Organization
              </NavLink>
            </li>
          </ul>
        </nav>
      );
    }
  };


  return (
    <div className="bg-blue-900 text-white flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="text-2xl font-bold">
          <img src="/path/to/logo.png" alt="Logo" className="h-8" /> {/* Replace with actual logo path */}
        </div>
        {renderLinks()}
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded bg-gray-100 text-black pl-10"
          />
          <FaSearch className="absolute left-3 top-2 text-gray-600" />
        </div>
        <div className="text-xl cursor-pointer">
          <FaBell />
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src="/path/to/profile-picture.jpg" alt="Profile" className="h-8 w-8 rounded-full" />
          <FaUserCircle className="text-2xl" />
        </div>
      </div>
    </div>
  );
};


export default Navbar;