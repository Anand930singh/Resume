import React from 'react'
import './ProjectCard.css'


function ProjectCard(props) {
  return (
    <div className="projectCards">
        <div className="projectImage">
            <img src={props.img} alt="Not able to load" />
        </div>
        <div className="projectDetails">
            <div className="projectName">{props.projName}</div>
            <div className="projectGithub"><a href={props.projGithub}>Github</a></div>
        </div>
    </div>
  )
}

export default ProjectCard