import React from 'react'
import {Element} from 'react-scroll'
import Experience from '../ExperienceBox/Experience.js'
import "./ExperienceContainer.css"

const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" name="exp">
       <h1>Experience</h1>
       <div className="experienceContainer__info">
         <Experience number="27+" title="clients" />
         <Experience number="32" title="projects" style={{backgroundColor:"#DF2E38"}} />
         <Experience number="5" title="Years of academic experience" />
        </div>

    </Element>
  );
};

export default ExperienceContainer