import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Skills.css';
import Layout from '../../components/Layout/Layout.js';
import '../../pages/custom-slider.css';

const Skills = () => {
  const skillsItems = [
    { Name: "Low-level Design", Category: "Software Engineering" },
    { Name: "High-Level Design/System Design", Category: "Software Engineering" },
    { Name: "Data Structures and Algorithms", Category: "Software Engineering" },
    { Name: "Natural Language Processing ", Category: "Artificial Intelligence or Deep Learning or Natural Language Processing " },
    { Name: "Deep Learning ", Category: "Artificial Intelligence or Deep Learning or Natural Language Processing" },
    { Name: "Artificial Intelligence ", Category: "Artificial Intelligence or Deep Learning or Natural Language Processing" },
    
    { Name: "NoSQL", Category: "Software Engineering" },
    { Name: "REST APIs", Category: "Software Engineering" },
    { Name: "SQL", Category: "Software Engineering" },
    { Name: "GitHub", Category: "Software Engineering" },
    { Name: "Go (Golang)", Category: "Software Engineering" },
    { Name: "Git", Category: "Software Engineering" },
    { Name: "Python", Category: "Software Engineering"},
    { Name: "FastAPI", Category: "Software Engineering" },
    { Name: "Gin", Category: "Software Engineering" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Layout>
      <div id="Skills" className='skills'>
        <Slider {...settings}>
          {skillsItems.map((skill, index) => (
            <div key={index} >
              <h1> {skill.Name}</h1>
              
            </div>
          ))}
        </Slider>
      </div>
    </Layout>
  );
};

export default Skills;
