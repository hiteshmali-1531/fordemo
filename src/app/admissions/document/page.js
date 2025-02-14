"use client";
import React, { useState, useEffect } from 'react';
import { setStep } from '@/features/navbar/navbarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { set } from 'mongoose';

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [sscMarksheet, setSscMarksheet] = useState();
  const [hscMarksheet, setHscMarksheet] = useState();
  const [gujcatMarksheet, setGujcatMarksheet] = useState();
  const [degree, setDegree] = useState();
  const [passportPhoto, setPassportPhoto] = useState();
  const [signature, setSignature] = useState();
  const [aadharCard, setAadharCard] = useState();
  const [sscSeatNumber, setSscSeatNumber] = useState();
  const [hscSeatNumber, setHscSeatNumber] = useState();
  const [gujcatSeatNumber, setGujcatSeatNumber] = useState();
  const [degreeCertNo, setDegreeCertNo] = useState();
  const user = useSelector((state)=>state.navbar.user)
  // console.log(email)

  const onUpload = async(fileName,file) =>{
    // console.log(email)
    // console.log("hii")
    // console.log(sscMarksheet)
    if(fileName && file != undefined){
      const fd = new FormData();
      fd.set("file",file);
      fd.set("fileName",fileName);
      fd.set("email", user.email);
      
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admission/upload`,{
        method:"POST",
        body:fd
      })
      res = await res.json();
      // console.log(res)
      // console.log("ok")
      // console.log(file)
    }else{
      // console.log("not ok")
    }
  }

  
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
    dispatch(setStep(4));
    router.push('/admissions/preview');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
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
                  <div className="flex w-full items-center justify-center">
                    <input
                      className="w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="file"
                      name="tenthMarksheet"
                 
                      onChange={(e) =>e.target.files[0]?setSscMarksheet(e.target.files[0]):""}
                     
                      required
                    />
                    <div className='flex w-full px-4 py-2'>

                      <button
                        type="button"
                        className="px-4 py-2 bg-blue-500 w-1/2 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      
                        onClick={() => onUpload("sscMarksheet",sscMarksheet)}
                      >
                        Upload
                      </button>
                      {user&&
                      <a
                        href={`/admissions/document/preview/sscMarksheet`}
                        target='_blank'
                        type="button"
                        className="px-4 py-2 bg-blue-500 w-1/2 text-white rounded-md text-center font-semibold shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"

                        
                      >
                        Preview
                        </a>}
                    </div>
                  </div>
                  <input
                    type="text"
                    name="sscSeatNumber"
                    onChange={(e) =>setSscSeatNumber(e.target.value)}
                    

                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="seat number"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-lg font-medium text-gray-700">12th Marksheet</label>
                  <div className="flex items-center justify-center">
                    <input
                      type="file"
                      name="twelfthMarksheet"
                      onChange={(e) =>e.target.files[0]?setHscMarksheet(e.target.files[0]):""}

                      className="w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <div className="flex px-4 py-2 w-full">
                    <button
                      type="button"
                      
                      className="px-4 py-2 bg-blue-500 w-1/2 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={()=>onUpload("hscMarksheet",hscMarksheet)}
                    >
                      Upload
                    </button>
                    {user &&<a
                        href={`/admissions/document/preview/hscMarksheet`}
                        target='_blank'
                        type="button"
                        className="px-4 py-2 bg-blue-500 w-1/2 text-white rounded-md text-center font-semibold shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"

                        
                      >

                        Preview
                      </a>
}
                    </div>
                  </div>
                  <input
                    type="text"
                    name="hscSeatNumber"
                    onChange={(e) =>setHscSeatNumber(e.target.value)}
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Seat Number"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-lg font-medium text-gray-700">GUJCAT Marksheet</label>
                  <div className="flex items-center justify-center">
                    <input
                      type="file"
                      name="gujcatMarksheet"
                      onChange={(e) =>e.target.files[0]?setGujcatMarksheet(e.target.files[0]):""}
                      className="w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                     
                      required
                    />
                    <div className="flex px-4 py-2 w-full">
                    <button
                      type="button"
                      className="px-4 py-2 bg-blue-500 w-1/2 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={()=>onUpload("gujcatMarksheet",gujcatMarksheet)}
                    >
                      Upload
                    </button>
                    <a
                        href={`/admissions/document/preview/gujcatMarksheet`}
                        target='_blank'
                        type="button"
                        className="px-4 py-2 bg-blue-500 w-1/2 text-white rounded-md text-center font-semibold shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"

                        
                      >
                        Preview
                      </a>
                  </div>
                  </div>
                  <input
                    type="text"
                    name="gujcatSeatNumber"
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Seat Number"
                    onChange={(e) => setGujcatSeatNumber(e.target.value)}
                    required
                  />
                </div>
              </>
            )}

            {/* Degree Certificate for Bachelor and Master */}
            <div className="mb-5">
              <label className="block text-lg font-medium text-gray-700">Degree Certificate</label>
              <div className="flex items-center justify-center">
                <input
                  type="file"
                  name="degreeCert"
                  onChange={(e) =>e.target.files[0]?setDegree(e.target.files[0]):""}

                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <div className="flex px-4 py-2 w-full">
                <button
                  type="button"
                  onClick={()=>onUpload("degree",degree)}
                  className="px-4 py-2 bg-blue-500 w-1/2 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Upload
                </button>
                <a
                        href={`/admissions/document/preview/degree`}
                        target='_blank'
                        type="button"
                        className="px-4 py-2 bg-blue-500 w-1/2 text-white rounded-md text-center font-semibold shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"

                        
                      >
                        Preview
                      </a>
              </div>
              </div>
              <input
                type="text"
                name="degreeCertNo"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Certificate Number"
                onChange={(e) => setDegreeCertNo(e.target.value)}
                required
              />
            </div>

            {/* Passport-size Photo */}
            <div className="mb-5">
              <label className="block text-lg font-medium text-gray-700">Passport Size Photo</label>
              <div className="flex items-center justify-center">
                <input
                  type="file"
                  onChange={(e) =>e.target.files[0]?setPassportPhoto(e.target.files[0]):""}
                  name="passportPhoto"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <div className="flex px-4 py-2 w-full">
                <button
                  type="button"
                  onClick={()=>onUpload("passportPhoto",passportPhoto)}
                  className="px-4 py-2 bg-blue-500 w-1/2 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Upload
                </button>
                <a
                        href={`/admissions/document/preview/passportPhoto`}
                        target='_blank'
                        type="button"
                        className="px-4 py-2 bg-blue-500 w-1/2 text-white rounded-md text-center font-semibold shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"

                        
                      >
                        Preview
                      </a>
              </div>
              </div>
            </div>

            {/* Signature */}
            <div className="mb-5">
              <label className="block text-lg font-medium text-gray-700">Signature</label>
              <div className="flex items-center justify-center">
                <input
                  type="file"
                  name="signature"
                  onChange={(e) =>e.target.files[0]?setSignature(e.target.files[0]):""}
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <div className="flex px-4 py-2 w-full">
                <button
                  type="button"
                  onClick={()=>onUpload("signature",signature)}
                  className="px-4 py-2 bg-blue-500 w-1/2 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Upload
                </button>
                <a
                        href={`/admissions/document/preview/signature`}
                        target='_blank'
                        type="button"
                        className="px-4 py-2 bg-blue-500 w-1/2 text-white rounded-md text-center font-semibold shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"

                        
                      >
                        Preview
                      </a>
              </div>
              </div>
            </div>

            {/* Aadhar Card */}
            <div className="mb-5">
              <label className="block text-lg font-medium text-gray-700">Aadhar Card</label>
              <div className="flex items-center justify-center">
                <input
                  type="file"
                  name="aadharCard"
                  onChange={(e) =>e.target.files[0]?setAadharCard(e.target.files[0]):""}
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <div className="flex px-4 py-2 w-full">
                <button
                  type="button"
                  onClick={()=>onUpload("aadharCard",aadharCard)}
                  className="px-4 py-2 bg-blue-500 w-1/2 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Upload
                </button>
                <a
                        href={`/admissions/document/preview/sscMarkssheet`}
                        target='_blank'
                        type="button"
                        className="px-4 py-2 bg-blue-500 w-1/2 text-white rounded-md text-center font-semibold shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"

                        
                      >
                        Preview
                      </a>
              </div>
              </div>
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

export default page;
