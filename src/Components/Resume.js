import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sherry_Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl w-full bg-white/90 backdrop-blur-lg shadow-lg rounded-lg p-6">
        {/* Header Section */}
        <div className="text-center border-b pb-6 mb-6">
          <h1 className="text-4xl font-extrabold text-gray-800">My Resume</h1>
          <p className="text-gray-600 mt-2">
            Explore my professional background and achievements below.
          </p>
        </div>

        {/* Resume Viewer */}
        <div className="mb-8">
          <iframe
            src="/resume.pdf"
            width="100%"
            height="600px"
            title="Resume PDF"
            className="border rounded-lg shadow-sm"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center gap-6">
          <button
            onClick={handleDownloadResume}
            className="bg-purple-300 text-black px-6 py-2 rounded-md shadow-md hover:bg-purple-400 transition duration-300"
          >
            📥 Download Resume
          </button>
          <Link
            to="/projects"
            className="bg-purple-300 text-black px-6 py-2 rounded-md shadow-md hover:bg-purple-400 transition duration-300"
          >
            🔍 View My Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;
