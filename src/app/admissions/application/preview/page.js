"use client"
import Script from 'next/script';
import React, { useEffect, useState } from 'react';

const page = () => {
  const [personalDetails, setPersonalDetails] = useState({});
  const [programInfo, setProgramInfo] = useState({});
  const [qualificationInfo, setQualificationInfo] = useState({});
  const [documents, setDocuments] = useState({});
  const [admissionDetails, setAdmissionDetails] = useState({});

  useEffect(() => {
    const personalDetails = JSON.parse(localStorage.getItem('personalDetails')) || {};
    const programDetails = JSON.parse(localStorage.getItem('courseSelection')) || {};
    const qualificationDetails = JSON.parse(localStorage.getItem('qualificaton detail')) || {};
    const uploadedDocuments = JSON.parse(localStorage.getItem('documents')) || {};

    setPersonalDetails(personalDetails);
    setProgramInfo(programDetails);
    setQualificationInfo(qualificationDetails);
    setDocuments(uploadedDocuments);
    setAdmissionDetails({personalDetails, programDetails, qualificationDetails, uploadedDocuments})
    // console.log(personalDetails)

    // console.log(admissionDetails);
  }, []);

  useEffect(() =>{
    console.log(admissionDetails)
  },[admissionDetails])


  const submitForm = async() => {
  
  let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(admissionDetails)
  })
  a = await a.json();
        let orderId = a.id;
    var option = {
      "key": "rzp_test_i992dpzpgNA0fH", // Enter the Key ID generated from the Dashboard
      "amount": "100", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "hitesh@gmail.com", //your business name
      "description": "hello",
      "image": "https://example.com/your_logo",
      "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": `${process.env.NEXT_PUBLIC_HOST}/api/razorpay`,
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          "name": "hitesh Kumar", //your customer's name
          "email": "hitesh@gmail.com",
          "contact": "9000090000" //Provide the customer's phone numb er for better conversion rates 
      },

  }
  var rzp1 = new Razorpay(option);

  console.log(rzp1.accounts)
  rzp1.open();

    alert("Form Submitted Successfully!");
    
    // Add logic to handle form submission here.
  };

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <Script id="razor" src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Preview Your Information</h1>

        <div id="preview">
          {/* Personal Details */}
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-gray-700">Personal Information</h2>
            <p className="text-gray-700 mt-2">
              Full Name: {personalDetails.fullName} <br />
              Mother's Name: {personalDetails.motherName} <br />
              Guardian Relation: {personalDetails.guardianRelation} <br />
              Guardian Name: {personalDetails.guardianName} <br />
              Date of Birth: {personalDetails.dob} <br />
              Category: {personalDetails.category} <br />
              Gender: {personalDetails.gender} <br />
              Street: {personalDetails.street} <br />
              City: {personalDetails.city} <br />
              State: {personalDetails.state} <br />
              Pin Code: {personalDetails.pincode} <br />
              Religion: {personalDetails.religion} <br />
              Marital Status: {personalDetails.maritalStatus} <br />
              Email: {personalDetails.email} <br />
              Mobile: {personalDetails.mobile}
            </p>
          </div>

          {/* Program and Degree Information */}
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-gray-700">Program Information</h2>
            <p className="text-gray-700 mt-2">
              Program Type: {programInfo.programType} <br />
              Degree: {programInfo.bachelorDegree || programInfo.masterDegree} <br />
              Branch: {programInfo.beBranch || programInfo.mtechBranch}
            </p>
          </div>

          {/* Qualification Details */}
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-gray-700">Qualification</h2>
            <p className="text-gray-700 mt-2">
              10th Seat Number: {qualificationInfo.tenthSeatNo} <br />
              10th Board: {qualificationInfo.tenthBoard} <br />
              10th Marks: {qualificationInfo.tenthMarks} <br />
              12th Seat Number: {qualificationInfo.twelfthSeatNo} <br />
              12th Board: {qualificationInfo.twelfthBoard} <br />
              12th Stream: {qualificationInfo.twelfthStream} <br />
              12th Marks: {qualificationInfo.twelfthMarks} <br />
              JEE Seat Number: {qualificationInfo.jeeSeatNo} <br />
              JEE Rank: {qualificationInfo.jeeRank} <br />
              {qualificationInfo.graduationDegree && <span>Graduation Degree: {qualificationInfo.graduationDegree} <br /></span>}
              {qualificationInfo.graduationMarks && <span>Graduation Marks: {qualificationInfo.graduationMarks} <br /></span>}
              {qualificationInfo.entranceExam && <span>Entrance Exam: {qualificationInfo.entranceExam} <br /></span>}
             {qualificationInfo.examRank && <span>Exam Rank: {qualificationInfo.examRank}</span>} 
            </p>
          </div>

          {/* Document Upload Preview */}
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-gray-700">Uploaded Documents</h2>
            <div className="text-gray-700 mt-2">
              {Object.keys(documents).map((key) => (
                <p key={key}>{key}: {documents[key]}</p>
              ))}
            </div>
          </div>

          {/* Button Section */}
          <div className="flex justify-between">
            <button type="button" onClick={() => window.history.back()} className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600">Edit</button>
            <button type="button" onClick={submitForm}  className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
