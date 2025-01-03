import React from "react";

const Attendance = () => {
  const attendanceData = [
    { day: "Mon", date: 30, hours: 10.12, time: "9:00 AM - 6:00 PM" },
    { day: "Tue", date: 31, hours: 9.45, time: "9:00 AM - 6:00 PM" },
    { day: "Wed", date: 1, hours: 8.5, time: "9:00 AM - 6:00 PM" },
    { day: "Thu", date: 2, hours: 9.3, time: "9:00 AM - 6:00 PM" },
    { day: "Fri", date: 3, hours: 10.5, time: "9:00 AM - 6:00 PM" },
    { day: "Sat", date: 4, hours: 5.2, time: "9:00 AM - 2:00 PM" },
    { day: "Sun", date: 5, hours: 0, time: "Off" },
  ];

  const maxHours = 8; // Assuming a full workday is 8 hours

  return (
    <div className="bg-white shadow-md p-4 rounded-lg space-y-4">
      <h2 className="text-xl font-semibold text-center mb-4">Attendance This Week</h2>

      {/* Scrollable container for attendance data */}
      <div className="max-h-96 overflow-y-auto">
        <div className="space-y-4">
          {attendanceData.map((data, index) => {
            const isWeekend = data.day === "Sat" || data.day === "Sun";
            return (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg shadow-sm ${
                  isWeekend ? "bg-gray-200" : "bg-gray-50"
                }`}
              >
                <div className="flex flex-col items-center space-y-1">
                  <p className="font-medium text-sm">{data.day}</p>
                  <p className="text-xs text-gray-600">{data.time}</p>
                  <p className="font-medium text-xs">Total Hours</p>
                  <p className="text-xs text-gray-600">{data.hours} hrs</p>
                </div>

                {/* Progress Bar */}
                <div className="flex-1 pt-1 ml-3">
                  <div className="flex mb-1 items-center justify-between">
                    <span className="text-xs font-medium text-gray-600">Worked Hours</span>
                    <span className="text-xs font-medium text-gray-600">
                      {Math.min(data.hours, maxHours)} hrs
                    </span>
                  </div>
                  <div className="relative h-1.5 bg-gray-200 rounded-full">
                    <div
                      className="absolute top-0 left-0 h-1.5 bg-green-500 rounded-full"
                      style={{
                        width: `${(Math.min(data.hours, maxHours) / maxHours) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Attendance;
