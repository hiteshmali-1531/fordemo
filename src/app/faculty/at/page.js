// src/components/FacultyAttendance.js

'use client';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

export default function FacultyAttendance() {
  
   const router = useRouter();
    const user = useSelector((state) => state.navbar.user); 
    useEffect(() =>{
      if(user){
  
        if(user.role != 'faculty'){
          router.push("/facultylogin")
        }
      }else{
        router.push("/facultylogin")
      }
    },[])
  // Sample faculty data
  const [facultyData] = useState({
    name: 'Dr. Anil Kumar',
    designation: 'Associate Professor',
    department: 'Computer Science & Engineering',
    employeeId: 'FAC12345',
  });

  // Sample attendance data for February 2025
  const [attendanceData] = useState([
    { date: '2025-02-01', status: 'Present' },
    { date: '2025-02-02', status: 'Absent' },
    { date: '2025-02-03', status: 'Present' },
    { date: '2025-02-04', status: 'Present' },
    { date: '2025-02-05', status: 'Leave' },
    { date: '2025-02-06', status: 'Present' },
    { date: '2025-02-07', status: 'Present' },
    { date: '2025-02-08', status: 'Present' },
    { date: '2025-02-09', status: 'Absent' },
    { date: '2025-02-10', status: 'Present' },
  ]);

  // Calculate attendance statistics
  const totalDays = attendanceData.length;
  const presentDays = attendanceData.filter((day) => day.status === 'Present').length;
  const absentDays = attendanceData.filter((day) => day.status === 'Absent').length;
  const leaveDays = attendanceData.filter((day) => day.status === 'Leave').length;
  const attendancePercentage = ((presentDays / totalDays) * 100).toFixed(2);

  // State for toggling detailed view
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full mx-auto my-[50px] overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
              <span className="text-xl">Photo</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold">{facultyData.name}</h1>
              <p className="text-sm opacity-80">{facultyData.designation}</p>
              <p className="text-sm">{facultyData.department}</p>
              <p className="text-sm">Employee ID: {facultyData.employeeId}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold">Attendance: {attendancePercentage}%</p>
            <div className="w-32 bg-gray-200 rounded-full h-2.5 mt-1">
              <div
                className="h-2.5 rounded-full"
                style={{
                  width: `${attendancePercentage}%`,
                  background: 'linear-gradient(to right, #10b981, #10b981)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Summary */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Attendance Summary</h2>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-600">Total Days</p>
              <p className="text-xl font-bold text-gray-800">{totalDays}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Present</p>
              <p className="text-xl font-bold text-green-600">{presentDays}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Absent</p>
              <p className="text-xl font-bold text-red-600">{absentDays}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Leave</p>
              <p className="text-xl font-bold text-yellow-600">{leaveDays}</p>
            </div>
          </div>
        </div>

        {/* Toggle Details Button */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors duration-200 mb-4"
        >
          {showDetails ? 'Hide Details' : 'Show Attendance Details'}
        </button>

        {/* Detailed Attendance Table */}
        {showDetails && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs uppercase bg-gray-50">
                <tr>
                  <th className="py-3 px-6">Date</th>
                  <th className="py-3 px-6">Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((record, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4 px-6">{record.date}</td>
                    <td
                      className={`py-4 px-6 ${
                        record.status === 'Present'
                          ? 'text-green-600'
                          : record.status === 'Absent'
                          ? 'text-red-600'
                          : 'text-yellow-600'
                      }`}
                    >
                      {record.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="bg-gray-50 p-4 text-center text-gray-600 border-t">
        <p>Last Updated: February 20, 2025</p>
      </div>
    </div>
  );
}