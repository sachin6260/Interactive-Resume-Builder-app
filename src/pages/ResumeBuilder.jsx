import React, { useState } from 'react';
import ProfileSummary from '../components/ProfileSummary';
import Skills from '../components/Skills';
import Hobbies from '../components/Hobbies';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import ContactDetails from '../components/ContactDetails';
import ProfileImage from '../components/ProfileImage';
import SocialLinks from '../components/SocialLinks';
import TemplateSelector from '../components/TemplateSelector';
import ResumePreview from '../components/ResumePreview';
import DownloadButton from '../components/DownloadButton';

const ResumeBuilder = () => {
  const [profileSummary, setProfileSummary] = useState('');
  const [skills, setSkills] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [contact, setContact] = useState({ name: '', phone: '', email: '' });
  const [image, setImage] = useState('');
  const [socialLinks, setSocialLinks] = useState({ github: '', linkedin: '', email: '' });
  const [template, setTemplate] = useState('template1');

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Interactive Resume Builder</h1>
      <ProfileImage image={image} setImage={setImage} />
      <ContactDetails contact={contact} setContact={setContact} />
      <ProfileSummary profileSummary={profileSummary} setProfileSummary={setProfileSummary} />
      <Skills skills={skills} setSkills={setSkills} />
      <Hobbies hobbies={hobbies} setHobbies={setHobbies} />
      <Projects projects={projects} setProjects={setProjects} />
      <Experience experience={experience} setExperience={setExperience} />
      <Education education={education} setEducation={setEducation} />
      <SocialLinks socialLinks={socialLinks} setSocialLinks={setSocialLinks} />
      <TemplateSelector template={template} setTemplate={setTemplate} />
      <ResumePreview
        profileSummary={profileSummary}
        skills={skills}
        hobbies={hobbies}
        projects={projects}
        experience={experience}
        education={education}
        contact={contact}
        image={image}
        socialLinks={socialLinks}
        template={template}
      />
      <DownloadButton />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: '"Arial", sans-serif',
    backgroundColor: '#34495e', // Background color
    color: '#34495E', // Text color
    borderRadius:'20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '2.5rem',
    color: '#fff' /* White text color */
  },
  button: {
    backgroundColor: '#3498DB', // Button color
    color: '#FFFFFF', // Button text color
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  input: {
    border: `1px solid #BDC3C7`, // Input border color
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
    width: '100%',
    boxSizing: 'border-box',
  },
  textarea: {
    border: `1px solid #BDC3C7`, // Textarea border color
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
    width: '100%',
    boxSizing: 'border-box',
    minHeight: '100px',
  },
  section: {
    marginBottom: '20px',
  },
};



export default ResumeBuilder;
