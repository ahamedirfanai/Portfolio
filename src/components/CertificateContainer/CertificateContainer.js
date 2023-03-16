import React, { useState } from 'react'
import Certificate from '../Certificate/Certificate.js';
import "./CertificateContainer.css";
import { Element } from 'react-scroll';
import AiNextGen from "../../assets/AiNextGen.jpg";


const CertificateContainer = () => {
  
  
  const certificates = [
    {
      img:AiNextGen,
      title:"NextGen 2.0",
      desc:"I am excited to present my latest project, a text-to-image generator utilizing the powerful OpenAI API. This cutting-edge technology generates highly realistic images based on user input and is built using the latest MERN stack technologies.",
     
    },
    {
      img:AiNextGen,
      title:"NextGen 2.0",
      desc:"I am excited to present my latest project, a text-to-image generator utilizing the powerful OpenAI API. This cutting-edge technology generates highly realistic images based on user input and is built using the latest MERN stack technologies.",
     
    },
  ];

  return (
   
    <Element className="certificateContainer" id="cer">     {/*this is a project section when we click that project it comes this page*/}
      <h1>Certificates</h1>
      <p>Here is the section where you can view my certificates</p>

      <div className="certificateContainer__certificate">

     {
       certificates.map((certificate,index)=>{        {/*takes all information and index from project using map function   */}
         return (
           <Certificate
           key={index} 
           img={certificate.img} 
           title={certificate.title} 
           desc={certificate.desc} 
           
           />
         );

       })
     }
     
      </div>
 </Element>
      
  );
}

export default CertificateContainer