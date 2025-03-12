// src/components/AlumniMentorship.js

'use client';

import { useState } from 'react';

export default function AlumniMentorship() {
  // Sample mentors data
  const [mentors] = useState([
    {
      id: 'MTR001',
      name: 'Rohit Sharma',
      batch: '2015-2019',
      course: 'B.Tech CSE',
      occupation: 'Software Engineer at Google',
      expertise: 'Software Development, Cloud Computing',
      email: 'rohit.sharma@example.com',
      available: true,
    },
    {
      id: 'MTR002',
      name: 'Sneha Patel',
      batch: '2016-2020',
      course: 'B.Tech ECE',
      occupation: 'Product Manager at Microsoft',
      expertise: 'Product Management, Career Planning',
      email: 'sneha.patel@example.com',
      available: true,
    },
    {
      id: 'MTR003',
      name: 'Amit Verma',
      batch: '2014-2018',
      course: 'B.Tech ME',
      occupation: 'Mechanical Engineer at Tesla',
      expertise: 'Mechanical Design, Project Management',
      email: 'amit.verma@example.com',
      available: false,
    },
  ]);

  // State for mentorship request form
  const [requestForm, setRequestForm] = useState({
    studentName: '',
    studentId: '',
    mentorId: '',
    message: '',
  });

  // State for toggling sections
  const [showMentors, setShowMentors] = useState(true);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRequestForm({ ...requestForm, [name]: value });
  };

  // Handle form submission
  const handleRequestSubmit = (e) => {
    e.preventDefault();
    if (requestForm.studentName && requestForm.studentId && requestForm.mentorId) {
      alert(`Mentorship request sent to ${mentors.find(m => m.id === requestForm.mentorId).name}!`);
      setRequestForm({ studentName: '', studentId: '', mentorId: '', message: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white rounded-t-xl">
        <h1 className="text-4xl font-bold text-center">Alumni Mentorship Program</h1>
        <p className="text-sm text-center mt-2 opacity-80">
          Leverage the experience of our alumni to guide your academic and professional journey.
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-b-xl shadow-2xl p-6">
        {/* Program Overview */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Program Overview</h2>
          <p className="text-sm text-gray-600">
            The Alumni Mentorship Program connects current students with accomplished alumni who offer guidance on academics, career paths, and personal development. Whether you need advice on projects, internships, or job opportunities, our mentors are here to help you succeed.
          </p>
        </div>

        {/* Mentors List */}
        <div className="mb-8">
          <button
            onClick={() => setShowMentors(!showMentors)}
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-200 mb-4"
          >
            {showMentors ? 'Hide Mentors' : 'Show Available Mentors'}
          </button>
          {showMentors && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 mx-auto mb-2">
                    <span className="text-xl">Photo</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center">{mentor.name}</h3>
                  <p className="text-sm text-gray-600 text-center">{mentor.batch} | {mentor.course}</p>
                  <p className="text-sm text-gray-700 mt-2"><span className="font-medium">Occupation:</span> {mentor.occupation}</p>
                  <p className="text-sm text-gray-700"><span className="font-medium">Expertise:</span> {mentor.expertise}</p>
                  <p className="text-sm text-gray-700"><span className="font-medium">Email:</span> {mentor.email}</p>
                  <p className={`text-sm mt-2 ${mentor.available ? 'text-green-600' : 'text-red-600'}`}>
                    {mentor.available ? 'Available' : 'Not Available'}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Request Mentorship Form */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-md font-semibold text-gray-700 mb-4">Request Mentorship</h3>
          <form onSubmit={handleRequestSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                name="studentName"
                value={requestForm.studentName}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="e.g., Vipul Sharma"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Student ID</label>
              <input
                type="text"
                name="studentId"
                value={requestForm.studentId}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="e.g., CS2023001"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Mentor</label>
              <select
                name="mentorId"
                value={requestForm.mentorId}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Choose a mentor</option>
                {mentors
                  .filter((mentor) => mentor.available)
                  .map((mentor) => (
                    <option key={mentor.id} value={mentor.id}>
                      {mentor.name} ({mentor.occupation})
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message (Optional)</label>
              <textarea
                name="message"
                value={requestForm.message}
                onChange={handleInputChange}
                placeholder="Briefly describe what you’d like to discuss"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}