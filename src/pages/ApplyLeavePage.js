import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplyLeavePage = () => {
  const navigate = useNavigate();
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [teamEmail, setTeamEmail] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Leave Application Submitted:', { leaveType, startDate, endDate, teamEmail, reason });
  };

  const handleClose = () => {
    navigate('/'); // Navigate back to Leave page
  };

  return (
    <div className="relative p-6 bg-white min-h-screen">
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-red-600 bg-transparent transition-all"
      >
        &times; {/* This is the "X" character */}
      </button>

      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800 tracking-widest">
        Apply Leave
      </h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-lg max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="leaveType" className="block text-gray-700">Leave Type</label>
          <select
            id="leaveType"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Leave Type</option>
            <option value="compensatoryOff">Compensatory Off</option>
            <option value="earnedLeave">Earned Leave</option>
            <option value="sickLeave">Sick Leave</option>
            <option value="leaveWithoutPay">Leave Without Pay</option>
            <option value="paternityLeave">Paternity Leave</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="startDate" className="block text-gray-700">Start Date</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="endDate" className="block text-gray-700">End Date</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="teamEmail" className="block text-gray-700">Team Email</label>
          <input
            type="email"
            id="teamEmail"
            value={teamEmail}
            onChange={(e) => setTeamEmail(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="team@example.com"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="reason" className="block text-gray-700">Reason for Leave</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full p-2 border rounded"
            rows="4"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyLeavePage;
