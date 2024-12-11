import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      title: 'RooMate',
      description: 'Responsive personal portfolio built with React and Tailwind CSS',
      technologies: ['React', 'Tailwind CSS', 'React Router'],
      link: '#'
    },
    {
      id: 2,
      title: 'ConnectFour',
      description: 'Full-stack e-commerce management system with analytics',
      technologies: ['Node.js', 'React', 'MongoDB', 'Express'],
      link: '#'
    },
    {
      id: 3,
      title: 'Notes',
      description: 'Real-time weather tracking application with geolocation',
      technologies: ['JavaScript', 'OpenWeatherMap API', 'HTML', 'CSS'],
      link: '#'
    },
    {
        id: 4,
        title: 'To Do App',
        description: 'Real-time weather tracking application with geolocation',
        technologies: ['JavaScript', 'OpenWeatherMap API', 'HTML', 'CSS'],
        link: '#'
    },
    {
        id: 5,
        title: 'The North American Map',
        description: 'Interactive map that dynamically updates in real-time with each choice from predefined cascading drop-down menus to make navigation easier',
        technologies: ['JavaScript', 'Google Maps API', 'C#'],
        link: '#'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsList.map((project) => (
            <div 
              key={project.id} 
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h3 className="font-bold mb-2">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <a 
                href={project.link} 
                className="block w-full text-center bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            to="/about" 
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;