import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import SecondaryNavbar from './components/SecondaryNavbar';
import TabComponent from './components/TabComponent'

const App = () => {
  const [activePage, setActivePage] = useState('overview'); // Set default to 'overview'

  const handleLogoClick = () => {
    setActivePage('overview'); // When logo is clicked, set to Overview
  };

  return (
    <>
    <Router>
      <div className="flex flex-col h-screen">
        <Header handleLogoClick={handleLogoClick} />

        {/* <SecondaryNavbar /> */}

        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <Routes>
         <Route path="/" element={<Dashboard activePage={activePage} />} />
         <Route path="/organization" element={<TabComponent/>} />
         </Routes>
        </div>
      </div>
    </Router>
    <Footer />
  </>

  );
};

export default App;
