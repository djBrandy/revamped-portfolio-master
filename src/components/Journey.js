import React from 'react';
import './Journey.css';

const Journey = () => {
  const milestones = [
    {
      year: '2024',
      title: 'Moringa School',
      description: 'Mastered full-stack development with Python, Flask, React, and SQL Alchemy ORM',
      tech: ['Python', 'Flask', 'React', 'SQL Alchemy'],
      type: 'education'
    },
    {
      year: '2024',
      title: 'ASENASS Developers Co-Founder',
      description: 'Built scalable web applications, REST APIs, and custom learning platforms',
      tech: ['REST APIs', 'Web Apps', 'Deployment', 'Architecture'],
      type: 'leadership'
    },
    {
      year: '2024',
      title: 'ASENASS Academy Mentor',
      description: 'Delivered hands-on training in version control, deployment, and modern tooling',
      tech: ['Git', 'CI/CD', 'Mentoring', 'Training'],
      type: 'mentorship'
    },
    {
      year: '2025',
      title: 'RF Engineering Transition',
      description: 'Exploring embedded systems, wireless experimentation, and signal analysis',
      tech: ['RF Engineering', 'SDR', 'BLE', 'Embedded Systems'],
      type: 'innovation'
    }
  ];

  return (
    <section className="journey">
      <div className="journey-container">
        <h2 className="section-title">
          Technical <span className="gradient-text">Evolution</span>
        </h2>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className={`milestone milestone-${milestone.type}`}>
              <div className="milestone-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="milestone-content glass">
                <div className="milestone-year tech-font">{milestone.year}</div>
                <h3 className="milestone-title">{milestone.title}</h3>
                <p className="milestone-description">{milestone.description}</p>
                <div className="milestone-tech">
                  {milestone.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;