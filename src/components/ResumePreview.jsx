import React from 'react';
import './ResumePreview.css';

const ResumePreview = ({ profileSummary, skills, hobbies, projects, experience, education, contact, image, socialLinks, template }) => (
  <div className={`resume-preview ${template}`}>
    <div className="left-section">
      <div className="profile-header">
        {image && <img src={image} alt="Profile" className="profile-imageP" />}
        <h1>{contact.name}</h1>
        <p>{contact.phone} | {contact.email}</p>
        <p>{profileSummary}</p>
      </div>
      <div className="skillsP">
        <h3>Skills</h3>
        <ul>{skills.map((skill, index) => <li key={index}>{skill}</li>)}</ul>
      </div>
      <div className="hobbiesP">
        <h3>Hobbies</h3>
        <ul>{hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}</ul>
      </div>
      <div className="social-linksP">
        <h3>Social Links</h3>
        <p><a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>
        <p><a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
       </div>
    </div>
    
    <div className="right-section">
      <div className="projectsP">
        <h3>Projects</h3>
        {projects.map((p, index) => (
          <div key={index}>
            <h4>{p.title}</h4>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
      <div className="experienceP">
        <h3>Experience</h3>
        {experience.map((exp, index) => (
          <div key={index}>
            <h4>{exp.title} at {exp.company}</h4>
            <p>{exp.duration}</p>
          </div>
        ))}
      </div>
      <div className="educationP">
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <h4>{edu.level} from {edu.institution}</h4>
            <p>{edu.year}</p>
          </div>
        ))}
      </div>
      
    </div>
  </div>
);

export default ResumePreview;
