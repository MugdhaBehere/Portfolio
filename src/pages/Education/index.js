
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Layout from '../../components/Layout/Layout.js';
import '../../pages/custom-slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Education.css';
import DukeCertificateMainPDF from '../../images/DukeCertificateMain.pdf';
import DukeCertificateSpecialisationPDF from '../../images/DukeCertificateSpecialisation.pdf';
import GrowthSchoolCertificatePDF from '../../images/GrowthSchoolCertificate.pdf';
const Education = () => {
  const educationItems = [
    {
      schoolName: "Duke University, Fuqua School of Business, Duke Corporate Education.",
      description: `Post Graduate Certificate in Product Management.
      Completed this certification along with a specialization namely, AI/ML solutions for Product Management.`,
      from: "Nov 2022",
      to: "Aug 2023",
      city: "Online on upgrad.com, Part-Time.",
      category: "Training and Higher Education",
      certificates: [
        { title: " Click to view Main Certificate", path: DukeCertificateMainPDF },
        { title: " Click to view Certificate for Specialisation", path: DukeCertificateSpecialisationPDF }
      ]
    },
    {
      schoolName: "Growth School",
      description: "Product Management Career Accelerator Program.",
      from: "Nov 2022",
      to: "July 2023",
      city: "Online and Part-Time.",
      category: "Certification and Training. ",
      certificates: [
        { title: "Click to View Certificate", path: GrowthSchoolCertificatePDF }
      ]
    },
    {
      schoolName: "Indraprastha Institute of Information Technology, Delhi.",
      description: "Post Graduate Diploma in Computer Science and Artificial Intelligence.",
      from: "Apr 2022",
      to: "May 2023",
      city: "Online",
      category: "Higher Education",
      link: "https://eportfolio.mygreatlearning.com/mugdha-behere",

    },
    {
      schoolName: "Scaler Academy.",
      description: "The course focused on Data Structures and Algorithms, System Design, and Low-Level Design.",
      from: "Oct 2020",
      to: "Dec 2021",
      city: "Online",
      category: "Software Engineering Training",

    },
    {
      schoolName: "Vellore Institute of Technology.",
      description: "Bachelor of Technology, Computer Science and Engineering.",
      from: "July 2012",
      to: "July 2018",
      city: "Chennai, Tamil Nadu, India",
      category: "College",

    },
    {
      schoolName: "Jagruti Junior College",
      description: "Studied Higher Secondary School, Class 11th and 12th.",
      from: "July 2010",
      to: "July 2012",
      city: "Akola, Maharashtra, India",
      category: "Junior College",

    },
    {
      schoolName: "Mount Carmel High School, Akola",
      description: "Attended Pre-Primary, Primary and Secondary School till Class 10th.",
      from: "July 1997",
      to: "July 2010",
      city: "Akola, Maharashtra, India",
      category: "School",

    },
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
      <div className="education" id="Education">
        <h2>Education</h2>
        <Slider {...settings}>
          {educationItems.map((education, index) => (
            <div key={index} className='paragraph-style'>
              <p><b>{education.schoolName}</b></p>
              {education.schoolName === "Indraprastha Institute of Information Technology, Delhi." ? (
                <p>
                  {education.description} Information about my course projects: {' '}
                  <a href={education.link} target='_blank' rel='noopener noreferrer'>{education.link}</a>
                </p>
              ) : (
                <p>{education.description}</p>
              )}

              <p> {education.from} -  {education.to}</p>
              <p>City: {education.city}</p>
              <p>Category: {education.category}</p>
              <ul className="certificates certificate-list">
                {education.certificates && education.certificates.map((certificate, index) => (
                  <li key={index}>
                    <a href={certificate.path} target="_blank" rel="noopener noreferrer">{certificate.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Slider>
      </div>
    </Layout>
  );
};

export default Education;
