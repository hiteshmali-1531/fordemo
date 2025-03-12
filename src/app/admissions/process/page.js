import React from "react";

export default function AdmissionProcess() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-6 w-full max-w-10xl shadow-lg rounded-lg border border-gray-200">
        <h1 className="text-2xl font-bold mb-4 text-center">
          LDRP-ITR Admission Process
        </h1>

        {/* ACPC Admission */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Admission via ACPC</h2>
          <p className="mb-2">
            The primary admission process is through the{" "}
            <a
              href="http://jacpcldce.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Admission Committee for Professional Courses (ACPC)
            </a>{" "}
            of Gujarat.
          </p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Register on the ACPC website.</li>
            <li>Fill in the required details and upload documents.</li>
            <li>Select LDRP-ITR and preferred courses.</li>
            <li>Participate in the merit-based seat allotment process.</li>
            <li>Confirm admission by paying fees and submitting documents.</li>
          </ol>
        </section>

        {/* Direct Admission via College Website */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            2. Direct Admission via College Website
          </h2>
          <p className="mb-2">
            Students can also apply directly through the{" "}
            <a
              href="https://www.ldrp.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              LDRP-ITR official website
            </a>
            .
          </p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Go to the Admissions section on the website.</li>
            <li>Fill out the online application form.</li>
            <li>Upload the required academic documents.</li>
            <li>Pay the application fee.</li>
            <li>Wait for confirmation from the college.</li>
          </ol>
        </section>

        {/* Entrance Exams */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Entrance Examinations</h2>
          <p>
            Candidates must qualify for the respective entrance exams:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>B.Tech:</strong> GUJCET / JEE Mains
            </li>
            <li>
              <strong>M.Tech:</strong> GATE
            </li>
            <li>
              <strong>MBA:</strong> CMAT
            </li>
          </ul>
        </section>

        {/* Important Dates */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Important Dates</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>GUJCET 2025 Registration: Open until January 15, 2025.</li>
            <li>GUJCET 2025 Exam: March 23, 2025.</li>
            <li>ACPC Admission Registration: April 2025 (Tentative).</li>
          </ul>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-xl font-semibold mb-2">5. Contact & Support</h2>
          <p>
            For more details, visit the{" "}
            <a
              href="https://www.ldrp.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              LDRP-ITR website
            </a>{" "}
            or contact the admission office.
          </p>
        </section>
      </div>
    </div>
  );
}
