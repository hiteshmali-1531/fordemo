import React from 'react';

export default function EligibilityPage() {
  return (
    <div className="min-h-screen  bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-10 w-full max-w-10xl shadow-lg rounded-lg border border-gray-200">
        <h1 className="text-3xl  font-bold mb-4">LDRP-ITR B.Tech Admission Eligibility Criteria</h1>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Academic Qualifications</h2>
          <p className="mb-2">
            Candidates must have completed their Higher Secondary Certificate Examination (H.S.C.E) or equivalent (10+2 pattern) in the Science stream. They should have studied:
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Physics and Mathematics as compulsory subjects</li>
            <li>Chemistry, Biology, Biotechnology, or a Technical Vocational subject</li>
          </ul>
          <p>
            A minimum aggregate of 45% marks in these subjects is required for General category candidates, while a 40% aggregate is acceptable for candidates belonging to SC/ST/SEBC categories.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Entrance Examinations</h2>
          <p>
            Prospective students must qualify in either the Gujarat Common Entrance Test (GUJCET) or the Joint Entrance Examination Main (JEE Main). The selection process is merit-based, considering the scores obtained in these examinations.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Admission Process</h2>
          <p>
            Admissions are conducted through the Admission Committee for Professional Courses (ACPC) procedure. Notably, LDRP-ITR does not have a Management or NRI quota, ensuring a transparent and merit-based admission process.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Specializations and Seat Intake</h2>
          <p className="mb-2">LDRP-ITR offers the B.E. program in the following specializations:</p>
          <ul className="list-disc list-inside">
            <li>Computer Engineering: 180 seats</li>
            <li>Civil Engineering: 60 seats</li>
            <li>Automobile Engineering: 60 seats</li>
            <li>Electronics & Communication Engineering: 60 seats</li>
            <li>Information Technology: 60 seats</li>
            <li>Electrical Engineering: 60 seats</li>
            <li>Mechanical Engineering: 60 seats</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Important Dates</h2>
          <ul className="list-disc list-inside">
            <li>GUJCET 2025 Registration: Open until January 15, 2025, with a late fee.</li>
            <li>GUJCET 2025 Examination: Scheduled for March 23, 2025.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
