// src/components/AlumniNetwork.js

'use client';

import { useState } from 'react';

export default function AlumniNetwork() {
  // Sample alumni data
  const [alumniData] = useState([
    {
      id: 'AL001',
      name: 'Rohit Sharma',
      batch: '2015-2019',
      course: 'B.Tech CSE',
      occupation: 'Software Engineer at Google',
      location: 'Bangalore, India',
      email: 'rohit.sharma@example.com',
    },
    {
      id: 'AL002',
      name: 'Sneha Patel',
      batch: '2016-2020',
      course: 'B.Tech ECE',
      occupation: 'Product Manager at Microsoft',
      location: 'Seattle, USA',
      email: 'sneha.patel@example.com',
    },
    {
      id: 'AL003',
      name: 'Amit Verma',
      batch: '2014-2018',
      course: 'B.Tech ME',
      occupation: 'Mechanical Engineer at Tesla',
      location: 'Fremont, USA',
      email: 'amit.verma@example.com',
    },
  ]);

  // Sample events data
  const [events] = useState([
    {
      title: 'Alumni Meet 2025',
      date: '2025-03-15',
      time: '14:00 - 17:00',
      location: 'College Auditorium',
      description: 'Annual gathering for alumni to reconnect and network.',
    },
    {
      title: 'Tech Talk: AI in Industry',
      date: '2025-04-10',
      time: '18:00 - 19:30',
      location: 'Online (Zoom)',
      description: 'Guest lecture by alumni on AI advancements.',
    },
  ]);

  // State for new event form
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
  });

  // State for toggling sections
  const [showAlumni, setShowAlumni] = useState(true);
  const [showEvents, setShowEvents] = useState(true);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  // Handle form submission
  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date && newEvent.time) {
      setEvents([...events, { ...newEvent }]);
      setNewEvent({ title: '', date: '', time: '', location: '', description: '' });
      alert('Event added successfully!');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 text-white rounded-t-xl">
        <h1 className="text-4xl font-bold text-center">Alumni Network</h1>
        <p className="text-sm text-center mt-2 opacity-80">
          Connect with fellow alumni, share updates, and stay engaged with your alma mater.
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-b-xl shadow-2xl p-6">
        {/* Alumni Directory */}
        <div className="mb-8">
          <button
            onClick={() => setShowAlumni(!showAlumni)}
            className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200 mb-4"
          >
            {showAlumni ? 'Hide Alumni Directory' : 'Show Alumni Directory'}
          </button>
          {showAlumni && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {alumniData.map((alumnus) => (
                <div
                  key={alumnus.id}
                  className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 mx-auto mb-2">
                    <span className="text-xl">Photo</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center">{alumnus.name}</h3>
                  <p className="text-sm text-gray-600 text-center">{alumnus.batch} | {alumnus.course}</p>
                  <p className="text-sm text-gray-700 mt-2"><span className="font-medium">Occupation:</span> {alumnus.occupation}</p>
                  <p className="text-sm text-gray-700"><span className="font-medium">Location:</span> {alumnus.location}</p>
                  <p className="text-sm text-gray-700"><span className="font-medium">Email:</span> {alumnus.email}</p>
                  <button className="mt-2 w-full bg-indigo-500 text-white py-1 rounded-md hover:bg-indigo-600 transition-colors duration-200">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Events Section */}
        <div className="mb-8">
          <button
            onClick={() => setShowEvents(!showEvents)}
            className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200 mb-4"
          >
            {showEvents ? 'Hide Events' : 'Show Upcoming Events'}
          </button>
          {showEvents && (
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                  <p className="text-sm text-gray-700"><span className="font-medium">Date:</span> {event.date}</p>
                  <p className="text-sm text-gray-700"><span className="font-medium">Time:</span> {event.time}</p>
                  <p className="text-sm text-gray-700"><span className="font-medium">Location:</span> {event.location}</p>
                  <p className="text-sm text-gray-700 mt-2">{event.description}</p>
                  <button className="mt-2 bg-indigo-500 text-white py-1 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-200">
                    Register
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add New Event Form */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-md font-semibold text-gray-700 mb-4">Post a New Event</h3>
          <form onSubmit={handleAddEvent} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Event Title</label>
              <input
                type="text"
                name="title"
                value={newEvent.title}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="e.g., Alumni Meet 2025"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={newEvent.date}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <input
                type="text"
                name="time"
                value={newEvent.time}
                onChange={handleInputChange}
                placeholder="e.g., 14:00 - 17:00"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={newEvent.location}
                onChange={handleInputChange}
                placeholder="e.g., College Auditorium"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={newEvent.description}
                onChange={handleInputChange}
                placeholder="Event details (optional)"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Add Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}