import React from 'react';

const ProfileSummary = ({ profileSummary, setProfileSummary }) => (
  <div style={{
     padding: '10px', /* Padding around the content */
    borderRadius: '8px', /* Rounded corners */
   }}>
    <h3 style={{
      fontSize: '1.75rem', /* Heading font size */
      color: '#fff', /* White text color */
      marginBottom: '15px' /* Space below the heading */
    }}>
      Profile Summary
    </h3>
    <textarea
      value={profileSummary}
      onChange={(e) => setProfileSummary(e.target.value)}
      placeholder="Write a brief summary about yourself..."
      style={{
        width: '100%', /* Full width */
        height: '150px', /* Set height */
        border: '1px solid #ccc', /* Light grey border */
        borderRadius: '8px', /* Rounded corners for textarea */
        padding: '12px', /* Padding inside textarea */
        fontSize: '1rem', /* Font size */
        color: '#333', /* Dark text color */
        boxSizing: 'border-box', /* Include padding and border in width calculation */
        resize: 'vertical', /* Allow resizing only vertically */
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease', /* Smooth transition for focus */
        outline: 'none' /* Remove default focus outline */
      }}
      onFocus={(e) => {
        e.target.style.borderColor = '#007BFF'; /* Blue border color on focus */
        e.target.style.boxShadow = '0 0 8px rgba(0, 123, 255, 0.25)'; /* Subtle blue shadow for focus effect */
      }}
      onBlur={(e) => {
        e.target.style.borderColor = '#ccc'; /* Reset border color when not focused */
        e.target.style.boxShadow = 'none'; /* Remove shadow when not focused */
      }}
    />
  </div>
);

export default ProfileSummary;
