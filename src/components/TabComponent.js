// import React, { useState } from "react";
// import { Box, Tabs, Tab, Typography } from "@mui/material";
// import EmployeeTree from "./EmployeeTree";
// import EmployeeList from "./EmployeeList";
// import OverView from "./OverView";

// const TabPanel = ({ children, value, index }) => {
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`tabpanel-${index}`}
//       aria-labelledby={`tab-${index}`}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// };

// const TabComponent = () => {
//   const [tabIndex, setTabIndex] = useState(0);

//   const handleTabChange = (event, newValue) => {
//     setTabIndex(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
//       <Tabs value={tabIndex} onChange={handleTabChange} centered>
//         <Tab label="OverView" />
//         <Tab label="Employee Tree" />
//         <Tab label="Employee List" />
//       </Tabs>

//       <TabPanel value={tabIndex} index={0}>
//         <OverView/>
//       </TabPanel>
//       <TabPanel value={tabIndex} index={1}>
//         <EmployeeTree/>
//       </TabPanel>
//       <TabPanel value={tabIndex} index={2}>
//         <EmployeeList/>
//       </TabPanel>
//     </Box>
//   );
// };

// export default TabComponent;

import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import EmployeeTree from "./EmployeeTree";
import EmployeeList from "./EmployeeList";
import ClickOrganization from "./ClickOrganization";

const TabPanel = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const TabComponent = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Sticky Tabs */}
      <Box
        sx={{
          position: "sticky", // Makes it sticky
          top: 0, // Sticks to the top of the viewport
          zIndex: 1100, // Ensures it stays above other content
          bgcolor: "background.paper", // Maintains background color
          boxShadow: "0px 2px 4px rgba(0,0,0,0.1)", // Adds subtle shadow
        }}
      >
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="OverView" />
          <Tab label="Employee Tree" />
          <Tab label="Employee List" />
        </Tabs>
      </Box>

      <TabPanel value={tabIndex} index={0}>
        <ClickOrganization />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <EmployeeTree />
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        <EmployeeList />
      </TabPanel>
    </Box>
  );
};

export default TabComponent;
