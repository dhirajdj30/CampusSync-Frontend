import React, { useState } from "react";

const PrintingPage = () => {
  const [printJobs, setPrintJobs] = useState([
    { id: 1, date: "2023-10-01", document: "Resume.pdf", status: "Completed" },
    { id: 2, date: "2023-10-02", document: "Assignment.docx", status: "Pending" },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
              <img
                src="https://vierp-test.s3.ap-south-1.amazonaws.com/logo/vit_logo_new.png"
                alt="Team Charlie"
                className="h-14 w-14"
              />
            </div>
            <div className="flex space-x-4 text-xl ">
              <a href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
              <a href="/canteen" className="text-gray-700 hover:text-blue-600">
                Canteen
              </a>
              <a href="/printing" className="text-gray-700 hover:text-blue-600">
                Printing
              </a>
              <a href="/profile" className="text-gray-700 hover:text-blue-600">
                Profile
              </a>
              <a href="/login" className="text-black-700 hover:text-red-600">
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Printing Services */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Printing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Print Service Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4">Print Center</h3>
            <p className="text-gray-600 mb-4">
              Status: Open | Queue: 2 jobs
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Print Now
            </button>
          </div>
        </div>

        {/* Print Job History */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Print Job History</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-2">Date</th>
                  <th className="text-left py-2">Document</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {printJobs.map((job) => (
                  <tr key={job.id} className="border-b">
                    <td className="py-2">{job.date}</td>
                    <td className="py-2">{job.document}</td>
                    <td className="py-2">{job.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintingPage;