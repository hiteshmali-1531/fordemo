// src/components/StudentTimetable.js

'use client';


import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function StudentTimetable() {
   const user = useSelector((state)=>state.navbar.user)
    const router = useRouter();
    useEffect(() =>{
      if(user){
        if(user.role != 'student'){
          router.push('/studentlogin')
        }
      }else{
        router.push('/studentlogin')
      }
    },[])
  // Sample student data
  const [studentData] = useState({
    name: 'Vipul Sharma',
    rollNo: 'CS2023001',
    course: 'B.Tech - Computer Science & Engineering',
    semester: 'Semester 4',
  });

  // Sample timetable data (Monday to Saturday)
  const [timetable] = useState({
    Monday: [
      { time: '09:00 - 10:00', type: 'Lecture', subject: 'Data Structures', faculty: 'Dr. Anil Kumar' },
      { time: '10:00 - 11:00', type: 'Lecture', subject: 'Web Development', faculty: 'Prof. Neha Sharma' },
      { time: '11:00 - 13:00', type: 'Lab', subject: 'Programming Lab', faculty: 'Mr. Rajesh Singh' },
    ],
    Tuesday: [
      { time: '09:00 - 10:00', type: 'Lecture', subject: 'Artificial Intelligence', faculty: 'Dr. Priya Gupta' },
      { time: '10:00 - 11:00', type: 'Lecture', subject: 'Data Structures', faculty: 'Dr. Anil Kumar' },
      { time: '11:00 - 12:00', type: 'Lecture', subject: 'Web Development', faculty: 'Prof. Neha Sharma' },
    ],
    Wednesday: [
      { time: '09:00 - 11:00', type: 'Lab', subject: 'AI Lab', faculty: 'Ms. Suman Patel' },
      { time: '11:00 - 12:00', type: 'Lecture', subject: 'Artificial Intelligence', faculty: 'Dr. Priya Gupta' },
    ],
    Thursday: [
      { time: '09:00 - 10:00', type: 'Lecture', subject: 'Web Development', faculty: 'Prof. Neha Sharma' },
      { time: '10:00 - 12:00', type: 'Lab', subject: 'Programming Lab', faculty: 'Mr. Rajesh Singh' },
    ],
    Friday: [
      { time: '09:00 - 10:00', type: 'Lecture', subject: 'Data Structures', faculty: 'Dr. Anil Kumar' },
      { time: '10:00 - 11:00', type: 'Lecture', subject: 'Artificial Intelligence', faculty: 'Dr. Priya Gupta' },
      { time: '11:00 - 13:00', type: 'Lab', subject: 'Web Dev Lab', faculty: 'Ms. Suman Patel' },
    ],
    Saturday: [
      { time: '09:00 - 10:00', type: 'Lecture', subject: 'Web Development', faculty: 'Prof. Neha Sharma' },
      { time: '10:00 - 11:00', type: 'Lecture', subject: 'Data Structures', faculty: 'Dr. Anil Kumar' },
    ],
  });

  // State for toggling detailed view
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="bg-white rounded-xl mx-auto my-[50px] shadow-2xl max-w-4xl w-full overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-6 text-white">
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
            <span className="text-xl">Photo</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold">{studentData.name}</h1>
            <p className="text-sm opacity-80">{studentData.course}</p>
            <p className="text-sm">Roll No: {studentData.rollNo}</p>
            <p className="text-sm">Semester: {studentData.semester}</p>
          </div>
        </div>
      </div>

      {/* Timetable Section */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Weekly Timetable</h2>

        {/* Timetable Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs uppercase bg-gray-50">
              <tr>
                <th className="py-3 px-4">Day</th>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Subject</th>
                <th className="py-3 px-4">Faculty</th>
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
                      <div key={index}>{slot.faculty}</div>
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
                  {slot.faculty})
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