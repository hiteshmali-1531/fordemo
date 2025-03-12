// src/components/FacultyProfile.js

'use client';

import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useRouter } from 'next/navigation';

export default function FacultyProfile() {
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
    email: 'anil.kumar@college.edu',
    phone: '+91 98765 43210',
    qualifications: [
      { degree: 'Ph.D.', field: 'Computer Science', university: 'IIT Delhi', year: '2015' },
      { degree: 'M.Tech', field: 'Software Engineering', university: 'NIT Trichy', year: '2010' },
      { degree: 'B.Tech', field: 'Computer Science', university: 'Anna University', year: '2008' },
    ],
    coursesTaught: [
      'Data Structures',
      'Algorithms',
      'Operating Systems',
    ],
    officeLocation: 'Room 305, Academic Block A',
    officeHours: [
      { day: 'Monday', time: '10:00 - 12:00' },
      { day: 'Wednesday', time: '14:00 - 16:00' },
      { day: 'Friday', time: '09:00 - 11:00' },
    ],
    experience: '12 years',
    researchInterests: 'Machine Learning, Data Mining, Distributed Systems',
  });

  // State for toggling sections
  const [showQualifications, setShowQualifications] = useState(false);
  const [showOfficeHours, setShowOfficeHours] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden mx-auto my-[50px] transform hover:scale-105 transition-transform duration-300">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
        <div className="flex items-center space-x-4">
          <div className="w-28 h-28 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
            <span className="text-2xl">Photo</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold">{facultyData.name}</h1>
            <p className="text-sm opacity-80">{facultyData.designation}</p>
            <p className="text-sm">{facultyData.department}</p>
            <p className="text-sm">Employee ID: {facultyData.employeeId}</p>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal & Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Contact Information</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <p><span className="font-medium">Email:</span> {facultyData.email}</p>
            <p><span className="font-medium">Phone:</span> {facultyData.phone}</p>
            <p><span className="font-medium">Office:</span> {facultyData.officeLocation}</p>
            <p><span className="font-medium">Experience:</span> {facultyData.experience}</p>
          </div>
        </div>

        {/* Courses Taught */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Courses Taught</h2>
          <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
            {facultyData.coursesTaught.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>

        {/* Research Interests */}
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Research Interests</h2>
          <p className="text-sm text-gray-700">{facultyData.researchInterests}</p>
        </div>
      </div>

      {/* Toggleable Sections */}
      <div className="p-6 border-t">
        {/* Qualifications */}
        <button
          onClick={() => setShowQualifications(!showQualifications)}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 mb-4"
        >
          {showQualifications ? 'Hide Qualifications' : 'Show Qualifications'}
        </button>
        {showQualifications && (
          <div className="mb-6">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Academic Qualifications</h3>
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs uppercase bg-gray-50">
                <tr>
                  <th className="py-3 px-4">Degree</th>
                  <th className="py-3 px-4">Field</th>
                  <th className="py-3 px-4">University</th>
                  <th className="py-3 px-4">Year</th>
                </tr>
              </thead>
              <tbody>
                {facultyData.qualifications.map((qual, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4 px-4">{qual.degree}</td>
                    <td className="py-4 px-4">{qual.field}</td>
                    <td className="py-4 px-4">{qual.university}</td>
                    <td className="py-4 px-4">{qual.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Office Hours */}
        <button
          onClick={() => setShowOfficeHours(!showOfficeHours)}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          {showOfficeHours ? 'Hide Office Hours' : 'Show Office Hours'}
        </button>
        {showOfficeHours && (
          <div className="mt-6">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Office Hours</h3>
            <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
              {facultyData.officeHours.map((slot, index) => (
                <li key={index}>
                  {slot.day}: {slot.time}
                </li>
              ))}
            </ul>
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