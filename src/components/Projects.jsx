import React, { useState } from 'react';

const Projects = ({ projects, setProjects }) => {
  const [project, setProject] = useState({ title: '', description: '' });

  const addProject = () => {
    if (project.title && project.description) {
      setProjects([...projects, project]);
      setProject({ title: '', description: '' });
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Projects</h3>
      <input
        type="text"
        value={project.title}
        onChange={(e) => setProject({ ...project, title: e.target.value })}
        placeholder="Project Title"
        style={styles.input}
      />
      <textarea
        value={project.description}
        onChange={(e) => setProject({ ...project, description: e.target.value })}
        placeholder="Project Description"
        style={styles.textarea}
      />
      <button
        onClick={addProject}
        style={styles.button}
      >
        Add Project
      </button>
      <div style={styles.projectList}>
        {projects.map((p, index) => (
          <div key={index} style={styles.projectItem}>
            <h4 style={styles.projectTitle}>{p.title}</h4>
            <p style={styles.projectDescription}>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
     padding: '10px',
    borderRadius: '8px',
    },
  heading: {
    fontSize: '1.75rem',
    color: '#fff', /* White text color */
    marginBottom: '15px'
  },
  input: {
    width: 'calc(100% - 20px)',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    color: '#333',
    marginBottom: '10px',
    boxSizing: 'border-box'
  },
  textarea: {
    width: 'calc(100% - 20px)',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    color: '#333',
    marginBottom: '10px',
    boxSizing: 'border-box',
    height: '100px'
  },
  button: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  },
  buttonHover: {
    backgroundColor: '#0056b3'
  },
  projectList: {
    marginTop: '20px'
  },
  projectItem: {
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '4px',
    marginBottom: '10px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)'
  },
  projectTitle: {
    fontSize: '1.25rem',
    color: '#333',
    marginBottom: '5px'
  },
  projectDescription: {
    fontSize: '1rem',
    color: '#666'
  }
};

export default Projects;
