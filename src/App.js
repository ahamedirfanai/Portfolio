import React, { Component } from 'react'
import Header from './components/Header/Header';
import TopContainer from './components/TopContainer/TopContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import "./App.css";
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';
import Contact from './components/Contact/Contact';
import CertificateContainer from './components/CertificateContainer/CertificateContainer';

const App  = () => {
  return (
    <div>
    <Header />
    <TopContainer />
    <SkillContainer />
    <ProjectContainer />
    <CertificateContainer />
    <ExperienceContainer />
    
    <Contact />
    </div>
  )
}

export default App;

