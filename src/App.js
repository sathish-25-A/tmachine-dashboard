import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from '../src/pages/Dashboard';
import Footer from './components/Footer';
import SecondaryNavbar from './components/SecondaryNavbar';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Fixed Secondary Navbar */}
      <SecondaryNavbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Fixed Sidebar */}
        <Sidebar />

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
          <Dashboard />
        </div>
      </div>

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
};

export default App;
