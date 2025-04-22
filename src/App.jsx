import React from "react";
import Imgae from "./assets/ProfilePic.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const App = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div className="min-h-screen flex gap-32 justify-center items-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6">
        <div className="left">
          <div className="w-[300px] h-[300px] rounded-full">
            <picture>
              <img
                src={Imgae}
                alt={Imgae}
                className="w-full object-cover rounded-full"
              />
            </picture>
          </div>
        </div>
        <div className="right flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm Subroto Kumar Barman
          </h1>
          <p className="text-xl md:text-2xl">
            Front-End Developer | React Enthusiast
          </p>
          <p className="mt-3 text-xl md:text-2xl">
            HTML| CSS5 | BootStrap | Tailwind CSS | JavaScript | React.js
          </p>
          <a
            href="#projects"
            className="mt-6 bg-white text-indigo-600 font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto" id="about">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm a passionate front-end developer from Bangladesh, currently diving
          deep into the MERN stack. I enjoy creating responsive, interactive UIs
          and learning new web technologies. As a creative and growth-driven
          Front-End Developer, I strive to turn complex problems into elegant,
          intuitive web experiences. With a solid foundation in HTML, CSS,
          JavaScript, and React, I’m passionate about crafting interfaces that
          not only look good but feel right. My goal is to join a
          forward-thinking team where innovation, collaboration, and continuous
          learning drive impact and user delight.
        </p>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-100 py-16 px-6" id="projects">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card Example */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2">
                My Portfolio Website
              </h3>
              <p className="mb-4">
                A personal portfolio site built with React and TailwindCSS.
              </p>
              <a
                href="#"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Live Preview →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Chating Aplication</h3>
              <p className="mb-4">
             
                A real-time messaging platform enabling users to send and
                receive messages instantly.
              </p>
              <a
                href="https://chattingaplication.netlify.app/"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Live Preview →
              </a>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2">To-Do App</h3>
              <p className="mb-4">
                A simple task manager with local storage and sleek UI.
              </p>
              <a
                href="#"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Live Preview →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto" id="contact">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-4">
          Feel free to reach out via email or connect on LinkedIn.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="mailto:subrotokumarbarman@gmail.com"
            className="bg-indigo-600 text-white px-3 rounded hover:bg-indigo-700 flex gap-1 items-center justify-center"
          >
            <span>
              <MdEmail />
            </span>
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/subroto-kumar-barman-21620724b/"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 flex gap-1 items-center justify-center"
          >
            <span>
              <FaLinkedin />
            </span>
            LinkedIn
          </a>
          <a
            href="https://github.com/Subroto112001"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 flex gap-1 items-center justify-center"
          >
            <span>
              <FaGithub />
            </span>
            GitHub
          </a>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Subroto Kumar Barman. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
