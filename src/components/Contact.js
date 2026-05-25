import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'dandobrandon0@gmail.com',
      link: 'mailto:dandobrandon0@gmail.com'
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'Timon Brandon Dando',
      link: 'https://www.linkedin.com/in/timon-dando-b713a5261/'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: '@djBrandy',
      link: 'https://github.com/djBrandy'
    },
    {
      icon: '🏢',
      label: 'ASENASS',
      value: 'Co-Founder',
      link: 'https://www.asenass.com/'
    }
  ];

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="contact-description">
              Ready to collaborate on cutting-edge projects? Whether you're interested in 
              <span className="highlight"> full-stack development</span>, 
              <span className="highlight"> RF engineering</span>, or 
              <span className="highlight"> technical mentoring</span>, let's build something extraordinary together.
            </p>
            
            <div className="contact-methods">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method glass"
                >
                  <div className="contact-icon">{contact.icon}</div>
                  <div className="contact-details">
                    <div className="contact-label">{contact.label}</div>
                    <div className="contact-value tech-font">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="certificate-section">
              <h3>Credentials</h3>
              <a 
                href="https://moringa.my.salesforce-sites.com/certificateStatus?id=a0PQ200000ADeYW"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link glass neon-purple"
              >
                <div className="cert-icon">🎓</div>
                <div className="cert-info">
                  <div className="cert-title">Moringa School Certificate</div>
                  <div className="cert-subtitle tech-font">Software Engineering</div>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="contact-form glass" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn neon-blue">
                <span className="tech-font">Send Message</span>
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer">
          <div className="footer-content">
            <p className="tech-font">
              &copy; 2025 Brandon Dando | Bridging Software & Hardware
            </p>
            <div className="footer-links">
              <span>Built with React & Passion</span>
              <span>•</span>
              <span>Brandy's Embedded Adventures</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;