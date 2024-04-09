// src/components/Experience.js

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Experience.css';
import Layout from '../../components/Layout/Layout.js';
import '../../pages/custom-slider.css';

const Experience = () => {
  const [experienceItems, setExperienceItems] = useState([
    {
      company: "Borderfree Technologies",
      role: "Trainee Product Engineer/ Software Engineer",
      location: "Work from Home/ Pune, Maharashtra, India",
      from: "Nov 2021",
      to: "Jan 2023",
      responsibilities: [
        "Wrote Application Programming Interfaces (APIs) for several Backend features for the Borderfree Merchant Portal, Checkout Portal, and Consumer Portal that improved the overall efficiency of the product by 5%.Technologies Used: Golang, Amazon Web Services, Git, GitHub.",
        "Built several small features for the front end of the Borderfree Merchant Portal, Consumer Portal, and Checkout Portal as a part of several projects by Borderfree, which made the products more feature - rich and 2 % more interactive.Technologies Used: ReactJS, JavaScript, Git, GitHub, Amazon Web Services.",

      ]
    },
    {
      company: "Freelance Technical Content Writing",
      role: "Technical Content Writer",
      location: "Work from Home, Pune",
      from: "Mar 2021",
      to: "Jul 2021",
      responsibilities: "Wrote general articles related to Computer Science as a freelance Technical Content Writer."
    },
    {
      company: "GeeksForGeeks",
      role: "Technical Content Writer Intern",
      location: "Work from Home, Pune, Maharashtra, India",
      from: "June 2020",
      to: "Dec 2020",
      responsibilities: (
        <div>
          <p>Wrote technical articles based on:</p>
          <ul>
            <li>Data Structures and Algorithms.</li>
            <li>Programming Languages.</li>
            <li>General articles related to any area of Computer Science.</li>
          </ul>
        </div>
      )
    },
    {
      company: "TATA Marcopolo Motors Ltd",
      role: "Intern",
      location: "Dharwad, Karnataka, India",
      from: "June 2015",
      to: "June 2015",
      responsibilities: `Attempted to build software to automate the process of report generation at the Time office at TATA Marcopolo Motors Ltd, Dharwad, Karnataka, India`
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Layout>
      <div id="Experience" className="experience">
        <Slider {...settings}>
          {experienceItems.map((experience, index) => (
            <div key={index} className="paragraph-style">
              <h1>{experience.company}</h1>
              <p>{experience.role}</p>
              <p>{experience.location}</p>
              <p>{experience.from} - {experience.to}</p>
              <ul>
                {Array.isArray(experience.responsibilities) ? (
                  experience.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))
                ) : (
                  <li>{experience.responsibilities}</li>
                )}
              </ul>

            </div>
          ))}
        </Slider>
      </div>
    </Layout>
  );
};

export default Experience;
