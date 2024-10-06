import React, { useState, useEffect } from 'react';
import { FaGithub, FaStackOverflow, FaLinkedin, FaInstagram } from 'react-icons/fa';

const featuredProjects = [
  {
    title: "Campus Stay",
    description: "A MERN stack application helping students find accommodation near their campus.",
    link: "#"
  },
  {
    title: "WeSell",
    description: "An online platform to sell used items on college campuses.",
    link: "#"
  },
  {
    title: "Fraud Alert",
    description: "A React Native app to report and discuss fraud calls and messages.",
    link: "#"
  }
];

const Footer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleScroll = (e, target) => {
    e.preventDefault();
    document.getElementById(target).scrollIntoView({ behavior: "smooth" });
}

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProjects.length);
        setFade(true);
      }, 500); // Fade-out duration
    }, 5000); // Slide change duration

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="max-w-[700px] mx-auto bg-white border-t border-gray-200 mt-10 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center lg:text-left">
        {/* Connect with Me Section */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <h3 className="text-2xl font-semibold text-zinc-950 mb-4">Connect with Me</h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/Rajeev12R"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-800 hover:text-teal-400 transition duration-300"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
            <a
              href="https://stackoverflow.com/users/your-stackoverflow-id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-800 hover:text-teal-400 transition duration-300"
            >
              <FaStackOverflow className="mr-2" /> Stack Overflow
            </a>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/your-linkedin-id/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-800 hover:text-teal-400 transition duration-300"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/your-instagram-id/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-800 hover:text-teal-400 transition duration-300"
            >
              <FaInstagram className="mr-2" /> Instagram
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-center lg:items-center space-y-4">
          <h3 className="text-xl font-semibold text-zinc-950 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-800">
            <li>
              <a href="#"  onClick={(e) => handleScroll(e, "about")} className="hover:text-teal-400 transition duration-300">About Me</a>
            </li>
            <li>
              <a href="#"  onClick={(e) => handleScroll(e, "projects")} className="hover:text-teal-400 transition duration-300">Projects</a>
            </li>
            <li>
              <a href="#"  onClick={(e) => handleScroll(e, "freelance")} className="hover:text-teal-400 transition duration-300">Contact</a>
            </li>
          </ul>
        </div>

        {/* Featured Projects Slideshow */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-xl font-semibold text-zinc-950 mb-4">Featured Projects</h3>
          <div
            className={`p-4 bg-gray-100 rounded-md shadow-lg transition-opacity duration-500 ease-in-out transform ${
              fade ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h4 className="text-lg font-semibold text-gray-900">{featuredProjects[currentIndex].title}</h4>
            <p className="text-gray-700 mb-2">{featuredProjects[currentIndex].description}</p>
            <a
              href={featuredProjects[currentIndex].link}
              className="text-teal-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Rajeev Ranjan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
