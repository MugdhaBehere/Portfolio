import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';


import Mugdha from '../../images/Mugdha.png';
import FacebookIcon from '../../images/facebook.png';
import InstagramIcon from '../../images/instagram.png';
import CodepenIcon from '../../images/codepen.png';
import GithubIcon from '../../images/github.png';
import LinkedinIcon from '../../images/linkedin.png';
import BlogIcon from '../../images/blog.png';
import LeetCodeIcon from '../../images/leetcode.png';
import ScalerIcon from '../../images/scaler.png';

import './Navbar.css';

const sections = ['Education', 'Contact', 'Experience', 'Skills', 'Projects', 'Resume', 'Hobbies'];

const SocialIcon = ({ href, imgSrc, altText, title }) => (
    <div className="bottomLeftCircle">
        <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
            <img src={imgSrc} alt={altText} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
        </a>
    </div>
);

const Navbar = () => {
    const [activeSection, setActiveSection] = useState(sections[0]);

    const handleSetActiveSection = (section) => {
        setActiveSection(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDotClick = (section) => {
        setActiveSection(section); // Update activeSection state
        window.location.href = `/${section}`; // Navigate to the corresponding page

        // Update the appearance of the dots
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => {
            if (dot.classList.contains(section.toLowerCase())) {
                dot.classList.add('active'); // Apply "active" class to clicked dot
            } else {
                dot.classList.remove('active'); // Remove "active" class from other dots
            }
        });
    };

    return (
        <nav className="navbar">
            <Link to="/">
                <img src={Mugdha} alt="MugdhaBehere" className="logo" />
            </Link>
            <ul className="linkList">
                <li className={`linkItem ${activeSection === 'Education' && 'active'}`}>
                    <Link to="/Education" onClick={() => handleSetActiveSection('Education')}>
                        Education
                    </Link>
                </li>
                <li className={`linkItem ${activeSection === 'Contact' && 'active'}`}>
                    <Link to="/Contact" onClick={() => handleSetActiveSection('Contact')}>
                        Contact
                    </Link>
                </li>
                <li className={`linkItem ${activeSection === 'Experience' && 'active'}`}>
                    <Link to="/Experience" onClick={() => handleSetActiveSection('Experience')}>
                        Experience
                    </Link>
                </li>
                <li className={`linkItem ${activeSection === 'Skills' && 'active'}`}>
                    <Link to="/Skills" onClick={() => handleSetActiveSection('Skills')}>
                        Skills
                    </Link>
                </li>
                <li className={`linkItem ${activeSection === 'Projects' && 'active'}`}>
                    <Link to="/Projects" onClick={() => handleSetActiveSection('Projects')}>
                        Projects
                    </Link>
                </li>
                <li className={`linkItem ${activeSection === 'Resume' && 'active'}`}>
                    <Link to="/Resume" onClick={() => handleSetActiveSection('Resume')}>
                        Resume
                    </Link>
                </li>
                <li className={`linkItem ${activeSection === 'Hobbies' && 'active'}`}>
                    <Link to="/Hobbies" onClick={() => handleSetActiveSection('Hobbies')}>
                        Hobbies
                    </Link>
                </li>
            </ul>

            {/* Social Icons */}
            <div className="socialIcons">
                <div className="bottomLeftLine"></div>
                <div className="bottomLeftCircles">
                    <SocialIcon href="https://www.facebook.com/mugdhabehere3443" title="Follow me on Facebook" imgSrc={FacebookIcon} altText="Facebook" />
                    <SocialIcon href="https://www.instagram.com/mugdha344394/" title="Connect with me on Instagram" imgSrc={InstagramIcon} altText="Instagram" />
                    <SocialIcon href="https://codepen.io/Mugdha_Behere" title="View my projects on CodePen" imgSrc={CodepenIcon} altText="Codepen" />
                    <SocialIcon href="https://www.github.com/MugdhaBehere" title="Explore my repositories on GitHub" imgSrc={GithubIcon} altText="Github" />
                    <SocialIcon href="https://www.linkedin.com/in/mugdhabehere" title="Connect with me on LinkedIn" imgSrc={LinkedinIcon} altText="Linkedin" />
                    <SocialIcon href="https://www.codedreamer.pro" title="Read my blog posts" imgSrc={BlogIcon} altText="Blog" />
                    <SocialIcon href="https://leetcode.com/MugdhaBehere/" title="Solve coding problems with me on LeetCode" imgSrc={LeetCodeIcon} altText="LeetCode" />
                    <SocialIcon href="https://www.scaler.com/academy/profile/3ab7c77cad69/" title="View my Scaler Profile" imgSrc={ScalerIcon} altText="Scaler" />
                </div>
            </div>

            <div className="navigationDots">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className={`dot ${activeSection === section ? 'active' : ''}`}
                        onClick={() => handleDotClick(section)}
                    />
                ))}
            </div>


        </nav>
    );
};

export default Navbar;
