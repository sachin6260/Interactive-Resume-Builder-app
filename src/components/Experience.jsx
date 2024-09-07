import React, { useState } from 'react';

const Experience = ({ experience, setExperience }) => {
  const [job, setJob] = useState({ title: '', company: '', duration: '' });

  const addExperience = () => {
    if (job.title && job.company && job.duration) {
      setExperience([...experience, job]);
      setJob({ title: '', company: '', duration: '' });
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Experience</h3>
      <input
        type="text"
        value={job.title}
        onChange={(e) => setJob({ ...job, title: e.target.value })}
        placeholder="Job Title"
        style={styles.input}
      />
      <input
        type="text"
        value={job.company}
        onChange={(e) => setJob({ ...job, company: e.target.value })}
        placeholder="Company"
        style={styles.input}
      />
      <input
        type="text"
        value={job.duration}
        onChange={(e) => setJob({ ...job, duration: e.target.value })}
        placeholder="Duration"
        style={styles.input}
      />
      <button onClick={addExperience} style={styles.button}>Add Experience</button>
      <div style={styles.experienceList}>
        {experience.map((exp, index) => (
          <div key={index} style={styles.experienceItem}>
            <h4 style={styles.experienceTitle}>{exp.title} at {exp.company}</h4>
            <p style={styles.experienceDuration}>{exp.duration}</p>
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
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    color: '#333',
    marginBottom: '10px',
    boxSizing: 'border-box'
  },
  button: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  },
  buttonHover: {
    backgroundColor: '#465a70'
  },
  experienceList: {
    marginTop: '20px'
  },
  experienceItem: {
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '4px',
    marginBottom: '10px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)'
  },
  experienceTitle: {
    fontSize: '1.25rem',
    color: '#333',
    marginBottom: '5px'
  },
  experienceDuration: {
    fontSize: '1rem',
    color: '#666'
  }
};

export default Experience;
