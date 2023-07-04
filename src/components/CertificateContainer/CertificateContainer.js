import React, { useState } from 'react'
import Certificate from '../Certificate/Certificate.js';
import "./CertificateContainer.css";
import { Element } from 'react-scroll';

import Agile from "../../assets/Agilescrum.jpeg";
import hacker from "../../assets/hackerRank.jpeg";
import Aws from "../../assets/Aws.jpeg";

const CertificateContainer = () => {
  
  
  const certificates = [
    {
      img:Aws,
      title:"Aws Cloud Practitioner Essential",
      desc:"Excited to share that i have successfully completed an AWS cloud Practitioner Essential, enchancing my skills in cloud computing. I have completed key topics including EC2, S3, Dynomo Db, and more. I gained hands-on exprience in deploying and fault tolerate system on the AWS.",
      link:"https://www.coursera.org/account/accomplishments/records/YMZE3Y5J73LH?utm_source=android&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },
    {
      img:Agile,
      title:"Agile Scrum Master",
      desc:"I have successfully completed the ASM course, acquiring comprehensive knowledge in various aspects including spring planning, review, retrospective, daily standups and other agile methodologies",
      link:"https://simpli.app.link/tL0P3t2w6yb",
    },
    {
      img:hacker,
      title:"Internal HackerRank",
      desc:"I participated in an internal Hackerrank session where I explained the topic of authentication and security. During the session, we discussed the six levels of authentication, including the latest level,authentication and security",
      link:"https://https://drive.google.com/file/d/1mTHVhgIvppaK5wpH-fGPKWrw6ypuSJlC/view?usp=drivesdk.netlify.app/",
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