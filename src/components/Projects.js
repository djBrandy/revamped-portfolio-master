import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'ASENASS Learning Platform',
      description: 'Custom learning management system built with Flask and React, featuring real-time progress tracking and interactive coding challenges.',
      tech: ['Python', 'Flask', 'React', 'SQL Alchemy', 'WebSocket'],
      category: 'fullstack',
      status: 'production',
      impact: '500+ students trained'
    },
    {
      id: 2,
      title: 'BLE Signal Jammer',
      description: 'Hardware project exploring Bluetooth Low Energy vulnerabilities and signal interference patterns using SDR techniques.',
      tech: ['C++', 'Arduino', 'RF Engineering', 'SDR', 'Signal Processing'],
      category: 'hardware',
      status: 'research',
      impact: 'Security research'
    },
    {
      id: 3,
      title: 'REST API Framework',
      description: 'Scalable API architecture with authentication, rate limiting, and comprehensive documentation for rapid development.',
      tech: ['Python', 'Flask', 'JWT', 'Redis', 'Docker'],
      category: 'backend',
      status: 'open-source',
      impact: '10+ projects deployed'
    },
    {
      id: 4,
      title: 'Signal Visualization Dashboard',
      description: 'Real-time RF signal analysis tool with interactive visualizations for frequency domain analysis and pattern recognition.',
      tech: ['React', 'D3.js', 'WebGL', 'Python', 'NumPy'],
      category: 'visualization',
      status: 'development',
      impact: 'Research tool'
    },
    {
      id: 5,
      title: 'Microcontroller Automation Suite',
      description: 'IoT automation system with wireless sensor networks and remote monitoring capabilities.',
      tech: ['C++', 'ESP32', 'MQTT', 'React', 'Node.js'],
      category: 'iot',
      status: 'prototype',
      impact: 'Smart home integration'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full-Stack' },
    { key: 'hardware', label: 'Hardware' },
    { key: 'backend', label: 'Backend' },
    { key: 'visualization', label: 'Visualization' },
    { key: 'iot', label: 'IoT' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card glass">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className={`project-status status-${project.status}`}>
                  {project.status}
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <div className="project-footer">
                <div className="project-impact">
                  <span className="impact-label">Impact:</span>
                  <span className="impact-value">{project.impact}</span>
                </div>
                <div className="project-actions">
                  <button className="action-btn primary">View Details</button>
                  <button className="action-btn secondary">Source</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;