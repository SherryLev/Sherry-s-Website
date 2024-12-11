import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">About Me</h1>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <h3 className="text-xl font-bold">Software Developer</h3>
            <p className="text-gray-700">Tech Company Name | Jan 2022 - Present</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Developed and maintained web applications</li>
              <li>Collaborated with cross-functional teams</li>
              <li>Implemented responsive design solutions</li>
            </ul>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-xl font-bold">Junior Developer</h3>
            <p className="text-gray-700">Startup Name | Jun 2020 - Dec 2021</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Assisted in front-end development</li>
              <li>Conducted code reviews and testing</li>
              <li>Contributed to agile development processes</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Python', 'Git'].map((skill) => (
              <span 
                key={skill} 
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link 
            to="/projects" 
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            View My Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;