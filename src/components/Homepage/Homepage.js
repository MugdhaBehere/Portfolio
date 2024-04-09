import React, { useState } from 'react';
import Navbar from '../NavBar/Navbar.js';
import '../Homepage/Homepage.css';
import MugdhaBehere from '../../images/MugdhaBehere.jpeg';
import Education from '../../pages/Education/index.js';
import Contact from '../../pages/Contact/index.js';
import Experience from '../../pages/Experience/index.js';
import Skills from '../../pages/Skills/index.js';
import Projects from '../../pages/Projects/index.js';
import Resume from '../../pages/Resume/index.js';
import Hobbies from '../../pages/Hobbies/index.js';
import Layout from '../Layout/Layout.js';
const Homepage = () => {
    // State to manage the visibility of sections
    const [showEducation, setShowEducation] = useState(false);
    const [showExperience, setShowExperience] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showHobbies, setShowHobbies] = useState(false);
    const [showResume, setShowResume] = useState(false);
    const [showContact, setShowContact] = useState(false);
    return (
        <Layout>
            <div className='body'>
                <Navbar
                    onEducationClick={() => setShowEducation(true)}
                    onExperienceClick={() => setShowExperience(true)}
                    onSkillsClick={() => setShowSkills(true)}
                    onProjectsClick={() => setShowProjects(true)}
                    onHobbiesClick={() => setShowHobbies(true)}
                    onResumeClick={() => setShowResume(true)}
                    onContactClick={() => setShowContact(true)}
                />
                <div className='box'>
                    <p className='para'> Hello! and Namaste! Welcome to my Portfolio. My name is Mugdha Behere. Being a Software Engineer who is a Frontend + FullStack + Backend Developer, Data Structures and Alogrithms, Low-level Design, High-Level Design are my primary skills. You can know more about my Tech Stack in the skills section. I also aspire to be a Researcher and a Product Manager further ahead in my career. On this Portfolio, you can have a look at my Resume, Projects and Work Experience, including some art pieces created by me in my free time. If you want to connect, please leave a message and feel free to connect. If you want to collaborate, you are welcome to join me in building cool, creative, impactful, and useful products together. Your ideas are welcome, and you'll know my ideas when we connect. </p>
                    <div>
                        <img src={MugdhaBehere} className='photograph' />
                    </div>
                </div>

                {showEducation && <Education />}
                {showExperience && <Experience />}
                {showSkills && <Skills />}
                {showProjects && <Projects />}
                {showHobbies && <Hobbies />}
                {showContact && <Contact />}
                {showResume && <Resume />}
            </div>
        </Layout>
    );
};

export default Homepage;
