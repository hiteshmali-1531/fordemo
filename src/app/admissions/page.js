"use client"
import Image from "next/image";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    motherName: '',
    guardianRelation: '',
    guardianName: '',
    dob: '',
    category: '',
    gender: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    religion: '',
    maritalStatus: '',
    email: '',
    mobile: ''
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('personalDetails', JSON.stringify(formData));
    alert('Personal Information submitted! Moving to the next section.');
    router.push('/corse/page');
  };

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8  w-[80vw]">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Personal Information</h1>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-5">
            <label className="block text-lg font-medium text-gray-700">Full Name of Applicant</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mother's Name */}
          <div className="mb-5">
            <label className="block text-lg font-medium text-gray-700">Mother's Name</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              placeholder="Enter Mother's Name"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Guardian Relation */}
          <div className="mb-5">
            <label className="block text-lg font-medium text-gray-700">Guardian Relation</label>
            <select
              name="guardianRelation"
              value={formData.guardianRelation}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Relation</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Guardian">Guardian</option>
            </select>
          </div>

          {/* Guardian Name */}
          <div className="mb-5">
            <label className="block text-lg font-medium text-gray-700">Guardian Name</label>
            <input
              type="text"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              placeholder="Enter Guardian's Name"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-5">
            <label className="block text-lg font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div className="mb-5">
            <label className="block text-lg font-medium text-gray-700">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option value="General">General</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
            </select>
          </div>

          {/* Gender */}
          <div className="mb-5">
            <label className="block text-lg font-medium text-gray-700">Gender</label>
            <div className="mt-2 flex space-x-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                  className="text-blue-500 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-lg">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                  className="text-blue-500 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-lg">Female</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === 'Other'}
                  onChange={handleChange}
                  className="text-blue-500 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-lg">Other</span>
              </label>
            </div>
          </div>

          {/* Street Address */}
          <div className="mb-5">
            <label className="block text-lg font-medium text-gray-700">Street Address</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              placeholder="Enter Street Address"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* City */}
          <div className="mb-5">
            <label className="block text-lg font-medium text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter City"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* State */}
          <div className="mb-5">
            <label className="block text-lg font-medium text-gray-700">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter State"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Pin Code */}
          <div className="mb-5">
            <label className="block text-lg font-medium text-gray-700">Pin Code</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Enter Pin Code"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Religion */}
          <div className="mb-5">
            <label className="block text-lg font-medium text-gray-700">Religion</label>
            <select
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Marital Status */}
          <div className="mb-5">
            <label className="block text-lg font-medium text-gray-700">Marital Status</label>
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
            </select>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-5">
            <label className="block text-lg font-medium text-gray-700">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page

