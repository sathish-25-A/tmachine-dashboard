// // // // import React from 'react';
// // // // // import { employees } from '../data/employees';
// // // // import { employees } from './data/employees';

// // // // const EmployeeTree = () => {
// // // //   const buildTree = (parentId) => {
// // // //     const children = employees.filter((emp) => emp.reportsTo === parentId);

// // // //     if (children.length === 0) return null;

// // // //     return (
// // // //       <ul className="ml-4 border-l-2 border-gray-300 pl-4">
// // // //         {children.map((child) => (
// // // //           <li key={child.id} className="mb-4">
// // // //             <div className="p-2 bg-blue-100 rounded-md shadow-md">
// // // //               <p className="font-bold">{child.name}</p>
// // // //               <p className="text-sm text-gray-700">{child.position}</p>
// // // //               <p className="text-xs text-gray-500">{child.department}</p>
// // // //             </div>
// // // //             {buildTree(child.id)}
// // // //           </li>
// // // //         ))}
// // // //       </ul>
// // // //     );
// // // //   };

// // // //   return (
// // // //     <div className="p-4">
// // // //       <h2 className="text-xl font-bold mb-4">Employee Tree</h2>
// // // //       {buildTree(null)}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default EmployeeTree;

// // // import React from "react";
// // // import Tree from "react-d3-tree";
// // // import employeeData from "./data/employees";

// // // const EmployeeTree = ( ) => {
// // //   const containerStyles = {
// // //     width: "100%",
// // //     height: "100vh",
// // //   };

// // //   return (
// // //     <div style={containerStyles}>
// // //       <Tree
// // //         data={employeeData}
// // //         orientation="horizontal"
// // //         translate={{ x: 300, y: 300 }}
// // //         nodeSize={{ x: 200, y: 100 }}
// // //         pathFunc="elbow"
// // //         styles={{
// // //           nodes: {
// // //             node: {
// // //               circle: { fill: "#007BFF" },
// // //               name: { fontSize: "14px", fontWeight: "bold" },
// // //               attributes: { fontSize: "12px", fontStyle: "italic" },
// // //             },
// // //             leafNode: {
// // //               circle: { fill: "#28A745" },
// // //             },
// // //           },
// // //         }}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default EmployeeTree;

// // import React from "react";
// // import Tree from "react-d3-tree";

// // // Example hierarchical data for employees
// // const employeeData = {
// //   name: "CEO",
// //   attributes: { Department: "Management" },
// //   children: [
// //     {
// //       name: "VP of Engineering",
// //       attributes: { Department: "Engineering" },
// //       children: [
// //         {
// //           name: "Engineering Manager 1",
// //           attributes: { Department: "Development" },
// //           children: [
// //             { name: "Developer 1", attributes: { Department: "Frontend" } },
// //             { name: "Developer 2", attributes: { Department: "Backend" } },
// //           ],
// //         },
// //         {
// //           name: "Engineering Manager 2",
// //           attributes: { Department: "QA" },
// //           children: [{ name: "QA Tester 1", attributes: { Department: "QA" } }],
// //         },
// //       ],
// //     },
// //     {
// //       name: "VP of Sales",
// //       attributes: { Department: "Sales" },
// //       children: [
// //         {
// //           name: "Sales Manager 1",
// //           attributes: { Department: "Domestic Sales" },
// //         },
// //         {
// //           name: "Sales Manager 2",
// //           attributes: { Department: "International Sales" },
// //         },
// //       ],
// //     },
// //   ],
// // };

// // // Custom render function for nodes (replaces circles with boxes)
// // const renderCustomNode = ({ nodeDatum, toggleNode }) => (
// //   <foreignObject width={200} height={100} x={-100} y={-50}>
// //     <div
// //       style={{
// //         border: "1px solid #007BFF",
// //         borderRadius: "10px",
// //         backgroundColor: "#F0F8FF",
// //         padding: "10px",
// //         textAlign: "center",
// //         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
// //         cursor: "pointer",
// //       }}
// //       onClick={toggleNode}
// //     >
// //       <div style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>
// //         {nodeDatum.name}
// //       </div>
// //       {nodeDatum.attributes && (
// //         <div style={{ fontSize: "12px", color: "#555" }}>
// //           Department: {nodeDatum.attributes.Department}
// //         </div>
// //       )}
// //     </div>
// //   </foreignObject>
// // );

// // const EmployeeTree = () => {
// //   const containerStyles = {
// //     width: "100%",
// //     height: "100vh",
// //   };

// //   return (
// //     <div style={containerStyles}>
// //       <Tree
// //         data={employeeData}
// //         orientation="horizontal" // Tree grows horizontally
// //         translate={{ x: 100, y: 300 }} // Adjust position
// //         nodeSize={{ x: 300, y: 150 }} // Spacing for boxes
// //         pathFunc="straight" // Straight lines for connections
// //         renderCustomNodeElement={renderCustomNode} // Use custom box nodes
// //       />
// //     </div>
// //   );
// // };

// // export default EmployeeTree;

// import React from "react";
// import Tree from "react-d3-tree";

