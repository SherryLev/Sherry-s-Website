import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 flex flex-col justify-center items-center p-4">
      <div className="max-w-4xl bg-white/90 backdrop-blur-lg shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">About Me</h1>

        {/* Education */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">🎓 Education</h2>
          <div className="flex flex-col items-center bg-gradient-to-r from-gray-50 to-purple-50 p-6 rounded-lg shadow-sm border border-purple-200">
            <p className="text-xl font-bold text-gray-800 mb-1 text-center">
              Bachelor of Computer Science
            </p>
            <p className="text-lg text-purple-600 font-medium mb-1 text-center">
              Specialization in Human-Computer Interaction
            </p>
            <p className="text-gray-600 text-sm mb-2 text-center">University of Waterloo</p>
            <span className="text-gray-500 text-sm text-center italic">2020 - 2025</span>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">🛠 Skills</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'C++', 'C#', 'C', 'Java', 'JavaScript', 'Angular',
              'HTML', 'CSS', 'Node.js', 'SQL', 'Git', 'Azure',
              'Blazor', 'Google Firebase', 'Jenkins', 'LINQ',
            ].map((skill) => (
              <span
                key={skill}
                className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-purple-200 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">🌿 Hobbies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Volleyball */}
            <div className="flex flex-col items-center">
              <img
                src="/volleyball.jpg"
                alt="Volleyball"
                className="w-40 h-40 rounded-lg object-cover shadow-md mb-4 border border-purple-200"
              />
              <p className="text-gray-700 font-medium text-center">
                I enjoy playing volleyball and love the thrill of team sports
              </p>
            </div>
            {/* Tennis */}
            <div className="flex flex-col items-center">
              <img
                src="/tennis.jpeg"
                alt="Tennis"
                className="w-40 h-40 rounded-lg object-cover shadow-md mb-4 border border-purple-200"
              />
              <p className="text-gray-700 font-medium text-center">
                Tennis keeps me active and challenges me to improve my skills
              </p>
            </div>
            {/* Coffee */}
            <div className="flex flex-col items-center">
              <img
                src="/coffee.jpg"
                alt="Coffee"
                className="w-40 h-40 rounded-lg object-cover shadow-md mb-4 border border-purple-200"
              />
              <p className="text-gray-700 font-medium text-center">
                Exploring new coffee places instantly makes my day better
              </p>
            </div>
            {/* Baking */}
            <div className="flex flex-col items-center">
              <img
                src="/baking.jpg"
                alt="Baking"
                className="w-40 h-40 rounded-lg object-cover shadow-md mb-4 border border-purple-200"
              />
              <p className="text-gray-700 font-medium text-center">
                I love baking different sweet treats that mainly involve chocolate
              </p>
            </div>
          </div>
        </div>

        {/* Contact Me */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">📞 Contact Me</h2>
          <div className="flex flex-col items-center bg-gradient-to-r from-gray-50 to-purple-50 p-6 rounded-lg shadow-sm border border-purple-200">
            <div className="flex items-center mb-2">
              <span className="text-purple-600 text-lg mr-2">📧</span>
              <a
                href="mailto:slev@waterloo.com"
                className="text-gray-700 font-medium hover:text-purple-600 transition"
              >
                slev@uwaterloo.com
              </a>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-purple-600 text-lg mr-2">📱</span>
              <p className="text-gray-700 font-medium">+1 (647) 870-2600</p>
            </div>
            <div className="flex items-center">
              <span className="text-purple-600 text-lg mr-2">🔗</span>
              <a
                href="https://linkedin.com/in/sherrylev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 font-medium hover:text-purple-600 transition"
              >
                LinkedIn 
              </a>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="text-center mt-8 mb-12">
          <Link
            to="/projects"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300 shadow-md"
          >
            View My Projects
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;
