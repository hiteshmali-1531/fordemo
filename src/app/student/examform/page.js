// src/components/ExamForm.js

'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
export default function ExamForm() {
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
  const [studentData] = useState({
    name: 'Vipul Sharma',
    rollNo: 'CS2023001',
    course: 'B.Tech - Computer Science & Engineering',
  });

  const [subjects] = useState([
    { name: 'Data Structures', submissionDone: true },
    { name: 'Web Development', submissionDone: true },
    { name: 'Artificial Intelligence', submissionDone: true },
  ]);

  const [formData, setFormData] = useState({
    examType: 'Semester 4',
    subjectsSelected: [],
    paymentStatus: 'Pending',
  });

  const [examFee] = useState(1500);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const allSubmissionsDone = subjects.every((subject) => subject.submissionDone);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubjectChange = (subjectName) => {
    const updatedSubjects = formData.subjectsSelected.includes(subjectName)
      ? formData.subjectsSelected.filter((sub) => sub !== subjectName)
      : [...formData.subjectsSelected, subjectName];
    setFormData({ ...formData, subjectsSelected: updatedSubjects });
  };

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (allSubmissionsDone && formData.subjectsSelected.length > 0 && paymentMethod) {
      setFormData({ ...formData, paymentStatus: 'Paid' });
      setIsFormSubmitted(true);
      alert('Exam form submitted successfully!');
    } else {
      alert('Please complete all subject submissions, select subjects, and choose a payment method.');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full mx-auto my-[50px] overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-6 text-white">
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
            <span className="text-xl">Photo</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold">{studentData.name}</h1>
            <p className="text-sm opacity-80">{studentData.course}</p>
            <p className="text-sm">Roll No: {studentData.rollNo}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Exam Form Submission</h2>

        {!allSubmissionsDone ? (
          <div className="bg-red-100 p-4 rounded-lg text-red-700">
            <p className="font-medium">Error:</p>
            <p>You cannot fill the exam form until final submissions are completed for all subjects.</p>
            <ul className="list-disc ml-5 mt-2">
              {subjects.map((subject, index) => (
                <li key={index}>
                  {subject.name}: {subject.submissionDone ? 'Completed' : 'Pending'}
                </li>
              ))}
            </ul>
          </div>
        ) : !isFormSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Exam Type</label>
              <select
                name="examType"
                value={formData.examType}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="Semester 4">Semester 4</option>
                <option value="Midterm">Midterm</option>
                <option value="Final">Final</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Select Subjects</label>
              <div className="mt-2 space-y-2">
                {subjects.map((subject, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`subject-${index}`}
                      checked={formData.subjectsSelected.includes(subject.name)}
                      onChange={() => handleSubjectChange(subject.name)}
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label htmlFor={`subject-${index}`} className="ml-2 text-sm text-gray-700">
                      {subject.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-md font-semibold text-gray-700 mb-2">Exam Fee Payment</h3>
              <p className="text-sm text-gray-600">Total Fee: ₹{examFee}</p>
              <div className="mt-2 space-y-2">
                <button
                  type="button"
                  onClick={() => handlePaymentMethod('UPI')}
                  className={`w-full py-2 rounded-lg text-sm ${
                    paymentMethod === 'UPI'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Pay via UPI
                </button>
                <button
                  type="button"
                  onClick={() => handlePaymentMethod('Card')}
                  className={`w-full py-2 rounded-lg text-sm ${
                    paymentMethod === 'Card'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Pay via Credit/Debit Card
                </button>
                <button
                  type="button"
                  onClick={() => handlePaymentMethod('Net Banking')}
                  className={`w-full py-2 rounded-lg text-sm ${
                    paymentMethod === 'Net Banking'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Pay via Net Banking
                </button>
              </div>
              {paymentMethod && (
                <p className="mt-2 text-sm text-green-600">
                  Selected: {paymentMethod}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Submit Exam Form
            </button>
          </form>
        ) : (
          <div className="bg-green-100 p-4 rounded-lg text-green-700">
            <p className="font-medium">Success:</p>
            <p>Exam form submitted successfully!</p>
            <p>Exam Type: {formData.examType}</p>
            <p>Subjects: {formData.subjectsSelected.join(', ')}</p>
            <p>Payment Status: {formData.paymentStatus} (₹{examFee} via {paymentMethod})</p>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="bg-gray-50 p-4 text-center text-gray-600 border-t">
        <p>Last Updated: February 20, 2025</p>
      </div>
    </div>
  );
}