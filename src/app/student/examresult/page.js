// src/components/ExamResult.js

'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function ExamResult() {
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

  // Sample exam results
  const [results] = useState([
    { subject: 'Data Structures', maxMarks: 100, obtainedMarks: 85 },
    { subject: 'Web Development', maxMarks: 100, obtainedMarks: 78 },
    { subject: 'Artificial Intelligence', maxMarks: 100, obtainedMarks: 92 },
  ]);

  // Calculate totals and percentage
  const totalMaxMarks = results.reduce((sum, result) => sum + result.maxMarks, 0);
  const totalObtainedMarks = results.reduce((sum, result) => sum + result.obtainedMarks, 0);
  const percentage = ((totalObtainedMarks / totalMaxMarks) * 100).toFixed(2);
  const passStatus = percentage >= 40 ? 'Pass' : 'Fail'; // Assuming 40% is passing

  // State for toggling detailed view
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-xl mx-auto my-[50px] shadow-2xl max-w-3xl w-full overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 text-white">
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

      {/* Results Summary */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Exam Results</h2>

        {/* Summary Card */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-600">Total Marks</p>
              <p className="text-xl font-bold text-gray-800">{totalObtainedMarks} / {totalMaxMarks}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Percentage</p>
              <p className="text-xl font-bold text-gray-800">{percentage}%</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Status</p>
              <p
                className={`text-xl font-bold ${
                  passStatus === 'Pass' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {passStatus}
              </p>
            </div>
          </div>
        </div>

        {/* Toggle Details Button */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200 mb-4"
        >
          {showDetails ? 'Hide Details' : 'Show Detailed Results'}
        </button>

        {/* Detailed Results Table */}
        {showDetails && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs uppercase bg-gray-50">
                <tr>
                  <th className="py-3 px-6">Subject</th>
                  <th className="py-3 px-6">Max Marks</th>
                  <th className="py-3 px-6">Obtained Marks</th>
                  <th className="py-3 px-6">Grade</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => {
                  const subjectPercentage = (result.obtainedMarks / result.maxMarks) * 100;
                  const grade =
                    subjectPercentage >= 90 ? 'A+' :
                    subjectPercentage >= 80 ? 'A' :
                    subjectPercentage >= 70 ? 'B' :
                    subjectPercentage >= 60 ? 'C' :
                    subjectPercentage >= 40 ? 'D' : 'F';

                  return (
                    <tr key={index} className="border-b">
                      <td className="py-4 px-6">{result.subject}</td>
                      <td className="py-4 px-6">{result.maxMarks}</td>
                      <td className="py-4 px-6">{result.obtainedMarks}</td>
                      <td
                        className={`py-4 px-6 ${
                          grade === 'F' ? 'text-red-600' : 'text-green-600'
                        }`}
                      >
                        {grade}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="bg-gray-50 p-4 text-center text-gray-600 border-t">
        <p>Results Published: February 20, 2025</p>
      </div>
    </div>
  );
}