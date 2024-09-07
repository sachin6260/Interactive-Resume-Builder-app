import React from 'react';

const ContactDetails = ({ contact, setContact }) => (
  <div>
    <style>
      {`
        .contact-details {
     padding: '20px',
    borderRadius: '8px',
          }

        .contact-details h3 {
          font-size: 1.75rem; /* Heading font size */
  color: #fff; /* White text color */
          margin-bottom: 20px; /* Space below the heading */
          
        }

        .contact-details .contactinput {
          border: 1px solid #ccc; /* Light grey border */
          border-radius: 8px; /* Rounded corners for a smoother look */
          padding: 12px 15px; /* Padding inside input fields for comfort */
          font-size: 1rem; /* Font size */
          margin-bottom: 15px; /* Space below each input field */
          width: 33%; /* Full width */
          box-sizing: border-box; /* Include padding and border in width calculation */
          transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for focus */
          margin-right:4px;
        }

        .contact-details .contactinput::placeholder {
          color: #888; /* Placeholder text color */
        }

        .contact-details .contactinput:focus {
          border-color: #007BFF; /* Blue border color on focus */
          outline: none; /* Remove default focus outline */
          box-shadow: 0 0 8px rgba(0, 123, 255, 0.25); /* Subtle blue shadow for focus effect */
        }

        @media (max-width: 768px) {
          .contact-details {
            padding: 15px; /* Adjust padding for smaller screens */
          }

          .contact-details .contactinput {
            padding: 10px 12px; /* Adjust padding inside input fields for smaller screens */
          }
        }
      `}
    </style>
    <div className="contact-details">
      <h3>Contact Details</h3>
      <input
        className='contactinput'
        type="text"
        value={contact.name}
        onChange={(e) => setContact({ ...contact, name: e.target.value })}
        placeholder="Name"
      />
      <input
        className='contactinput'
        type="text"
        value={contact.phone}
        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
        placeholder="Mobile Number"
      />
      <input
        className='contactinput'
        type="text"
        value={contact.email}
        onChange={(e) => setContact({ ...contact, email: e.target.value })}
        placeholder="Email Address"
      />
    </div>
  </div>
);

export default ContactDetails;
