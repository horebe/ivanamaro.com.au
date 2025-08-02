import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <div className="nav-logo">
              <h2>Ivan Amaro</h2>
            </div>
            <ul className="nav-menu">
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
              <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
              <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
              <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Ivan Amaro</span>
              </h1>
              <h2 className="hero-subtitle">
                DevOps & Cloud Infrastructure Specialist
              </h2>
              <p className="hero-description">
                Over a decade of experience in systems administration, automation, and cloud solutions. 
                AWS Certified professional passionate about leveraging innovative solutions to solve complex problems.
              </p>
              <div className="hero-buttons">
                <button className="btn" onClick={() => scrollToSection('projects')}>
                  View My Work
                </button>
                <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                  Get In Touch
                </button>
              </div>
              <div className="hero-contact">
                <div className="contact-item">
                  <FaEnvelope />
                  <span>ivan.amaro@email.com</span>
                </div>
                <div className="contact-item">
                  <FaPhone />
                  <span>+61 0412 452 565</span>
                </div>
                <div className="contact-item">
                  <FaLinkedin />
                  <a href="https://www.linkedin.com/in/devopsivanamaro" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/devopsivanamaro
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src="/EOFZ1566.JPG" alt="Ivan Amaro" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 