import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-center p-4 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100"
    >
      <div className="bg-white/90 backdrop-blur-lg rounded-lg p-8 shadow-lg max-w-3xl w-full">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src="/profile-picture.jpg" // Replace with the path to your profile picture
            alt="Your Name"
            className="w-48 h-48 rounded-full border-4 border-gray-200 shadow-md object-cover object-center"
          />
        </div>

        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg font-medium text-gray-600 mb-8">
          Software Developer | Tech Enthusiast | Problem Solver
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            to="/about"
            className="bg-pink-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-400 transition duration-300"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="bg-blue-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-400 transition duration-300"
          >
            My Projects
          </Link>
          <Link
            to="/resume"
            className="bg-purple-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-400 transition duration-300"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
