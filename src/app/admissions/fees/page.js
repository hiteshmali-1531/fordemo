export default function Collfees() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 w-full max-w-10xl shadow-lg rounded-lg border border-gray-200">
        <h1 className="text-2xl font-bold mb-4">LDRP-ITR College Fees Structure</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Bachelor of Engineering (B.E.) / B.Tech Fees</h2>
          <ul className="list-disc list-inside">
            <li><strong>Annual Tuition Fee:</strong> ₹1,14,000</li>
            <li><strong>Additional Fees:</strong> Caution deposit, registration, lab, and development fees</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Postgraduate Courses Fees</h2>
          <ul className="list-disc list-inside">
            <li><strong>MCA (Master of Computer Applications):</strong> ₹97,000 per year</li>
            <li><strong>MBA (Master of Business Administration):</strong> ₹95,000 per year</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Additional Fees</h2>
          <ul className="list-disc list-inside">
            <li><strong>Hostel Fees:</strong> ₹48,000 per year</li>
            <li><strong>Examination Fees:</strong> As per university norms (charged per semester)</li>
            <li><strong>Miscellaneous Fees:</strong> Includes library, sports, and other activity charges</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Payment Methods</h2>
          <p>Students can pay their fees through the following methods:</p>
          <ul className="list-disc list-inside">
            <li>Online via the <a href="https://www.ldrp.ac.in/admission-inquiry/" className="text-blue-600 underline">college website</a></li>
            <li>Offline at the administrative office (Cash, Debit/Credit Card, Net Banking, Cheque)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Scholarships & Financial Aid</h2>
          <p>
            Scholarships are available for meritorious and financially needy students. For details, visit the admissions office.
          </p>
        </section>
      </div>
    </div>
  );
}
