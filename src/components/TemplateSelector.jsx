import React from 'react';

const TemplateSelector = ({ template, setTemplate }) => (
  <div style={styles.container}>
    <h3 style={styles.heading}>Select Template</h3>
    <select 
      value={template} 
      onChange={(e) => setTemplate(e.target.value)} 
      style={styles.select}
    >
      <option value="template1">Template 1</option>
      <option value="template2">Template 2</option>
      <option value="template3">Template 3</option>
    </select>
  </div>
);

const styles = {
  container: {
    margin: '20px 0',
    padding: '10px',
    borderRadius: '8px',
   },
  heading: {
    marginBottom: '10px',
    fontSize: '1.2rem',
    color: '#fff', /* White text color */
  },
  select: {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#fff',
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
};

export default TemplateSelector;
