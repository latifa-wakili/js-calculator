import React, { useState } from 'react';
import PortfolioItem from '../components/PortfolioItem';
import Modal from 'react-modal';

const projects = [
  {
    title: 'Project 1',
    description: 'A responsive website built with React and Tailwind CSS.',
    image: '/assets/Portfolio-page.png',
    link: 'https://portfolio-page-jzuba5j4c-latifa-wakilis-projects.vercel.app/',
  },
  {
    title: 'Project 2',
    description: 'A Pok-mon-Search-App built with HTML, CSS and JavaScript.',
    image: '/assets/pikapp.png',
    link: 'https://latifa-wakili.github.io/Pok-mon-Search-App/',
  },
  {
    title: 'Project 3',
    description: 'Cash-Register with HTML, CSS, and JavaScript.',
    image: '/assets/cashRagister.png',
    link: 'https://latifa-wakili.github.io/-Cash-Register/',
  },
  {
    title: 'Project 4',
    description: 'library-managment with React and tailwindcss.',
    image: '/assets/library.png',
    link: 'https://library-rgo73t345-latifa-wakilis-projects.vercel.app/',
  },
  {
    title: 'Project 5',
    description: 'Product-card with HTML and CSS.',
    image: '/assets/previewCard.jpg',
    link: 'https://latifa-wakili.github.io/Product-card/',
  },
  {
    title: 'Project 6',
    description: 'SocialLink-card with HTML and CSS.',
    image: '/assets/social-card.png',
    link: 'https://latifa-wakili.github.io/Wakili-Social-links/',
  },
];

Modal.setAppElement('#root');
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
    const nextIndex = (currentIndex + 1) % projects.length; 
    setCurrentProject(projects[nextIndex]);
  };

  const goToPreviousProject = () => {
    const currentIndex = projects.indexOf(currentProject);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentProject(projects[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold text-orange-500 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
              key={index}
              onClick={() => openModal(project)} 
            >
              <PortfolioItem {...project} />
            </div>
          ))}
        </div>
      </div>
      {currentProject && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="bg-black rounded-lg p-4 max-w-[90%] sm:max-w-lg mx-auto mt-20 transition-transform duration-300 transform scale-100"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center transition-opacity duration-300"
        >
          <div className="flex flex-col items-center">
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 max-h-[300px] sm:max-h-[400px] object-cover"
            />
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-4 text-center">
              {currentProject.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mt-2 text-center">
              {currentProject.description}
            </p>
            <a
              href={currentProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:underline mt-4 text-sm sm:text-base"
            >
              View Project
            </a>
            <div className="flex justify-between w-full mt-4 space-x-2">
              <button
                onClick={goToPreviousProject}
                className="bg-gray-700 text-white text-sm sm:text-base px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Previous
              </button>
              <button
                onClick={goToNextProject}
                className="bg-gray-700 text-white text-sm sm:text-base px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Next
              </button>
            </div>
            <button
              onClick={closeModal}
              className="bg-red-600 text-white text-sm sm:text-base px-4 py-2 rounded-md mt-4 hover:bg-red-500"
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