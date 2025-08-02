import React from 'react';
import { FaCloud, FaServer, FaTools, FaShieldAlt, FaDatabase, FaNetworkWired } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Infrastructure",
      icon: <FaCloud />,
      skills: [
        "AWS (EC2, S3, RDS, Lambda, CloudFormation)",
        "Azure (Virtual Machines, Storage, Functions)",
        "Google Cloud Platform (GCP)",
        "Cloud Migration & Architecture",
        "Multi-cloud Strategy & Management"
      ]
    },
    {
      title: "DevOps & Automation",
      icon: <FaTools />,
      skills: [
        "CI/CD Pipelines (Jenkins, GitHub Actions)",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Configuration Management (Puppet, Chef)",
        "Containerization (Docker, Kubernetes)",
        "Version Control (Git, GitLab)"
      ]
    },
    {
      title: "System Administration",
      icon: <FaServer />,
      skills: [
        "Linux Administration (RHEL, SUSE, CentOS)",
        "Shell Scripting (Bash, Python)",
        "System Monitoring (Zabbix, CloudWatch, Grafana)",
        "Performance Tuning & Optimization",
        "High Availability & Disaster Recovery"
      ]
    },
    {
      title: "Security & Compliance",
      icon: <FaShieldAlt />,
      skills: [
        "Incident Response & Security Mitigation",
        "VPN Troubleshooting & Secure Connectivity",
        "SSL Certificate Management",
        "HIPAA Compliance (Medical Data)",
        "Security Best Practices & Hardening"
      ]
    },
    {
      title: "Database Management",
      icon: <FaDatabase />,
      skills: [
        "Oracle Database Administration",
        "MySQL & SQL Server Management",
        "Sybase Database Operations",
        "Database Performance Optimization",
        "Backup & Recovery Strategies"
      ]
    },
    {
      title: "Networking & Integration",
      icon: <FaNetworkWired />,
      skills: [
        "Network Infrastructure Management",
        "System Integration & Interoperability",
        "Cross-functional Team Collaboration",
        "Global Network & Security Teams",
        "VPN & Remote Access Solutions"
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Competencies</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-category-header">
                <div className="skill-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <h3>Professional Values</h3>
            <ul>
              <li>Proactive, reliable, and adaptable in fast-paced environments</li>
              <li>Culturally agile with experience in multinational teams</li>
              <li>Committed to continuous improvement and learning</li>
              <li>Strong communicator with team leadership experience</li>
              <li>High ethical standards and continuous professional development</li>
            </ul>
          </div>
          
          <div className="summary-card">
            <h3>Current Focus</h3>
            <ul>
              <li>React Development (Web Development)</li>
              <li>Fortinet Network Security</li>
              <li>AWS Certified Solutions Architect - Associate (2025)</li>
              <li>Certificate IV in Leadership & Management</li>
              <li>Full-stack development and cybersecurity practices</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 