import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Full-Stack Developer',
    'RF Engineer',
    'Hardware Hacker',
    'Signal Analyst',
    'Tech Mentor'
  ];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">
              Brandon <span className="gradient-text">Dando</span>
            </h1>
            <div className="hero-role">
              <span className="tech-font">&gt; {text}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-description">
              Bridging the gap between <span className="highlight">software elegance</span> and 
              <span className="highlight"> hardware curiosity</span>. From Flask APIs to RF signals, 
              I engineer solutions that push boundaries.
            </p>
            <div className="hero-cta">
              <button 
                className="cta-primary glass neon-blue"
                onClick={() => document.querySelector('.projects').scrollIntoView({ behavior: 'smooth' })}
              >
                Explore My Work
              </button>
              <a 
                href="https://moringa.my.salesforce-sites.com/certificateStatus?id=a0PQ200000ADeYW"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary"
              >
                View Certificate
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="signal-visualization">
              <div className="signal-wave"></div>
              <div className="signal-wave"></div>
              <div className="signal-wave"></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;