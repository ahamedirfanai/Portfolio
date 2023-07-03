import React, { useState } from 'react'
import Certificate from '../Certificate/Certificate.js';
import "./CertificateContainer.css";
import { Element } from 'react-scroll';
import Aws from "../../assets/Aws.jpeg";
import Agile from "../../assets/Agile scrum.jpeg";
import Hacker from "../../assets/hackerRank.jpeg";


const CertificateContainer = () => {
  
  
  const certificates = [
    {
      img:Agile,
      title:"Agile Scrum Master",
      desc:"I have successfully completed the ASM course, acquiring comprehensive knowledge in various aspects including sprint planning, review, retropective, daily standups and other agile methodologies",
      link:"https://https://drive.google.com/file/d/1mTHVhgIvppaK5wpH-fGPKWrw6ypuSJlC/view?usp=drivesdk.netlify.app/",
     
    },
    {
      img:Aws,
      title:"AWS Cloud Practitioner Essential",
      desc:"Excited to share that completed an AWS Cloud Pratitioner Essential, enhancing my skills in cloud computing and infrastructure management. the course covered key topics including EC2 ,S3 ,Dynomo DB ,and more",
      link:"https://https://www.coursera.org/account/accomplishments/records/YMZE3Y5J73LH?utm_source=android&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course.netlify.app/",
     
    },
    {
      img:Hacker,
      title:"Internal HackerRank(IIEC)",
      desc:"I participated in an internal Hackerrank session where I explained the topic of authentication and security. During the session, we discussed the six levels of authentication, including the latest level, O Auth Authorisation",
      link:"https://drive.google.com/file/d/1mTHVhgIvppaK5wpH-fGPKWrw6ypuSJlC/view?usp=drivesdk",
     
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
           link={certificate.link} 
           
           />
         );

       })
     }
     
      </div>
 </Element>
      
  );
}

export default CertificateContainer