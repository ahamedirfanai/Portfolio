import React, { useState } from 'react'
import Project from '../Project/Project.js';
import "./ProjectContainer.css";
import { Element } from 'react-scroll';
import ecommerce from "../../assets/Ecommerce.jpg";
import AiNextGen from "../../assets/AiNextGen.jpg";


const ProjectContainer = () => {
  

  const projects = [
    {
      img:AiNextGen,
      title:"NextGen 2.0",
      desc:"I am excited to present my latest project, a text-to-image generator utilizing the powerful OpenAI API. This cutting-edge technology generates highly realistic images based on user input and is built using the latest MERN stack technologies.",
      link:"https://ainextgen.netlify.app/",
    },
    {
      img:ecommerce,
      title:"E-commerce",
      desc:"In this e-commerce site, I successfully implemented an efficient shopping cart system using Stripe. Additionally, I leveraged React and Redux to manage the state, and incorporated Sanity.io for content management purposes.",
      link:"https://ahamedirfan-ecommerce.vercel.app/",
    },
  ];

  return (
   
    <Element className="projectContainer" id="projects">     {/*this is a project section when we click that project it comes this page*/}
      <h1>Projects</h1>
      <p>I would be delighted to showcase a few of the projects that I have personally created and developed</p>

      <div className="projectContainer__projects">

     {
       projects.map((project,index)=>{        {/*takes all information and index from project using map function   */}
         return (
           <Project
           key={index} 
           img={project.img} 
           title={project.title} 
           desc={project.desc} 
           link={project.link} 
           />
         );

       })
     }
     
      </div>
 </Element>
      
  );
}

export default ProjectContainer