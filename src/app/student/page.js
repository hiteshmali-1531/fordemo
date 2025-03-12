// pages/student-profile.js (or place in components folder and import into a page)
'use client'
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function StudentProfile() {
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
  // State for toggling extra details, editing mode, and fee status
  const [showExtra, setShowExtra] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [studentData, setStudentData] = useState({
    dob: '15-May-2003',
    email: 'vipul.sharma@college.edu',
    phone: '+91 98765 43210',
    address: '123, Main Street, Delhi, India',
    tuitionStatus: 'Paid',
    hostelStatus: 'Due',
  });

  // Handlers for interactivity
  const toggleExtraDetails = () => setShowExtra(!showExtra);
  const toggleEditMode = () => setIsEditing(!isEditing);

  const handleInputChange = (field, value) => {
    setStudentData({ ...studentData, [field]: value });
  };

  const toggleFeeStatus = () => {
    setStudentData({
      ...studentData,
      tuitionStatus: studentData.tuitionStatus === 'Paid' ? 'Due' : 'Paid',
      hostelStatus: studentData.hostelStatus === 'Due' ? 'Paid' : 'Due',
    });
  };

  return (
    <>
      <Head>
        <title>Student Profile - College Management System</title>
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
            background: linear-gradient(to right, #10b981 ${92}%, #e5e7eb ${92}%);
          }
        `}</style>
      </Head>
      <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100 font-sans">
        <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden transform hover:scale-105 transition-transform duration-300">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                  <span className="text-2xl">Photo</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Vipul Chaudhary</h1>
                  <p className="text-sm opacity-80">B.Tech - Computer Science & Engineering</p>
                  <p className="text-sm">Roll No: 48 | Enrollment ID: 22BECE30048</p>
                </div>
              </div>
              <button
                onClick={toggleEditMode}
                className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
              >
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </button>
            </div>
          </div>

          {/* Main Info Section */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Personal Details</h2>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium text-gray-600">Date of Birth:</span>{' '}
                  <span
                    contentEditable={isEditing}
                    onBlur={(e) => handleInputChange('dob', e.target.textContent)}
                    className={`editable ${isEditing ? 'bg-gray-100' : ''}`}
                  >
                    {studentData.dob}
                  </span>
                </p>
                <p><span className="font-medium text-gray-600">Gender:</span> Male</p>
                <p><span className="font-medium text-gray-600">Blood Group:</span> A+</p>
                <p><span className="font-medium text-gray-600">Nationality:</span> Indian</p>
                <p><span className="font-medium text-gray-600">Aadhar No:</span> 1234-5678-9012</p>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Contact Details</h2>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium text-gray-600">Email:</span>{' '}
                  <span
                    contentEditable={isEditing}
                    onBlur={(e) => handleInputChange('email', e.target.textContent)}
                    className={`editable ${isEditing ? 'bg-gray-100' : ''}`}
                  >
                    {studentData.email}
                  </span>
                </p>
                <p>
                  <span className="font-medium text-gray-600">Phone:</span>{' '}
                  <span
                    contentEditable={isEditing}
                    onBlur={(e) => handleInputChange('phone', e.target.textContent)}
                    className={`editable ${isEditing ? 'bg-gray-100' : ''}`}
                  >
                    {studentData.phone}
                  </span>
                </p>
                <p>
                  <span className="font-medium text-gray-600">Address:</span>{' '}
                  <span
                    contentEditable={isEditing}
                    onBlur={(e) => handleInputChange('address', e.target.textContent)}
                    className={`editable ${isEditing ? 'bg-gray-100' : ''}`}
                  >
                    {studentData.address}
                  </span>
                </p>
                <p><span className="font-medium text-gray-600">Emergency Contact:</span> +91 91234 56789</p>
              </div>
            </div>

            {/* Academic Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Academic Details</h2>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium text-gray-600">Batch:</span> 2023-2027</p>
                <p><span className="font-medium text-gray-600">Semester:</span> 4th</p>
                <p><span className="font-medium text-gray-600">CGPA:</span> 8.5/10</p>
                <p><span className="font-medium text-gray-600">Courses Enrolled:</span> DSA, Web Dev, AI</p>
                <p><span className="font-medium text-gray-600">Status:</span> Active</p>
              </div>
            </div>

            {/* Attendance & Fee */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Attendance & Fee</h2>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium text-gray-600">Attendance:</span> 92%</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="progress-bar h-2.5 rounded-full"></div>
                </div>
                <p>
                  <span className="font-medium text-gray-600">Tuition Fee:</span> ₹1,20,000 (
                  <span className={studentData.tuitionStatus === 'Paid' ? 'text-green-600' : 'text-red-600'}>
                    {studentData.tuitionStatus}
                  </span>)
                </p>
                <p>
                  <span className="font-medium text-gray-600">Hostel Fee:</span> ₹50,000 (
                  <span className={studentData.hostelStatus === 'Due' ? 'text-red-600' : 'text-green-600'}>
                    {studentData.hostelStatus}
                  </span>)
                </p>
                <button
                  onClick={toggleFeeStatus}
                  className="text-sm text-purple-600 hover:underline"
                >
                  Update Fee Status
                </button>
              </div>
            </div>

            {/* Hostel Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Hostel Details</h2>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium text-gray-600">Hostel Name:</span> Block A</p>
                <p><span className="font-medium text-gray-600">Room No:</span> A-305</p>
                <p><span className="font-medium text-gray-600">Warden:</span> Mr. Ravi Kumar</p>
                <p><span className="font-medium text-gray-600">Check-in Date:</span> 10-Aug-2023</p>
              </div>
            </div>

            {/* Disciplinary Records */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Disciplinary Records</h2>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium text-gray-600">Incidents:</span> 1 (Late Submission - 10-Jan-2025)</p>
                <p><span className="font-medium text-gray-600">Warnings:</span> 0</p>
                <p><span className="font-medium text-gray-600">Status:</span> Good Standing</p>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="p-6 border-t">
            <button
              onClick={toggleExtraDetails}
              className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200"
            >
              {showExtra ? 'Hide Extra Details' : 'Show Extra Details'}
            </button>
            {showExtra && (
              <div className="mt-4 text-gray-700 fade-in text-sm">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Extra Information</h2>
                <p><span className="font-medium text-gray-600">Father's Name:</span> Dahyaji Chaudhary</p>
                <p><span className="font-medium text-gray-600">Mother's Name:</span> Ramila chaudhary</p>
                <p><span className="font-medium text-gray-600">Library Books Issued:</span> 2 (Due: 28-Feb-2025)</p>
                <p><span className="font-medium text-gray-600">Extracurricular:</span> Coding Club, Football Team</p>
                <p><span className="font-medium text-gray-600">Scholarship:</span> Merit-Based (₹20,000)</p>
                <p><span className="font-medium text-gray-600">Medical History:</span> None</p>
              </div>
            )}
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