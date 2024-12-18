import React from 'react';
import { Link } from 'react-router-dom';


const Projects = () => {
  const projectsList = [
    {
      id: 1,
      title: 'RoomMate',
      description: 'Streamlines household management by combining user authentication, expense splitting, chore management, and a rewarding points system.',
      technologies: ['Kotlin', 'FireBase'],
      link: 'https://github.com/SherryLev/RoomMate',
    },
    {
      id: 2,
      title: 'ConnectFour',
      description: 'Classic two-player strategy game where the objective is to connect four of your discs in a row—vertically, horizontally, or diagonally—before your opponent does. ',
      technologies: ['Kotlin'],
      link: 'https://github.com/SherryLev/ConnectFour',
    },
    {
      id: 3,
      title: 'Notes',
      description: 'Simple application designed to help users create, organize, and manage their personal notes.',
      technologies: ['Kotlin'],
      link: 'https://github.com/SherryLev/Notes',
    },
    {
      id: 4,
      title: 'To Do App',
      description: 'Organize tasks efficiently with a dynamic to-do app.',
      technologies: ['Kotlin'],
      link: 'https://github.com/SherryLev/To-Do-App',
    },
    {
      id: 5,
      title: 'The North American Map',
      description: 'Interactive map with cascading drop-down menus for real-time navigation.',
      technologies: ['JavaScript', 'Google Maps API', 'C#'],
      link: 'https://github.com/SherryLev/The-North-American-App',
    },
    {
      id: 6,
      title: 'Complier',
      description: 'This compiler implements scanning, parsing, context sensitive analysis, and code generation',
      technologies: ['C++'],
      link: 'https://github.com/SherryLev/Compiler',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">My Projects</h1>

        {/* Featured Project Section */}
        <div className="mb-12">
          <div className="relative bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-lg shadow-lg p-6 md:p-12 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Featured Project: RoomMate</h2>
              <p className="text-gray-700 mb-4">
              Application streamlines household management by combining user authentication, expense splitting, chore management, and a rewarding points system.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Kotlin', 'FireBase'].map((tech) => (
                  <span
                    key={tech}
                    className="bg-white text-purple-800 px-3 py-1 rounded-full text-sm font-medium shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/SherryLev/RoomMate"
                className="inline-block bg-purple-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300"
              >
                View Project
              </a>
            </div>
            <div className="w-1/6 mt-2 mx-auto">
              <img
                src="/Roomate.png"
                alt="RooMate Project Screenshot"
                className="rounded-sm shadow-sm"
                style={{ maxWidth: '100px', height: 'auto' }}
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h3 className="font-bold text-sm text-gray-800 mb-2">Technologies:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  className="block bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Link */}
        <div className="text-center mt-12">
          <Link
            to="/about"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
