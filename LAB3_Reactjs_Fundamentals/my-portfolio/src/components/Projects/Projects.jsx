import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'The web application can be downloaded and uploaded to Google Drive, but you must log in first.',
    technologies: ['Node.js', 'exp', 'express.js'],
    image: 'https://i.ibb.co/7d5x0NM0/1.png',
    github: 'https://github.com/Panuwat-ta/wedapp-link',
    demo: 'https://panuwat.vercel.app/'
  },
  {
    id: 2,
    title: 'game-pc-pixel-windows',
    description: 'Pixel RPG game to play through level.',
    technologies: ['unity', 'C#', 'model 2d'],
    image: 'https://i.ibb.co/60vCcjz8/2.png',
    github: 'https://github.com/panuwatta/RPG_MONSTER',
    demo: 'https://rpg-monster.onrender.com'
  },
  {
    id: 3,
    title: 'mini-ecommerce-collaboration',
    description: 'My Simple Store web app.',
    technologies: ['html', 'css', 'javascript'],
    image: 'https://i.ibb.co/Fb1WpQgC/3.png',
    github: 'https://github.com/AkkapanSE/mini-ecommerce-collaboration',
    demo: 'https://akkapanse.github.io/mini-ecommerce-collaboration'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio website showcasing projects and skills.',
    technologies: ['html', 'css', 'javascript'],
    image: 'https://i.ibb.co/s9Q5cm7g/4.png',
    github: 'https://github.com/Panuwat-ta/portfolio-website',
    demo: 'https://panuwat-ta.github.io/portfolio-website'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio website showcasing projects and skills.',
    technologies: ['html', 'css', 'javascript'],
    image: 'https://i.ibb.co/s9Q5cm7g/4.png',
    github: 'https://github.com/Panuwat-ta/portfolio-website',
    demo: 'https://panuwat-ta.github.io/portfolio-website'
  }
];

function Projects() {
  const [filter, setFilter] = useState('All');

  const allTechnologies = ['All', ...new Set(
    projectsData.flatMap(project => project.title)
  )];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project =>
      project.title.includes(filter)
    );

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my projects.
        </p>

        <div className="filter-controls">
          {allTechnologies.map(tech => (
            <button
              key={tech}
              className={`filter-btn ${filter === tech ? 'active' : ''}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;