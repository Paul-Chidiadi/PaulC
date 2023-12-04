import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import Imu from '../assets/tech.png';

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">Hello, I am Paul Chidiadi</h2>
        <h3 className="tagline">Full-Stack Software Developer React Nextjs Redux Nodejs Typescript...</h3>
        <p className="paragraph">
          I am a motivated and detail-oriented developer dedicated to transforming innovative ideas into seamless,
          user-friendly experiences. With a strong foundation in web development, I'm passionate about crafting
          exceptional digital experiences and bringing ideas to life. I thrive on tackling complex challenges and
          creating solutions that leave a lasting impact. Let's build something extraordinary together.
        </p>
        <div className="hero-btns">
          <button className="hire-me">
            <a
              href="https://drive.google.com/file/d/11TZbbKVWZS49QBpM9lB0GYtfGL82wfwT/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              BACKEND CV
            </a>
          </button>
          <button className="lets-talk">
            <a
              href="https://drive.google.com/file/d/1XtclgrB-BA-yWZdeNdGV2CSq2ev9FJTv/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              FRONTEND CV
            </a>
          </button>
        </div>
      </div>
      <img src={Imu} alt="prantosh" className="hero-image" />
    </div>
    <div className="social-icons">
      <a href="https://github.com/Paul-Chidiadi" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github" />
      </a>
      <a href="https://www.linkedin.com/in/paul-chidiadi-5a2631231" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin-in" />
      </a>
      <a href="https://twitter.com/ChidiadiPaul" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-twitter" />
      </a>
      <a href="mailto:paulchidiadi@gmail.com" target="_blank" rel="noreferrer">
        <i className="bx bxl-gmail" />
      </a>
    </div>
  </div>
);

export default Hero;
