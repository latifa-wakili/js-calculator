import React from 'react';
import PortfolioItem from '../components/PortfolioItem';

const projects = [
  {
    title: 'Project 1',
    description: 'A responsive website built with React and Tailwind CSS.',
    image: '/assets/country-code.png', // تصویر پروژه 1
    link: 'https://link_to_project1.com',
  },
  {
    title: 'Project 2',
    description: 'A Pok-mon-Search-App built with HTML, CSS and JavaScript.',
    image: '', // تصویر پروژه 2
    link: 'https://latifa-wakili.github.io/Pok-mon-Search-App//',
  },
  {
    title: 'Project 3',
    description: 'E-commerce platform with React, Redux, and Firebase.',
    image: 'https://via.placeholder.com/300x200', // تصویر پروژه 3
    link: 'https://link_to_project3.com',
  },

  {
    title: 'Project 4',
    description: 'A responsive website built with React and Tailwind CSS.',
    image: './src/assets/', // تصویر پروژه 1
    link: 'https://link_to_project1.com',
  },
  {
    title: 'Project 5',
    description: 'A dynamic portfolio built with Next.js and Tailwind CSS.',
    image: 'https://via.placeholder.com/300x200', // تصویر پروژه 2
    link: 'https://link_to_project2.com',
  },
  {
    title: 'Project 6',
    description: 'E-commerce platform with React, Redux, and Firebase.',
    image: 'https://via.placeholder.com/300x200', // تصویر پروژه 3
    link: 'https://link_to_project3.com',
  },
  // می‌توانید پروژه‌های بیشتر اضافه کنید
];

const Portfolio = () => {
  return (
    <div className="container min-h-screen mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div className="bg-black rounded-lg shadow-md overflow-hidden" key={index}>
            <PortfolioItem {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;