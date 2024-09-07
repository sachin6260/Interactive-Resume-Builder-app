import React, { useState } from 'react';

const Skills = ({ skills, setSkills }) => {
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const containerStyle = {
     padding: '10px',
    borderRadius: '8px',
    };

  const headingStyle = {
    fontSize: '1.75rem',
    color: '#fff', /* White text color */
    marginBottom: '15px'
  };

  const inputStyle = {
    width:  '50%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    color: '#333',
    marginRight: '10px',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3'
  };

  const listStyle = {
    listStyleType: 'none',
    paddingLeft: '0',
    marginTop: '10px'
  };

  const listItemStyle = {
    backgroundColor: '#2C3E50', // Use camelCase for properties
    padding: '8px 12px',
    borderRadius: '20px', // Use camelCase for properties
    display: 'inline-block',
    marginRight: '10px', // Use camelCase for properties
    marginBottom: '10px', // Use camelCase for properties, removed the extra semicolon
    color :'white'
  };
  

  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>Skills</h3>
      <input
        type="text"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        placeholder="Enter a skill"
        style={inputStyle}
      />
      <button
        onClick={addSkill}
        style={buttonStyle}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
      >
        Add Skill
      </button>
      <ul style={listStyle}>
        {skills.map((skill, index) => (
          <li key={index} style={listItemStyle}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
