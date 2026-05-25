import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">
              About <span className="gradient-text">Brandon</span>
            </h2>
            <div className="about-description">
              <p>
                I'm a <span className="highlight">bold engineer and hacker</span> who thrives at the 
                intersection of software elegance and hardware curiosity. My journey began at 
                <span className="highlight"> Moringa School</span>, where I mastered the fundamentals 
                of full-stack development with Python, Flask, React, and SQL Alchemy ORM.
              </p>
              <p>
                As <span className="highlight">Co-Founder of ASENASS Developers</span>, I've built 
                scalable web applications, REST APIs, and custom learning platforms. Through 
                <span className="highlight"> ASENASS Academy</span>, I've mentored aspiring developers, 
                sharing knowledge in version control, deployment, and modern tooling.
              </p>
              <p>
                Now I'm pushing boundaries into <span className="highlight">embedded systems</span>, 
                <span className="highlight"> wireless experimentation</span>, and 
                <span className="highlight"> RF engineering</span>. From BLE jamming to 
                microcontroller automation, I engineer solutions that bridge digital and physical worlds.
              </p>
            </div>
            <div className="certification-link">
              <a 
                href="https://moringa.my.salesforce-sites.com/certificateStatus?id=a0PQ200000ADeYW" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-button glass neon-purple"
              >
                <span className="tech-font">Verify Moringa Certificate</span>
              </a>
            </div>
          </div>
          <div className="about-visual">
            <div className="tech-stack-grid">
              <div className="tech-category">
                <h3>Software</h3>
                <div className="tech-items">
                  <span>Python</span>
                  <span>React</span>
                  <span>Flask</span>
                  <span>SQL Alchemy</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Hardware</h3>
                <div className="tech-items">
                  <span>RF Engineering</span>
                  <span>SDR Analysis</span>
                  <span>BLE Systems</span>
                  <span>Embedded</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Leadership</h3>
                <div className="tech-items">
                  <span>ASENASS Co-Founder</span>
                  <span>Technical Mentoring</span>
                  <span>Open Source</span>
                  <span>Team Building</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;