import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">My Portfolio</Link>
            <div className="space-x-4">
              <Link to="/" className="hover:text-gray-300">Home</Link>
              <Link to="/about" className="hover:text-gray-300">About</Link>
              <Link to="/projects" className="hover:text-gray-300">Projects</Link>
              <Link to="/resume" className="hover:text-gray-300">Resume</Link>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 mt-auto">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
            <div className="mt-2">
              <a href="#" className="mx-2 hover:text-gray-300">LinkedIn</a>
              <a href="#" className="mx-2 hover:text-gray-300">GitHub</a>
              <a href="#" className="mx-2 hover:text-gray-300">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;