// // Example hierarchical employee data
// const employeeData = {
//   name: "CEO",
//   attributes: { Department: "Management" },
//   children: [
//     {
//       name: "VP of Engineering",
//       attributes: { Department: "Engineering" },
//       children: [
//         {
//           name: "Engineering Manager 1",
//           attributes: { Department: "Development" },
//           children: [
//             { name: "Developer 1", attributes: { Department: "Frontend" } },
//             { name: "Developer 2", attributes: { Department: "Backend" } },
//           ],
//         },
//         {
//           name: "Engineering Manager 2",
//           attributes: { Department: "QA" },
//           children: [{ name: "QA Tester 1", attributes: { Department: "QA" } }],
//         },
//       ],
//     },
//     {
//       name: "VP of Sales",
//       attributes: { Department: "Sales" },
//       children: [
//         {
//           name: "Sales Manager 1",
//           attributes: { Department: "Domestic Sales" },
//         },
//         {
//           name: "Sales Manager 2",
//           attributes: { Department: "International Sales" },
//         },
//       ],
//     },
//   ],
// };

// // Custom render function for nodes (replaces circles with boxes)
// const renderCustomNode = ({ nodeDatum, toggleNode }) => (
//   <foreignObject width={200} height={100} x={-100} y={-50}>
//     <div
//       style={{
//         border: "1px solid #007BFF",
//         borderRadius: "10px",
//         backgroundColor: "#F0F8FF",
//         padding: "10px",
//         textAlign: "center",
//         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//         cursor: "pointer",
//       }}
//       onClick={toggleNode}
//     >
//       <div style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>
//         {nodeDatum.name}
//       </div>
//       {nodeDatum.attributes && (
//         <div style={{ fontSize: "12px", color: "#555" }}>
//           Department: {nodeDatum.attributes.Department}
//         </div>
//       )}
//     </div>
//   </foreignObject>
// );

// const EmployeeTree = () => {
//   const containerStyles = {
//     width: "100%",
//     height: "100vh",
//   };

//   return (
//     <div style={containerStyles}>
//       <Tree
//         data={employeeData}
//         orientation="vertical" // Tree grows vertically for row-column alignment
//         translate={{ x: 500, y: 100 }} // Adjust position
//         nodeSize={{ x: 300, y: 150 }} // Spacing for boxes
//         pathFunc="straight" // Straight lines for connections
//         renderCustomNodeElement={renderCustomNode} // Use custom box nodes
//       />
//     </div>
//   );
// };

// export default EmployeeTree;

import React from "react";

const EmployeeTree = () => {
  // Employee data
  const employeeData = [
    {
      name: "Sylvia Prince",
      designation: "Head - HR",
      profilePic: "https://via.placeholder.com/48",
      isSenior: true,
    },
    {
      name: "Joy Helen Michael Duraisamy",
      designation: "Senior HR Executive",
      profilePic: "https://via.placeholder.com/48",
      isSenior: true,
    },
    {
      name: "Karthikeyan Ponniah",
      designation: "Senior Software Engineer",
      profilePic: "https://via.placeholder.com/48",
      isSenior: true,
    },
    {
      name: "Arun Periyakaruppan",
      designation: "Software Engineer",
      profilePic: "https://via.placeholder.com/48",
      isSenior: false,
    },
    {
      name: "Anusha Reyya",
      designation: "HR Executive",
      profilePic: "https://via.placeholder.com/48",
      isSenior: false,
    },
    {
      name: "Anand Sivanandam",
      designation: "Software Engineer",
      profilePic: "https://via.placeholder.com/48",
      isSenior: false,
    },
    {
      name: "Selcia Mariaraj",
      designation: "Software Engineer",
      profilePic: "https://via.placeholder.com/48",
      isSenior: false,
    },
    {
      name: "Ramanakishore Sambath",
      designation: "Associate Software Engineer",
      profilePic: "https://via.placeholder.com/48",
      isSenior: false,
    },
    {
      name: "Mohan Krishna Meganathan",
      designation: "Associate Software Engineer",
      profilePic: "https://via.placeholder.com/48",
      isSenior: false,
    },
  ];

  // Filter employees into seniors and juniors
  const seniors = employeeData.filter((employee) => employee.isSenior);
  const juniors = employeeData.filter((employee) => !employee.isSenior);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-bold text-center mb-8">Employee Tree</h1>
      <div className="grid grid-cols-2 gap-8">
        {/* Seniors Column */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-blue-700">Seniors</h2>
          <div className="flex flex-col gap-4">
            {seniors.map((employee, idx) => (
              <div
                key={idx}
                className="p-4 bg-white shadow-md rounded-md w-48 text-center"
              >
                <img
                  src={employee.profilePic}
                  alt={employee.name}
                  className="h-16 w-16 rounded-full mx-auto border-2 border-gray-300"
                />
                <p className="mt-2 font-semibold text-sm">{employee.name}</p>
                <p className="text-xs text-gray-500">{employee.designation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Juniors Column */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-blue-700">Juniors</h2>
          <div className="flex flex-col gap-4">
            {juniors.map((employee, idx) => (
              <div
                key={idx}
                className="p-4 bg-white shadow-md rounded-md w-48 text-center"
              >
                <img
                  src={employee.profilePic}
                  alt={employee.name}
                  className="h-16 w-16 rounded-full mx-auto border-2 border-gray-300"
                />
                <p className="mt-2 font-semibold text-sm">{employee.name}</p>
                <p className="text-xs text-gray-500">{employee.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTree;
