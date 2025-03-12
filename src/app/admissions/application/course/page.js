"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setStep } from '@/features/navbar/navbarSlice';

const page = () => {
  const [formData, setFormData] = useState({
    programType: '',
    bachelorDegree: '',
    beBranch: '',
    masterDegree: '',
    mtechBranch: ''
  });
  const router = useRouter();
  const dispatch = useDispatch()

  useEffect(()=>{
    let data = localStorage.getItem("courseSelection");
    data = JSON.parse(data);
    if(data){
      setFormData(data)
    }
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('courseSelection', JSON.stringify(formData));
    alert('Program selection submitted! Moving to the next section.');
    dispatch(setStep(2))
    router.push("/admissions/application/qualification")
  
  };

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Admission Form - Program Selection</h1>

        <form onSubmit={(e)=> handleSubmit(e)}>
          {/* Select Program Type (Bachelor's or Master's) */}
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

          {/* Bachelor's Program Selection */}
          {formData.programType === 'Bachelor' && (
            <div className="mb-5">
              <label className="block text-lg font-medium text-gray-700">Select Bachelor's Degree</label>
              <select
                name="bachelorDegree"
                value={formData.bachelorDegree}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Degree</option>
                <option value="BE">Bachelor of Engineering (BE)</option>
                <option value="BCA">Bachelor of Computer Applications (BCA)</option>
                <option value="BCom">Bachelor of Commerce (BCom)</option>
              </select>
            </div>
          )}

          {/* Bachelor's Engineering Branch Selection (If BE is selected) */}
          {formData.bachelorDegree === 'BE' && (
            <div className="mb-5">
              <label className="block text-lg font-medium text-gray-700">Select Engineering Branch</label>
              <select
                name="beBranch"
                value={formData.beBranch}
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

          {/* Master's Program Selection */}
          {formData.programType === 'Master' && (
            <div className="mb-5">
              <label className="block text-lg font-medium text-gray-700">Select Master's Degree</label>
              <select
                name="masterDegree"
                value={formData.masterDegree}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Degree</option>
                <option value="MTech">Master of Technology (M.Tech)</option>
                <option value="MCA">Master of Computer Applications (MCA)</option>
                <option value="MBA">Master of Business Administration (MBA)</option>
                <option value="MCom">Master of Commerce (MCom)</option>
              </select>
            </div>
          )}

          {/* Master's Engineering Branch Selection (If MTech is selected) */}
          {formData.masterDegree === 'MTech' && (
            <div className="mb-5">
              <label className="block text-lg font-medium text-gray-700">Select Engineering Branch</label>
              <select
                name="mtechBranch"
                value={formData.mtechBranch}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Branch</option>
                <option value="ComputerScience">Computer Science</option>
                <option value="ElectricalEngineering">Electrical Engineering</option>
                <option value="MechanicalEngineering">Mechanical Engineering</option>
                <option value="CivilEngineering">Civil Engineering</option>
                <option value="ElectronicsEngineering">Electronics Engineering</option>
              </select>
            </div>
          )}

          {/* Previous and Next Buttons */}
          <div className="flex justify-between">
            <button type="button" onClick={() => router.push('/admissions/application')} className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600">Previous</button>
            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
