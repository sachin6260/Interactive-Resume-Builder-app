import React, { useState } from 'react';

const Hobbies = ({ hobbies, setHobbies }) => {
  const [newHobby, setNewHobby] = useState('');

  const addHobby = () => {
    if (newHobby) {
      setHobbies([...hobbies, newHobby]);
      setNewHobby('');
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
    width: ' 50%',
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
    backgroundColor: '#465a70'
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
      <h3 style={headingStyle}>Hobbies</h3>
      <input
        type="text"
        value={newHobby}
        onChange={(e) => setNewHobby(e.target.value)}
        placeholder="Enter a hobby"
        style={inputStyle}
      />
      <button
        onClick={addHobby}
        style={buttonStyle}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
      >
        Add Hobby
      </button>
      <ul style={listStyle}>
        {hobbies.map((hobby, index) => (
          <li key={index} style={listItemStyle}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
