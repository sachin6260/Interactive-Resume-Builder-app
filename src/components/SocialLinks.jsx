import React from 'react';

const SocialLinks = ({ socialLinks, setSocialLinks }) => (
  <div style={styles.container}>
    <h3 style={styles.heading}>Social Links</h3>
    <input
      type="text"
      value={socialLinks.github}
      onChange={(e) => setSocialLinks({ ...socialLinks, github: e.target.value })}
      placeholder="GitHub"
      style={styles.input}
    />
    <input
      type="text"
      value={socialLinks.linkedin}
      onChange={(e) => setSocialLinks({ ...socialLinks, linkedin: e.target.value })}
      placeholder="LinkedIn"
      style={styles.input}
    />
    <input
      type="text"
      value={socialLinks.email}
      onChange={(e) => setSocialLinks({ ...socialLinks, email: e.target.value })}
      placeholder="Email"
      style={styles.input}
    />
  </div>
);

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
  }
};

export default SocialLinks;
