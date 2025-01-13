"use client"
import React, { useState, useEffect } from 'react';

const page = () => {
  const [formData, setFormData] = useState({
    programType: '',
    degree: ''
  });

  useEffect(() => {
    const courseSelection = JSON.parse(localStorage.getItem('courseSelection'));
    if (courseSelection) {
      setFormData({
        programType: courseSelection.programType,
        degree: courseSelection.bachelorDegree || courseSelection.masterDegree
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Documents submitted successfully!');
  };

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Document Upload</h1>

        <form onSubmit={handleSubmit}>
          {/* Program Type and Degree Select Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Select Program and Degree</h2>

            {/* Select Program Type (Bachelor or Master) */}
            <div className="mb-5">
              <label className="block text-lg font-medium text-gray-700">Program Type</label>
              <select
                name="programType"
                value={formData.programType}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>Select Program</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
              </select>
            </div>

            {/* Select Degree for Bachelor's or Master's */}
            <div className="mb-5">
              <label className="block text-lg font-medium text-gray-700">Select Degree</label>
              <select
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>Select Degree</option>
                {formData.programType === 'Bachelor' && (
                  <>
                    <option value="BE">Bachelor of Engineering (BE)</option>
                    <option value="BCA">Bachelor of Computer Applications (BCA)</option>
                    <option value="BCom">Bachelor of Commerce (BCom)</option>
                  </>
                )}
                {formData.programType === 'Master' && (
                  <>
                    <option value="MTech">Master of Technology (M.Tech)</option>
                    <option value="MCA">Master of Computer Applications (MCA)</option>
                    <option value="MBA">Master of Business Administration (MBA)</option>
                    <option value="MCom">Master of Commerce (MCom)</option>
                  </>
                )}
              </select>
            </div>
          </div>

          {/* Document Upload Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Upload Required Documents</h2>

            {/* 10th Marksheet and Certificate (Visible for Bachelor's Only) */}
            {formData.programType === 'Bachelor' && (
              <>
                <div className="mb-5">
                  <label className="block text-lg font-medium text-gray-700">10th Marksheet</label>
                  <input
                    type="file"
                    name="tenthMarksheet"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    name="tenthCertNo"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Certificate Number"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-lg font-medium text-gray-700">12th Marksheet</label>
                  <input
                    type="file"
                    name="twelfthMarksheet"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    name="twelfthCertNo"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Certificate Number"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-lg font-medium text-gray-700">GUJCAT Marksheet</label>
                  <input
                    type="file"
                    name="gujcatMarksheet"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    name="gujcatCertNo"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Certificate Number"
                    required
                  />
                </div>
              </>
            )}

            {/* Degree Certificate for Bachelor and Master */}
            <div className="mb-5">
              <label className="block text-lg font-medium text-gray-700">Degree Certificate</label>
              <input
                type="file"
                name="degreeCert"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="degreeCertNo"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Certificate Number"
                required
              />
            </div>

            {/* Passport-size Photo */}
            <div className="mb-5">
              <label className="block text-lg font-medium text-gray-700">Passport Size Photo</label>
              <input
                type="file"
                name="passportPhoto"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Signature */}
            <div className="mb-5">
              <label className="block text-lg font-medium text-gray-700">Signature</label>
              <input
                type="file"
                name="signature"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Aadhar Card */}
            <div className="mb-5">
              <label className="block text-lg font-medium text-gray-700">Aadhar Card</label>
              <input
                type="file"
                name="aadharCard"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button type="button" onClick={() => window.history.back()} className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600">Previous</button>
            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page
