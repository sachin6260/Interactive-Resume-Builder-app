import React from 'react';
import './ProfileImage.css';


const ProfileImage = ({ image, setImage }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-image-container">
    <h3>Profile Image</h3>
    <div className="file-image-wrapper">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Profile" />}
    </div>
  </div>
  
  );
};

export default ProfileImage;
