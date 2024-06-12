import React from 'react';
import profilePic from '../media/profile-pic.jpg';
import githubLogo from '../media/github.png';
import linkedinLogo from '../media/linkedin.png';
import emailLogo from '../media/mail.png';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-image">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="about-text">
          <p>
          A highly motivated computer science student with a strong passion for cloud computing. 
          I am constantly eager to learn and explore new technologies. 
          Moreover, I possess good problem-solving skills along with critical thinking abilities, adaptability, and an unwavering drive for excellence.
          </p>
        </div>
      </div>
      <div className="contact-section">
        <h3>Contact Me</h3>
        <ul className="contact-list">
          <li>
            <a href="https://github.com/RafinalHT" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" className="contact-logo" />
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rafinal-h-4479a0216/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className="contact-logo" />
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:rafinals05@gmail.com">
              <img src={emailLogo} alt="Email" className="contact-logo" />
              Email
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
