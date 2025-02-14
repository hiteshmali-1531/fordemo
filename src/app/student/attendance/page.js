import React from 'react'

const page = () => {
    const studentData = {
        rollNo: '101',
        name: 'Alice Johnson',
        class: 'CS101',
        attendance: [
          { date: '2024-01-01',subject:'ai', status: 'Present' },
          { date: '2024-01-02', subject:'ml', status: 'Absent' },
          { date: '2024-01-03', subject:'ai', status: 'Present' },
          { date: '2024-01-04', subject:'iot', status: 'Present' },
        ],
      };
  return (
    <div>
      <div id="attendanceRecordSection" className="bg-white shadow-lg my-9 rounded-lg p-6 ">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Attendance Record</h2>
      <div id="studentInfo" className="mb-4">
        <p class="text-gray-700"><strong>Roll No:</strong> ${studentData.rollNo}</p>
            <p class="text-gray-700"><strong>Name:</strong> ${studentData.name}</p>
            <p class="text-gray-700"><strong>Class:</strong> ${studentData.class}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="py-3 px-4 border">Date</th>
              <th className="py-3 px-4 border">Subject</th>
              <th className="py-3 px-4 border">Status</th>
            </tr>
          </thead>
          <tbody id="attendanceList">
            {/* <!-- Placeholder for attendance records --> */}
            {studentData.attendance.map((record) =>{
                return (<tr class="text-gray-700 text-center">
                <td class="py-3 px-4 border">{record.date}</td>
                <td class="py-3 px-4 border">{record.subject}</td>
                <td class="py-3 px-4 border">
                  <span class="${record.status === 'Present' ? 'text-green-500' : 'text-red-500'} font-semibold">
                    {record.status}
                  </span>
                </td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default page
