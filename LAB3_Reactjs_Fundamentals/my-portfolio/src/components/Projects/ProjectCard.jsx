import React from 'react';
import './Projects.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-overlay">
          <div className="project-links">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
              >
                GitHub
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="technology-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;