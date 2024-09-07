import React from 'react';
import html2pdf from 'html2pdf.js';

const DownloadButton = () => {
  const downloadPDF = () => {
    const element = document.querySelector('.resume-preview');
    html2pdf().from(element).save('resume.pdf');
  };

  return (
    <button onClick={downloadPDF} style={styles.button}>
      Download as PDF
    </button>
  );
};

const styles = {
  button: {
    backgroundColor: '#007bff', // Button background color
    color: '#fff', // Text color
    border: 'none', // Remove border
    borderRadius: '4px', // Rounded corners
    padding: '10px 20px', // Padding inside the button
    fontSize: '1rem', // Font size
    cursor: 'pointer', // Pointer cursor on hover
    transition: 'background-color 0.3s ease', // Smooth background color transition
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle effect
    marginTop: '30px', // Top margin
    width: '100%', // Make the button 100% width
    display: 'block', // Ensure the button takes up the full width
    textAlign: 'center' // Center text inside the button
  

   },
  buttonHover: {
    backgroundColor: '#0056b3'
  }
};

export default DownloadButton;
