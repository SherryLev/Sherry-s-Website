import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap,
  Code,
  Volleyball, 
  Dumbbell,  
  Coffee, 
  Cake, 
  Mail, 
  Phone, 
  Linkedin 
} from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-5xl bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8 px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight">About Me</h1>
          <p className="mt-2 text-xl text-purple-100">Exploring the intersection of technology and creativity</p>
        </div>

        <div className="p-8 space-y-12">
          {/* Education */}
          <section className="bg-white rounded-xl shadow-md p-6 border border-purple-100">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800 flex items-center justify-center gap-3">
              <GraduationCap className="text-purple-600" size={32} />
              Education
            </h2>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800 mb-1">
                Bachelor of Computer Science
              </p>
              <p className="text-lg text-purple-600 font-medium mb-1">
                Specialization in Human-Computer Interaction
              </p>
              <p className="text-gray-600 text-sm mb-1">University of Waterloo</p>
              <span className="text-gray-500 text-sm italic">2020 - 2025</span>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800 flex items-center justify-center gap-3">
              <Code className="text-purple-600" size={32} />
              Skills
            </h2>
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
          </section>

          {/* Hobbies */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 flex items-center justify-center gap-3">
              <Dumbbell className="text-purple-600" size={32} />
              Hobbies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Volleyball,
                  title: 'Volleyball',
                  description: 'I enjoy playing volleyball and love the thrill of team sports',
                  image: '/volleyball.jpg'
                },
                {
                  icon: Dumbbell,
                  title: 'Tennis',
                  description: 'Tennis keeps me active and challenges me to improve my skills',
                  image: '/tennis.jpeg'
                },
                {
                  icon: Coffee,
                  title: 'Coffee',
                  description: 'Exploring new coffee places instantly makes my day better',
                  image: '/coffee.jpg'
                },
                {
                  icon: Cake,
                  title: 'Baking',
                  description: 'I love baking different sweet treats that mainly involve chocolate',
                  image: '/baking.jpg'
                }
              ].map(({ icon: Icon, title, description, image }) => (
                <div 
                  key={title} 
                  className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <Icon className="text-purple-600" size={24} />
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Me */}
          <section className="bg-white rounded-xl shadow-md p-6 border border-purple-100">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Contact Me</h2>
            <div className="flex flex-col items-center space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-purple-600" size={24} />
                <a
                  href="mailto:slev@waterloo.com"
                  className="text-gray-700 hover:text-purple-600 transition"
                >
                  slev@uwaterloo.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-purple-600" size={24} />
                <p className="text-gray-700">+1 (647) 870-2600</p>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="text-purple-600" size={24} />
                <a
                  href="https://linkedin.com/in/sherrylev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-purple-600 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="text-center">
            <Link
              to="/projects"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition duration-300 shadow-md inline-block"
            >
              View My Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;