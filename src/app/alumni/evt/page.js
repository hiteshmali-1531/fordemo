// src/components/AlumniEvents.js

'use client';

import { useState } from 'react';

export default function AlumniEvents() {
  // Sample events data
  const [events, setEvents] = useState([
    {
      id: 'EVT001',
      title: 'Alumni Meet 2025',
      date: '2025-03-15',
      time: '14:00 - 17:00',
      location: 'College Auditorium',
      description: 'Annual gathering for alumni to reconnect and network.',
      registered: false,
    },
    {
      id: 'EVT002',
      title: 'Tech Talk: AI in Industry',
      date: '2025-04-10',
      time: '18:00 - 19:30',
      location: 'Online (Zoom)',
      description: 'Guest lecture by alumni on AI advancements.',
      registered: false,
    },
    {
      id: 'EVT003',
      title: 'Career Workshop',
      date: '2025-05-05',
      time: '10:00 - 12:00',
      location: 'Seminar Hall B',
      description: 'Interactive session on career planning and job opportunities.',
      registered: false,
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

  // Handle event registration
  const handleRegister = (eventId) => {
    setEvents(
      events.map((event) =>
        event.id === eventId ? { ...event, registered: !event.registered } : event
      )
    );
    alert(`You have ${events.find(e => e.id === eventId).registered ? 'unregistered from' : 'registered for'} the event!`);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  // Handle form submission
  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date && newEvent.time) {
      const newEventWithId = {
        ...newEvent,
        id: `EVT${(events.length + 1).toString().padStart(3, '0')}`,
        registered: false,
      };
      setEvents([...events, newEventWithId]);
      setNewEvent({ title: '', date: '', time: '', location: '', description: '' });
      alert('Event proposed successfully!');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-6 text-white rounded-t-xl">
        <h1 className="text-4xl font-bold text-center">Alumni Events</h1>
        <p className="text-sm text-center mt-2 opacity-80">
          Stay connected with your alma mater through exciting events and gatherings.
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-b-xl shadow-2xl p-6">
        {/* Upcoming Events */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Upcoming Events</h2>
          <div className="space-y-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-700"><span className="font-medium">Date:</span> {event.date}</p>
                <p className="text-sm text-gray-700"><span className="font-medium">Time:</span> {event.time}</p>
                <p className="text-sm text-gray-700"><span className="font-medium">Location:</span> {event.location}</p>
                <p className="text-sm text-gray-700 mt-2">{event.description}</p>
                <button
                  onClick={() => handleRegister(event.id)}
                  className={`mt-2 py-1 px-4 rounded-md text-white transition-colors duration-200 ${
                    event.registered
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-teal-500 hover:bg-teal-600'
                  }`}
                >
                  {event.registered ? 'Unregister' : 'Register'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Propose New Event Form */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-md font-semibold text-gray-700 mb-4">Propose a New Event</h3>
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
              className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-200"
            >
              Propose Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}