import React, { useState } from 'react';
import PortfolioItem from '../components/PortfolioItem';
import Modal from 'react-modal';

const projects = [
  {
    title: 'Project 1',
    description: 'A responsive website built with React and Tailwind CSS.',
    image: '/assets/country-code.png',
    link: 'https://link_to_project1.com',
  },
  {
    title: 'Project 2',
    description: 'A Pok-mon-Search-App built with HTML, CSS and JavaScript.',
    image: '/assets/pikapp.png',
    link: 'https://latifa-wakili.github.io/Pok-mon-Search-App/',
  },
  {
    title: 'Project 3',
    description: 'E-commerce platform with React, Redux, and Firebase.',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://link_to_project3.com',
  },
];

Modal.setAppElement('#root'); // برای جلوگیری از ارورهای دسترسی

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  const goToNextProject = () => {
    const currentIndex = projects.indexOf(currentProject);
    const nextIndex = (currentIndex + 1) % projects.length; // رفتن به پروژه بعدی
    setCurrentProject(projects[nextIndex]);
  };

  const goToPreviousProject = () => {
    const currentIndex = projects.indexOf(currentProject);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length; // رفتن به پروژه قبلی
    setCurrentProject(projects[prevIndex]);
  };

  return (
    <div className="container min-h-screen mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            className="bg-black rounded-lg shadow-md overflow-hidden cursor-pointer"
            key={index}
            onClick={() => openModal(project)} // کلیک برای باز کردن مودال
          >
            <PortfolioItem {...project} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {currentProject && (
        <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="bg-black rounded-lg p-4 max-w-3xl mx-auto mt-20 transition-transform duration-300 transform scale-100"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center transition-opacity duration-300"
      >
        <div className="flex flex-col items-center">
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
          />
          <h2 className="text-2xl font-bold text-white mt-4">
            {currentProject.title}
          </h2>
          <p className="text-gray-300 mt-2">{currentProject.description}</p>
          <a
            href={currentProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline mt-4"
          >
            View Project
          </a>
          <div className="flex justify-between w-full mt-4">
            <button
              onClick={goToPreviousProject}
              className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              Previous
            </button>
            <button
              onClick={goToNextProject}
              className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              Next
            </button>
          </div>
          <button
            onClick={closeModal}
            className="bg-red-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-500"
          >
            Close
          </button>
        </div>
      </Modal>
      )}
    </div>
  );
};

export default Portfolio;