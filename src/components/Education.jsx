import React, { useState } from 'react';

const Education = ({ education, setEducation }) => {
  const [edu, setEdu] = useState({ level: '', institution: '', year: '' });

  const addEducation = () => {
    if (edu.level && edu.institution && edu.year) {
      setEducation([...education, edu]);
      setEdu({ level: '', institution: '', year: '' });
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Education</h3>
      <input
        type="text"
        value={edu.level}
        onChange={(e) => setEdu({ ...edu, level: e.target.value })}
        placeholder="Education Level (e.g., 10th, 12th, Graduation)"
        style={styles.input}
      />
      <input
        type="text"
        value={edu.institution}
        onChange={(e) => setEdu({ ...edu, institution: e.target.value })}
        placeholder="Institution"
        style={styles.input}
      />
      <input
        type="text"
        value={edu.year}
        onChange={(e) => setEdu({ ...edu, year: e.target.value })}
        placeholder="Year of Passing"
        style={styles.input}
      />
      <button onClick={addEducation} style={styles.button}>Add Education</button>
      <div style={styles.educationList}>
        {education.map((edu, index) => (
          <div key={index} style={styles.educationItem}>
            <h4 style={styles.educationTitle}>{edu.level} from {edu.institution}</h4>
            <p style={styles.educationYear}>{edu.year}</p>
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
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  },
  buttonHover: {
    backgroundColor: '#0056b3'
  },
  educationList: {
    marginTop: '20px'
  },
  educationItem: {
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '4px',
    marginBottom: '10px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)'
  },
  educationTitle: {
    fontSize: '1.25rem',
    color: '#333',
    marginBottom: '5px'
  },
  educationYear: {
    fontSize: '1rem',
    color: '#666'
  }
};

export default Education;
