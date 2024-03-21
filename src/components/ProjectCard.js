import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => (
  <div className="project-card">
    {props.live_link !== 'N/A' ? (
      <a href={props.live_link} target="_blank" rel="noreferrer">
        <i className="fa-solid fa-arrow-right arrow" />
      </a>
    ) : (
      <span />
    )}
    <i className="fa-regular fa-arrow-up-right" />
    <img src={props.image} alt="" />
    <div className="card-description">
      <h3>{props.title}</h3>
      <p>
        {props.description.split(' ').slice(0, 30).join(' ') + '...'}{' '}
        <a style={{ cursor: 'pointer', color: 'green' }} href={props.source_link}>
          more
        </a>{' '}
      </p>
      {/* <p>{props.description.slice(0, 200) + '...'}</p> */}
      <div className="stacks">
        {props.stacks.map((stack, id) => (
          <button className="tech-stack" key={id}>
            {stack}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
