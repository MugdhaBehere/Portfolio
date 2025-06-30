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
    { Name: "React", Category: "" },
    { Name: "NoSQL", Category: "Software Engineering" },
    { Name: "REST APIs", Category: "Software Engineering" },
    { Name: "SQL", Category: "Software Engineering" },
    { Name: "GitHub", Category: "Software Engineering" },
    { Name: "Go Programming Language", Category: "Software Engineering" },
    { Name: "Git", Category: "Software Engineering" },
    { Name: "Spring Boot", Category: "Software Engineering" },
    { Name: "FastAPI", Category: "Software Engineering" },
    { Name: "Gin", Category: "Software Engineering" },
    { Name: "Java2 Enterprise Edition", Category: "Software Engineering" },
    { Name: "Maven", Category: "Software Engineering" },
    { Name: "Hibernate", Category: "Software Engineering" },
    { Name: "JPA", Category: "Software Engineering" },

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
              <h6>Category of this Skill: {skill.Category}</h6>
            </div>
          ))}
        </Slider>
      </div>
    </Layout>
  );
};

export default Skills;
