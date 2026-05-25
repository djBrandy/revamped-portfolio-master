import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('software');

  const skillCategories = {
    software: {
      title: 'Software Engineering',
      color: '#00ffff',
      skills: [
        { name: 'Python', level: 95, experience: '3+ years' },
        { name: 'React', level: 90, experience: '2+ years' },
        { name: 'Flask', level: 92, experience: '3+ years' },
        { name: 'SQL Alchemy', level: 88, experience: '2+ years' },
        { name: 'JavaScript', level: 85, experience: '2+ years' },
        { name: 'REST APIs', level: 93, experience: '3+ years' }
      ]
    },
    hardware: {
      title: 'Hardware & RF',
      color: '#ff00ff',
      skills: [
        { name: 'RF Engineering', level: 75, experience: '1+ year' },
        { name: 'SDR Analysis', level: 70, experience: '1+ year' },
        { name: 'BLE Systems', level: 78, experience: '1+ year' },
        { name: 'Embedded C++', level: 72, experience: '1+ year' },
        { name: 'Signal Processing', level: 68, experience: '1+ year' },
        { name: 'Arduino/ESP32', level: 80, experience: '1+ year' }
      ]
    },
    leadership: {
      title: 'Leadership & Mentoring',
      color: '#ffff00',
      skills: [
        { name: 'Technical Mentoring', level: 90, experience: '2+ years' },
        { name: 'Team Leadership', level: 85, experience: '2+ years' },
        { name: 'Project Management', level: 82, experience: '2+ years' },
        { name: 'Training Delivery', level: 88, experience: '2+ years' },
        { name: 'Open Source', level: 80, experience: '2+ years' },
        { name: 'Community Building', level: 85, experience: '2+ years' }
      ]
    }
  };

  return (
    <section className="skills">
      <div className="skills-container">
        <h2 className="section-title">
          Technical <span className="gradient-text">Expertise</span>
        </h2>
        
        <div className="skills-navigation">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              className={`nav-btn ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
              style={{
                '--category-color': category.color
              }}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="skills-content">
          <div className="skills-grid">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-experience">{skill.experience}</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{
                      width: `${skill.level}%`,
                      background: skillCategories[activeCategory].color,
                      boxShadow: `0 0 10px ${skillCategories[activeCategory].color}40`
                    }}
                  ></div>
                </div>
                <div className="skill-level tech-font">{skill.level}%</div>
              </div>
            ))}
          </div>
          
          <div className="skills-visualization">
            <div className="radar-chart">
              <div className="radar-grid">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="radar-ring" style={{
                    width: `${(i + 1) * 20}%`,
                    height: `${(i + 1) * 20}%`
                  }}></div>
                ))}
              </div>
              <div className="radar-center">
                <span className="tech-font">{skillCategories[activeCategory].title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;