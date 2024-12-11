import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex flex-col justify-center items-center p-4">
      <div className="max-w-4xl bg-white/90 backdrop-blur-lg shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">About Me</h1>

        {/* Work Experience */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-md">
              <h3 className="text-xl font-bold">Software Developer</h3>
              <p className="text-gray-700">Tech Company Name | Jan 2022 - Present</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Developed and maintained web applications</li>
                <li>Collaborated with cross-functional teams</li>
                <li>Implemented responsive design solutions</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-md">
              <h3 className="text-xl font-bold">Junior Developer</h3>
              <p className="text-gray-700">Startup Name | Jun 2020 - Dec 2021</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Assisted in front-end development</li>
                <li>Conducted code reviews and testing</li>
                <li>Contributed to agile development processes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Python', 'Git'].map((skill) => (
              <span
                key={skill}
                className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium shadow-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Hobbies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Volleyball */}
            <div className="flex flex-col items-center">
              <img
                src="/volleyball.jpg"
                alt="Volleyball"
                className="w-40 h-40 rounded-lg object-cover shadow-md mb-4"
              />
              <p className="text-gray-700 font-medium text-center">I enjoy playing volleyball and love the thrill of team sports.</p>
            </div>
            {/* Tennis */}
            <div className="flex flex-col items-center">
              <img
                src="/tennis.jpg"
                alt="Tennis"
                className="w-40 h-40 rounded-lg object-cover shadow-md mb-4"
              />
              <p className="text-gray-700 font-medium text-center">Tennis keeps me active and challenges me to improve my skills.</p>
            </div>
            {/* Coffee */}
            <div className="flex flex-col items-center">
              <img
                src="/coffee.jpg"
                alt="Coffee"
                className="w-40 h-40 rounded-lg object-cover shadow-md mb-4"
              />
              <p className="text-gray-700 font-medium text-center">
                Exploring new coffee places combines my love for travel and new experiences.
              </p>
            </div>
            {/* Traveling */}
            <div className="flex flex-col items-center">
              <img
                src="/travel.jpg"
                alt="Traveling"
                className="w-40 h-40 rounded-lg object-cover shadow-md mb-4"
              />
              <p className="text-gray-700 font-medium text-center">
                Traveling broadens my perspective and helps me appreciate diverse cultures.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center mt-8">
          <Link
            to="/projects"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            View My Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
