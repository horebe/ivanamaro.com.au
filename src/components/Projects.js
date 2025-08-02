import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaServer, FaCloud, FaTools } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "GE Healthcare Cloud Migration & Monitoring System",
      description: "Led the development and implementation of a comprehensive cloud migration strategy for GE Healthcare's medical systems infrastructure across Latin America.",
      longDescription: "This project involved migrating critical medical systems from on-premises infrastructure to AWS, Azure, and GCP while maintaining HIPAA compliance and zero-downtime requirements. The solution included custom monitoring dashboards, automated health checks, and incident response systems.",
      technologies: ["AWS", "Azure", "GCP", "Docker", "Jenkins", "Grafana", "Zabbix", "HIPAA Compliance"],
      achievements: [
        "Reduced case volume by 68% through automated monitoring and proactive incident detection",
        "Implemented custom health checks for medical imaging systems across 50+ hospitals",
        "Designed multi-cloud architecture ensuring 99.9% uptime for critical medical applications",
        "Led team of 11 technicians across LATAM for seamless migration execution"
      ],
      image: null,
      category: "Cloud Infrastructure",
      icon: <FaCloud />
    },
    {
      title: "UOL E-commerce Infrastructure Automation",
      description: "Designed and implemented automated monitoring and deployment systems for UOL's e-commerce platform serving millions of users across Brazil.",
      longDescription: "Developed a comprehensive automation solution for UOL's 10,000+ server infrastructure, including web scraping-based monitoring, CI/CD pipelines, and automated incident response. The system handled payment processing, inventory management, and user transactions with high availability requirements.",
      technologies: ["Jenkins", "Docker", "Puppet", "Git", "Web Scraping", "Python", "Shell Scripting"],
      achievements: [
        "Reduced downtime by 20% through proactive monitoring and automated responses",
        "Implemented web scraping-based monitoring system for real-time homepage status alerts",
        "Automated deployment pipelines reducing release time from hours to minutes",
        "Managed infrastructure supporting 10,000+ servers and millions of daily transactions"
      ],
      image: null,
      category: "DevOps & Automation",
      icon: <FaTools />
    },
    {
      title: "Medical Systems Integration & Interoperability Platform",
      description: "Developed and maintained integration solutions for medical systems ensuring seamless data exchange between different healthcare applications and devices.",
      longDescription: "Created a robust integration platform that enabled medical devices, PACS systems, and hospital information systems to communicate effectively. The solution included SSL certificate management, VPN connectivity, and secure data transmission protocols compliant with medical industry standards.",
      technologies: ["Java", "Tomcat", "Jboss", "SSL Certificates", "VPN", "Medical Protocols", "DICOM"],
      achievements: [
        "Implemented SSL certificate management for secure medical data transmission",
        "Optimized JVM performance for Java-based medical applications",
        "Developed VPN troubleshooting procedures for remote medical device connectivity",
        "Ensured HIPAA compliance for all medical data exchange protocols"
      ],
      image: null,
      category: "System Integration",
      icon: <FaServer />
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-container">
          <div className="project-navigation">
            <button className="nav-btn prev" onClick={prevProject}>
              ‹
            </button>
            <div className="project-indicators">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${activeProject === index ? 'active' : ''}`}
                  onClick={() => setActiveProject(index)}
                />
              ))}
            </div>
            <button className="nav-btn next" onClick={nextProject}>
              ›
            </button>
          </div>

          <div className="project-showcase">
            <div className="project-image">
              <div className="project-icon-placeholder">
                <div className="icon-container">
                  {projects[activeProject].icon}
                </div>
                <h3>{projects[activeProject].title}</h3>
                <p>{projects[activeProject].category}</p>
              </div>
              <div className="project-overlay">
                <div className="project-category">
                  {projects[activeProject].icon}
                  <span>{projects[activeProject].category}</span>
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <h3>{projects[activeProject].title}</h3>
              <p className="project-description">{projects[activeProject].longDescription}</p>
              
              <div className="project-achievements">
                <h4>Key Achievements</h4>
                <ul>
                  {projects[activeProject].achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-technologies">
                <h4>Technologies Used</h4>
                <div className="tech-stack">
                  {projects[activeProject].technologies.map((tech, index) => (
                    <span key={index} className="tech-item">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-actions">
                <button className="btn">
                  <FaGithub />
                  View Details
                </button>
                <button className="btn btn-secondary">
                  <FaExternalLinkAlt />
                  Live Demo
                </button>
              </div>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`project-card ${activeProject === index ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
              >
                <div className="card-header">
                  <div className="card-icon">
                    {project.icon}
                  </div>
                  <div className="card-category">{project.category}</div>
                </div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="card-tech">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag">+{project.technologies.length - 3} more</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 