import React, { useState } from 'react';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "GE HealthCare",
      position: "System Engineer",
      duration: "2016 – 2024",
      location: "Latin America",
      description: "Technical team lead responsible for escalated incidents and cloud adoption initiatives.",
      achievements: [
        "Reduced case volume by 68% through root cause analysis and continuous process improvement",
        "Managed databases (Oracle, MySQL, SQL Server, Sybase) and IT infrastructure solutions",
        "Defined and tracked team KPIs and ensured SLA adherence",
        "Acted as escalation point and mentor for junior technicians",
        "Collaborated with cross-functional teams for seamless transitions between pre-sales, installation, and post-sales support",
        "Maintained proactive monitoring using custom active/passive health checks"
      ],
      technologies: ["AWS", "GCP", "Azure", "Wireshark", "JMeter", "JVM", "Grafana", "Zabbix", "VMware vSphere"]
    },
    {
      company: "UOL",
      position: "System Administrator – Ecommerce",
      duration: "2015 – 2018",
      location: "Brazil",
      description: "Managed UOL's e-commerce and payment gateway infrastructure comprising 10,000+ servers.",
      achievements: [
        "Managed UOL's e-commerce and payment gateway infrastructure comprising 10,000+ servers",
        "Reduced downtime by 20% through proactive monitoring and optimized operational procedures",
        "Designed and implemented a web scraping–based monitoring system for the UOL homepage",
        "Created automation scripts to support real-time monitoring and preventive actions",
        "Led feature deployments and release cycles across QA, staging, and production environments",
        "Leveraged CI/CD tools including Jenkins, Git, Puppet, and Docker to automate deployment pipelines",
        "Diagnosed and resolved complex issues related to networking, security, and storage"
      ],
      technologies: ["Jenkins", "Git", "Puppet", "Docker", "CI/CD", "Web Scraping", "Monitoring"]
    },
    {
      company: "Imovelweb",
      position: "Technical Support Analyst",
      duration: "2012 – 2014",
      location: "Brazil",
      description: "Provided end-user support and implemented structured IT processes across multiple branches.",
      achievements: [
        "Provided end-user support across head office and multiple branches nationwide",
        "Implemented structured support procedures and tools, significantly improving service quality",
        "Introduced and deployed OCS Inventory NG for asset management and remote monitoring",
        "Developed Linux expertise under mentorship, taking on system-level tasks within three months",
        "Played a hands-on role in relocating the company to a new branch",
        "Demonstrated strong desire to grow technically in network and system administration"
      ],
      technologies: ["Linux", "OCS Inventory NG", "Asset Management", "Network Administration"]
    },
    {
      company: "Butantan Institute",
      position: "Infrastructure & Technical Support",
      duration: "2010 – 2011",
      location: "Brazil",
      description: "Supported IT infrastructure of one of the most respected biomedical research institutions in Latin America.",
      achievements: [
        "Supported IT infrastructure of Butantan Foundation, a respected biomedical research institution",
        "Led initiatives to organize and professionalize daily operations in a highly sensitive research environment",
        "Participated in comprehensive rack redesign project including fiber optic cable replacement",
        "Performed hands-on support across all research labs and departments",
        "Implemented basic system monitoring and maintenance tools on legacy computers",
        "Earned first IT Certification (MCP – Windows 7) while working in this role"
      ],
      technologies: ["Windows 7", "Fiber Optics", "System Monitoring", "Legacy Systems"]
    },
    {
      company: "Consulters Group",
      position: "Technical Support",
      duration: "2008 – 2010",
      location: "Brazil",
      description: "Junior technician quickly promoted to Analyst, delivering 2nd level support to enterprise clients.",
      achievements: [
        "Joined as junior technician at age 17, quickly promoted to Analyst",
        "Successfully led IT inventory projects for major clients (Pamcary, Braskem, Air Liquide)",
        "Delivered 2nd level support to both internal employees and external enterprise clients",
        "Supported 'Software and Network Factory' team with Windows Server 2003/2008 infrastructure",
        "Implemented and maintained Symantec Backup Exec 11 for backup and disaster recovery",
        "Developed and deployed login scripts using PsTools to automate user operations",
        "Managed internal and external email accounts via exchange"
      ],
      technologies: ["Windows Server 2003/2008", "Active Directory", "DNS", "DHCP", "Symantec Backup Exec", "Exchange"]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="experience-container">
          <div className="experience-tabs">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <div className="tab-content">
                  <div className="tab-company">{exp.company}</div>
                  <div className="tab-position">{exp.position}</div>
                  <div className="tab-duration">{exp.duration}</div>
                </div>
              </button>
            ))}
          </div>
          
          <div className="experience-details">
            <div className="experience-header">
              <h3>{experiences[activeTab].position}</h3>
              <div className="experience-meta">
                <div className="meta-item">
                  <FaBuilding />
                  <span>{experiences[activeTab].company}</span>
                </div>
                <div className="meta-item">
                  <FaCalendarAlt />
                  <span>{experiences[activeTab].duration}</span>
                </div>
                <div className="meta-item">
                  <FaMapMarkerAlt />
                  <span>{experiences[activeTab].location}</span>
                </div>
              </div>
            </div>
            
            <div className="experience-description">
              <p>{experiences[activeTab].description}</p>
            </div>
            
            <div className="experience-achievements">
              <h4>Key Achievements</h4>
              <ul>
                {experiences[activeTab].achievements.map((achievement, index) => (
                  <li key={index}>
                    <FaStar />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="experience-technologies">
              <h4>Technologies & Tools</h4>
              <div className="tech-tags">
                {experiences[activeTab].technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 