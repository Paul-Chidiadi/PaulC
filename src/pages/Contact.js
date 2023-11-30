import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact" id="contact">
    <div className="footer-left">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Frontend Development</p>
        <p>React</p>
        <p>Backend Development</p>
        <p>Nodejs</p>
        <p>WordPress Development</p>
        <p>Startups</p>
        <p>New Opportunities</p>
        <p>Coffee</p>
        <p>Space</p>
      </div>
    </div>
    <div className="footer-right">
      <h1>LET'S TALK TECH</h1>
      <hr />
      <h3>
        MINDING A PROJECT?
        <span>
          <a href="mailto:paulchidiadi@gmail.com">Contact Me</a>
        </span>
      </h3>
      <hr />

      <div className="social">
        <span>
          <a href="https://github.com/Paul-Chidiadi" target="_blank" rel="noreferrer">
            GITHUB
          </a>
        </span>
        <span>
          {' '}
          <a href="https://www.linkedin.com/in/paul-chidiadi-5a2631231" target="_blank" rel="noreferrer">
            LINKEDIN
          </a>
        </span>
        <span>
          <a href="https://twitter.com/ChidiadiPaul" target="_blank" rel="noreferrer">
            TWITTER
          </a>
        </span>
        <span>
          <a href="mailto:paulchidiadi@gmail.com" target="_blank" rel="noreferrer">
            EMAIL
          </a>
        </span>
      </div>
    </div>
  </div>
);

export default Contact;
