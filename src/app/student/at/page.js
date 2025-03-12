// pages/student-attendance.js
'use client'
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function StudentAttendance() {
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
  // Sample attendance data
  const [attendanceData, setAttendanceData] = useState([
    { date: '2025-02-01', status: 'Present' },
    { date: '2025-02-02', status: 'Absent' },
    { date: '2025-02-03', status: 'Present' },
    { date: '2025-02-04', status: 'Present' },
    { date: '2025-02-05', status: 'Absent' },
    { date: '2025-02-06', status: 'Present' },
    { date: '2025-02-07', status: 'Present' },
    { date: '2025-02-08', status: 'Present' },
    { date: '2025-02-09', status: 'Absent' },
    { date: '2025-02-10', status: 'Present' },
  ]);

  // Calculate attendance percentage
  const totalDays = attendanceData.length;
  const presentDays = attendanceData.filter((day) => day.status === 'Present').length;
  const attendancePercentage = ((presentDays / totalDays) * 100).toFixed(2);

  // Chart data
  const chartData = {
    labels: attendanceData.map((day) => day.date),
    datasets: [
      {
        label: 'Attendance Status',
        data: attendanceData.map((day) => (day.status === 'Present' ? 1 : 0)),
        backgroundColor: attendanceData.map((day) =>
          day.status === 'Present' ? 'rgba(16, 185, 129, 0.6)' : 'rgba(239, 68, 68, 0.6)'
        ),
        borderColor: attendanceData.map((day) =>
          day.status === 'Present' ? 'rgba(16, 185, 129, 1)' : 'rgba(239, 68, 68, 1)'
        ),
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: 1,
        ticks: {
          stepSize: 1,
          callback: (value) => (value === 1 ? 'Present' : 'Absent'),
        },
      },
    },
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Daily Attendance Overview' },
    },
  };

  return (
    <>
      <Head>
        <title>Student Attendance - College Management System</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .fade-in {
            animation: fadeIn 0.5s ease-in;
          }
          .progress-bar {
            background: linear-gradient(to right, #10b981 ${attendancePercentage}%, #e5e7eb ${attendancePercentage}%);
          }
        `}</style>
      </Head>
      <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100 font-sans">
        <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden transform hover:scale-105 transition-transform duration-300">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                  <span className="text-xl">Photo</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Vipul Sharma</h1>
                  <p className="text-sm opacity-80">B.Tech - Computer Science & Engineering</p>
                  <p className="text-sm">Roll No: CS2023001</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">Attendance: {attendancePercentage}%</p>
                <div className="w-32 bg-gray-200 rounded-full h-2.5 mt-1">
                  <div className="progress-bar h-2.5 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Attendance Table */}
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Attendance Records</h2>
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
                          record.status === 'Present' ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {record.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Attendance Graph */}
          <div className="p-6 border-t">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Attendance Graph</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>

          {/* Footer Section */}
          <div className="bg-gray-50 p-4 text-center text-gray-600 border-t">
            <p>Last Updated: February 20, 2025</p>
          </div>
        </div>
      </div>
    </>
  );
}