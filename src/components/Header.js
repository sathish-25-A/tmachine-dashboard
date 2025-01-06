import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Importing the close icon
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigate = useNavigate();

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleSignOut = () => {
    if (window.confirm('Are you sure you want to sign out?')) {
      console.log('User signed out');
      // Implement sign-out logic here, e.g., clearing session or redirecting to login
    }
  };

  const handleCloseProfile = () => {
    setIsProfileOpen(false); // Close the profile section when the close icon is clicked
  };

  const handleNavigation = () => {
    console.log("hdjahj")
    navigate('/organization')
  }

  return (
    <header className="bg-blue-900 text-white flex justify-between items-center p-4">
      {/* Logo and Navigation */}
      <div className="flex items-center">
        <div className="text-2xl font-bold">
          <img src="T-Machine.AI_logo.png" alt="Logo" className="h-8" />
        </div>
        <nav className="ml-10">
          <ul className="flex space-x-6">
            <li className="cursor-pointer hover:text-blue-300">My Space</li>
            <li className="cursor-pointer hover:text-blue-300">Team</li>
            <li className="cursor-pointer hover:text-blue-300" onClick={handleNavigation}>Organization</li>
          </ul>
        </nav>
      </div>

      {/* Profile Picture */}
      <div className="relative">
        <img
          src="/profile-picture.jpg"
          alt="Profile"
          className="h-8 w-8 rounded-full cursor-pointer"
          onClick={handleProfileClick}
          aria-expanded={isProfileOpen}
        />
        {isProfileOpen && (
          <div className="absolute right-0 bg-white text-black shadow-lg rounded-lg mt-2 w-[400px] p-6 z-50 transition-transform duration-300 ease-in-out transform">
            {/* Close Icon */}
            <button
              onClick={handleCloseProfile}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={20} />
            </button>

            <div className="flex items-center space-x-6">
              <img
                src="/profile-picture.jpg"
                alt="Profile"
                className="h-24 w-24 rounded-full"
              />
              <div>
                <p className="font-semibold text-2xl">John Doe</p>
                <p className="text-sm text-gray-600">User ID: 12345</p>
                <p className="text-sm text-gray-600">Email: johndoe@example.com</p>
              </div>
            </div>
            <button
              className="mt-6 bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
