import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import SecondaryNavbar from './components/SecondaryNavbar';

const App = () => {
  const [activePage, setActivePage] = useState('overview'); // Set default to 'overview'

  const handleLogoClick = () => {
    setActivePage('overview'); // When logo is clicked, set to Overview
  };

  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Fixed Header with Logo */}
        <Header handleLogoClick={handleLogoClick} /> {/* Pass the handler to the Header component */}

        {/* Fixed Secondary Navbar */}
        <SecondaryNavbar />

        <div className="flex flex-1 overflow-hidden">
          {/* Fixed Sidebar */}
          <Sidebar />

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
            <Dashboard activePage={activePage} />
          </div>
        </div>

        {/* Fixed Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
