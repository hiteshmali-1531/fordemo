// src/components/FacultyTimetable.js

'use client';

import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function FacultyTimetable() {
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

  // Sample timetable data (Monday to Saturday)
  const [timetable] = useState({
    Monday: [
      { time: '09:00 - 10:00', type: 'Lecture', subject: 'Data Structures', location: 'Room 101', batch: 'B.Tech Sem 4' },
      { time: '11:00 - 13:00', type: 'Lab', subject: 'Programming Lab', location: 'Lab A1', batch: 'B.Tech Sem 4' },
    ],
    Tuesday: [
      { time: '10:00 - 11:00', type: 'Lecture', subject: 'Algorithms', location: 'Room 102', batch: 'B.Tech Sem 6' },
      { time: '14:00 - 15:00', type: 'Lecture', subject: 'Data Structures', location: 'Room 101', batch: 'B.Tech Sem 4' },
    ],
    Wednesday: [
      { time: '09:00 - 10:00', type: 'Lecture', subject: 'Operating Systems', location: 'Room 103', batch: 'B.Tech Sem 6' },
      { time: '11:00 - 13:00', type: 'Lab', subject: 'OS Lab', location: 'Lab A2', batch: 'B.Tech Sem 6' },
    ],
    Thursday: [
      { time: '10:00 - 11:00', type: 'Lecture', subject: 'Data Structures', location: 'Room 101', batch: 'B.Tech Sem 4' },
      { time: '14:00 - 16:00', type: 'Lab', subject: 'Programming Lab', location: 'Lab A1', batch: 'B.Tech Sem 4' },
    ],
    Friday: [
      { time: '09:00 - 10:00', type: 'Lecture', subject: 'Algorithms', location: 'Room 102', batch: 'B.Tech Sem 6' },
      { time: '11:00 - 12:00', type: 'Lecture', subject: 'Operating Systems', location: 'Room 103', batch: 'B.Tech Sem 6' },
    ],
    Saturday: [
      { time: '10:00 - 11:00', type: 'Lecture', subject: 'Data Structures', location: 'Room 101', batch: 'B.Tech Sem 4' },
    ],
  });

  // State for toggling detailed view
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden mx-auto my-[50px] transform hover:scale-105 transition-transform duration-300">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
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
      </div>

      {/* Timetable Section */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Weekly Teaching Schedule</h2>

        {/* Timetable Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs uppercase bg-gray-50">
              <tr>
                <th className="py-3 px-4">Day</th>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Subject</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Batch</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(timetable).map((day) => (
                <tr
                  key={day}
                  className="border-b hover:bg-gray-100 cursor-pointer"
                  onClick={() => setSelectedDay(selectedDay === day ? null : day)}
                >
                  <td className="py-4 px-4 font-medium">{day}</td>
                  <td className="py-4 px-4">
                    {timetable[day].map((slot, index) => (
                      <div key={index}>{slot.time}</div>
                    ))}
                  </td>
                  <td className="py-4 px-4">
                    {timetable[day].map((slot, index) => (
                      <div key={index}>{slot.type}</div>
                    ))}
                  </td>
                  <td className="py-4 px-4">
                    {timetable[day].map((slot, index) => (
                      <div key={index}>{slot.subject}</div>
                    ))}
                  </td>
                  <td className="py-4 px-4">
                    {timetable[day].map((slot, index) => (
                      <div key={index}>{slot.location}</div>
                    ))}
                  </td>
                  <td className="py-4 px-4">
                    {timetable[day].map((slot, index) => (
                      <div key={index}>{slot.batch}</div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detailed View for Selected Day */}
        {selectedDay && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Details for {selectedDay}</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {timetable[selectedDay].map((slot, index) => (
                <li key={index}>
                  <span className="font-medium">{slot.time}</span> - {slot.type}: {slot.subject} (
                  {slot.location}, {slot.batch})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="bg-gray-50 p-4 text-center text-gray-600 border-t">
        <p>Schedule Updated: February 20, 2025</p>
      </div>
    </div>
  );
}