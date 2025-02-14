"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { setStep } from '@/features/navbar/navbarSlice';
import { useDispatch } from 'react-redux';

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    programType: '',
    program: '',
    branch: '',
    tenthSeatNo: '',
    tenthBoard: '',
    tenthMarks: '',
    twelfthSeatNo: '',
    twelfthBoard: '',
    twelfthStream: '',
    twelfthMarks: '',
    jeeSeatNo: '',
    jeeRank: '',
    graduationDegree: '',
    graduationMarks: '',
    entranceExam: '',
    examRank: ''
  });

  useEffect(() => {
    const courseSelection = JSON.parse(localStorage.getItem('courseSelection'));
    const qualification = JSON.parse(localStorage.getItem('qualificaton detail'));
    if (courseSelection) {
      setFormData((prevData) => ({
        ...prevData,
        programType: courseSelection.programType,
        program: courseSelection.bachelorDegree || courseSelection.masterDegree,
        branch: courseSelection.beBranch || courseSelection.mtechBranch
      }));
    }
    if(qualification){
      setFormData((prevData)=>({
        ...prevData, ...qualification
      }))
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
    localStorage.setItem("qualificaton detail", JSON.stringify(formData));
    e.preventDefault();
    // alert('Qualification details submitted! Moving to the next section.');
    dispatch(setStep(3))
    router.push('/admissions/document')
  };

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Qualification Details</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          {/* Program Type (Bachelor's or Master's) Selection */}
          <div className="mb-5">
            <label className="block text-lg font-medium text-gray-700">Select Program Type</label>
            <select
              name="programType"
              value={formData.programType}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Program</option>
              <option value="Bachelor">Bachelor's</option>
              <option value="Master">Master's</option>
            </select>
          </div>

          {/* Program (BE, BCA, BCom, etc.) Selection */}
          {formData.programType && (
            <div className="mb-5">
              <label className="block text-lg font-medium text-gray-700">Select Program</label>
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Program</option>
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
          )}

          {/* Branch Selection for Engineering (BE) */}
          {formData.program === 'BE' && (
            <div className="mb-5">
              <label className="block text-lg font-medium text-gray-700">Select Branch</label>
              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Branch</option>
                <option value="ComputerEngineering">Computer Engineering</option>
                <option value="CivilEngineering">Civil Engineering</option>
                <option value="MechanicalEngineering">Mechanical Engineering</option>
                <option value="ElectricalEngineering">Electrical Engineering</option>
                <option value="ElectronicsEngineering">Electronics Engineering</option>
              </select>
            </div>
          )}

          {/* Qualification Details for Bachelor's Program */}
          {formData.programType === 'Bachelor' && (
            <>
              {/* 10th Details */}
              <h2 className="text-xl font-semibold text-gray-700 mb-4">10th Qualification Details</h2>
              <div className="mb-5">
                <label className="block text-lg font-medium text-gray-700">10th Seat Number</label>
                <input
                  type="text"
                  name="tenthSeatNo"
                  value={formData.tenthSeatNo}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your 10th seat number"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block text-lg font-medium text-gray-700">10th Board</label>
                <input
                  type="text"
                  name="tenthBoard"
                  value={formData.tenthBoard}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your 10th board name"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block text-lg font-medium text-gray-700">10th Marks (%)</label>
                <input
                  type="number"
                  name="tenthMarks"
                  value={formData.tenthMarks}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your 10th marks"
                  required
                />
              </div>

              {/* 12th Details */}
              <h2 className="text-xl font-semibold text-gray-700 mb-4">12th Qualification Details</h2>
              <div className="mb-5">
                <label className="block text-lg font-medium text-gray-700">12th Seat Number</label>
                <input
                  type="text"
                  name="twelfthSeatNo"
                  value={formData.twelfthSeatNo}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your 12th seat number"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block text-lg font-medium text-gray-700">12th Board</label>
                <input
                  type="text"
                  name="twelfthBoard"
                  value={formData.twelfthBoard}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your 12th board name"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block text-lg font-medium text-gray-700">12th Stream</label>
                <input
                  type="text"
                  name="twelfthStream"
                  value={formData.twelfthStream}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your 12th stream (e.g., Science, Commerce)"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block text-lg font-medium text-gray-700">12th Marks (%)</label>
                <input
                  type="number"
                  name="twelfthMarks"
                  value={formData.twelfthMarks}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your 12th marks"
                  required
                />
              </div>

              {/* JEE Details */}
              <h2 className="text-xl font-semibold text-gray-700 mb-4">JEE Examination Details (if applicable)</h2>
              <div className="mb-5">
                <label className="block text-lg font-medium text-gray-700">JEE Seat Number</label>
                <input
                  type="text"
                  name="jeeSeatNo"
                  value={formData.jeeSeatNo}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your JEE seat number"
                />
              </div>
              <div className="mb-5">
                <label className="block text-lg font-medium text-gray-700">JEE Rank</label>
                <input
                  type="number"
                  name="jeeRank"
                  value={formData.jeeRank}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your JEE rank"
                />
              </div>
            </>
          )}

          {/* Qualification Details for Master's Program */}
          {formData.programType === 'Master' && (
            <>
              {/* Graduation Details */}
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Graduation Qualification Details</h2>
              <div className="mb-5">
                <label className="block text-lg font-medium text-gray-700">Graduation Degree</label>
                <input
                  type="text"
                  name="graduationDegree"
                  value={formData.graduationDegree}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your graduation degree (e.g., BE, BCA, BCom)"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block text-lg font-medium text-gray-700">Graduation Marks (%)</label>
                <input
                  type="number"
                  name="graduationMarks"
                  value={formData.graduationMarks}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your graduation marks"
                  required
                />
              </div>

              {/* Master's Entrance Exam Details */}
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Master's Entrance Exam Details</h2>
              <div className="mb-5">
                <label className="block text-lg font-medium text-gray-700">Entrance Exam</label>
                <input
                  type="text"
                  name="entranceExam"
                  value={formData.entranceExam}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter entrance exam name (e.g., GATE, CAT)"
                />
              </div>
              <div className="mb-5">
                <label className="block text-lg font-medium text-gray-700">Exam Rank</label>
                <input
                  type="number"
                  name="examRank"
                  value={formData.examRank}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your exam rank"
                />
              </div>
            </>
          )}

          {/* Previous and Next Buttons */}
          <div className="flex justify-between">
            <button type="button" onClick={() => router.push('/admissions/course')} className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600">Previous</button>
            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
