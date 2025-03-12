// src/components/FacultyMentoring.js

'use client';


import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

export default function FacultyMentoring() {

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

  // Sample mentees data
  const [mentees] = useState([
    { id: 'CS2023001', name: 'Vipul Sharma', course: 'B.Tech CSE', semester: 'Sem 4' },
    { id: 'CS2023002', name: 'Priya Gupta', course: 'B.Tech CSE', semester: 'Sem 4' },
    { id: 'CS2023003', name: 'Rahul Singh', course: 'B.Tech CSE', semester: 'Sem 4' },
  ]);

  // State for mentoring sessions
  const [sessions, setSessions] = useState([
    { menteeId: 'CS2023001', date: '2025-02-25', time: '10:00 - 11:00', notes: 'Discuss project progress' },
    { menteeId: 'CS2023002', date: '2025-02-26', time: '14:00 - 15:00', notes: 'Career guidance' },
  ]);

  // State for new session form
  const [newSession, setNewSession] = useState({
    menteeId: '',
    date: '',
    time: '',
    notes: '',
  });

  // State for toggling sections
  const [showMentees, setShowMentees] = useState(true);
  const [showSessions, setShowSessions] = useState(true);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSession({ ...newSession, [name]: value });
  };

  // Handle form submission
  const handleAddSession = (e) => {
    e.preventDefault();
    if (newSession.menteeId && newSession.date && newSession.time) {
      setSessions([...sessions, { ...newSession }]);
      setNewSession({ menteeId: '', date: '', time: '', notes: '' });
      alert('Mentoring session scheduled successfully!');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden mx-auto my-[50px] transform hover:scale-105 transition-transform duration-300">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-6 text-white">
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

      {/* Mentoring Section */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Mentoring Dashboard</h2>

        {/* Mentees List */}
        <div className="mb-6">
          <button
            onClick={() => setShowMentees(!showMentees)}
            className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-colors duration-200 mb-2"
          >
            {showMentees ? 'Hide Mentees' : 'Show Mentees'}
          </button>
          {showMentees && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-xs uppercase bg-gray-50">
                  <tr>
                    <th className="py-3 px-4">Roll No</th>
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Course</th>
                    <th className="py-3 px-4">Semester</th>
                  </tr>
                </thead>
                <tbody>
                  {mentees.map((mentee) => (
                    <tr key={mentee.id} className="border-b">
                      <td className="py-4 px-4">{mentee.id}</td>
                      <td className="py-4 px-4">{mentee.name}</td>
                      <td className="py-4 px-4">{mentee.course}</td>
                      <td className="py-4 px-4">{mentee.semester}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Scheduled Sessions */}
        <div className="mb-6">
          <button
            onClick={() => setShowSessions(!showSessions)}
            className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-colors duration-200 mb-2"
          >
            {showSessions ? 'Hide Sessions' : 'Show Scheduled Sessions'}
          </button>
          {showSessions && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-xs uppercase bg-gray-50">
                  <tr>
                    <th className="py-3 px-4">Mentee</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Time</th>
                    <th className="py-3 px-4">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {sessions.map((session, index) => {
                    const mentee = mentees.find((m) => m.id === session.menteeId);
                    return (
                      <tr key={index} className="border-b">
                        <td className="py-4 px-4">{mentee ? mentee.name : session.menteeId}</td>
                        <td className="py-4 px-4">{session.date}</td>
                        <td className="py-4 px-4">{session.time}</td>
                        <td className="py-4 px-4">{session.notes || 'N/A'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Add New Session Form */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-md font-semibold text-gray-700 mb-4">Schedule New Mentoring Session</h3>
          <form onSubmit={handleAddSession} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Mentee</label>
              <select
                name="menteeId"
                value={newSession.menteeId}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select a mentee</option>
                {mentees.map((mentee) => (
                  <option key={mentee.id} value={mentee.id}>
                    {mentee.name} ({mentee.id})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={newSession.date}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <input
                type="text"
                name="time"
                value={newSession.time}
                onChange={handleInputChange}
                placeholder="e.g., 10:00 - 11:00"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Notes</label>
              <textarea
                name="notes"
                value={newSession.notes}
                onChange={handleInputChange}
                placeholder="Add session notes (optional)"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-200"
            >
              Schedule Session
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-50 p-4 text-center text-gray-600 border-t">
        <p>Last Updated: February 20, 2025</p>
      </div>
    </div>
  );
}