import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate DevOps Engineer and Cloud Infrastructure specialist with expertise 
              in designing, implementing, and maintaining scalable cloud solutions. With a strong 
              foundation in both development and operations, I bridge the gap between software 
              development and IT operations to deliver efficient, reliable, and secure systems.
            </p>
            <p>
              My experience spans across various cloud platforms including AWS, Azure, and Google Cloud, 
              along with expertise in containerization technologies like Docker and Kubernetes. 
              I specialize in infrastructure as code, CI/CD pipelines, monitoring, and automation 
              to streamline development workflows and improve system reliability.
            </p>
            <p>
              I am committed to continuous learning and staying up-to-date with the latest 
              technologies and best practices in the DevOps and cloud computing space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 