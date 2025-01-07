import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import DynamicSecondaryNavbar from "./components/DynamicSecondaryNavbar";
import Dashboard from "./pages/Dashboard";
import TeamSpaceDashboard from "./pages/TeamSpaceDashboard";
import DepartmentDashboard from "./pages/DepartmentDashboard";
import PeersDashboard from "./pages/PeersDashboard";


const App = () => {
  // State for navigation and active sections
  const [activePage, setActivePage] = useState("overview"); // Default page
  const [activeSection, setActiveSection] = useState("mySpace"); // Default section
  const [activeSubsection, setActiveSubsection] = useState(null); // Subsection for 'team'

  // Handle logo click to reset navigation
  const handleLogoClick = () => {
    setActivePage("overview");
    setActiveSection("mySpace");
    setActiveSubsection(null);
  };

  return (
    <Router>
      <div className="flex flex-col h-screen">
        
        
        {/* Dynamic Secondary Navbar */}
        <DynamicSecondaryNavbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          activeSubsection={activeSubsection}
          setActiveSubsection={setActiveSubsection}
        />

        <div className="flex flex-1 overflow-hidden">
          {/* Fixed Sidebar */}
          <Sidebar />

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
            {/* Conditional Rendering Based on Section and Subsection */}
            {activeSection === "mySpace" && <Dashboard activePage={activePage} />}
            {activeSection === "team" && activeSubsection === "Team Space" && (
              <TeamSpaceDashboard />
            )}
            {activeSection === "team" && activeSubsection === "Department" && (
              <DepartmentDashboard />
            )}
            {activeSection === "team" && activeSubsection === "Peers" && (
              <PeersDashboard />
            )}
            {activeSection === "organization" && <Dashboard />}
          </div>
        </div>

        {/* Fixed Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
