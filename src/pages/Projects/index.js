import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.css';
import SpeedReadingScreenshot from '../../images/SpeedReadingScreenshot.jpeg';
import Vocabulum from '../../images/Vocabulum_Screenshot.png';
import MusiciansScreenshot from '../../images/ScreenshotForMusicianSocialMedia.png';
import CodeDreamer from '../../images/CodeDreamerScreenshot.png';
import MapApp from '../../images/MapsAppScreenshot.png';
import Layout from '../../components/Layout/Layout.js';
import '../../pages/custom-slider.css';

const Projects = () => {
  const projectsItems = [{
    Title: "Cash Craft",
    ProjectDescription: `This is a peer-to-peer fund transfer app that allows users to transfer funds to self and other accounts and monitor their transaction history and dynamically updated account balance. (Independent Project, Tech Stack: Go, Gin, HTML, CSS, JavaScript, MySQL Database )`,
    Category: "Software Engineering",
    Url: "https://github.com/MugdhaBehere/cash_craft",
  },
  {
    Title: "Distributed Task Scheduler (CI/CD Pipeline Manager)",
    ProjectDescription: `This is a distributed task scheduler that assigns tasks to worker nodes based on their load and availability, ensuring fault tolerance and efficient task execution in a distributed environment. The work on this project is yet to start. (Individual Project, Tech Stack: Python, Jenkins, Redis/RabbitMQ, Docker, Kubernetes, Prometheus, ELK Stack)`,
    Category: "Software Engineering",


  },
  {
    Title: "High Performance API Gateway (Financial Services API Gateway)",
    ProjectDescription: `This is a high-performance API gateway acts as a reverse proxy that routes client requests to appropriate backend services. It handles authentication, rate limiting, load balancing, and request routing. The work on this project is yet to start. (Individual Project, Tech Stack: Go, Kong, Envoy, OAuth2, Redis, Prometheus, Grafana)`,
    Category: "Software Engineering",


  },
  {
    Title: "Scalable Real-Time Analytics Platform. (Network Monitoring and Intrusion Detection)",
    ProjectDescription: `This is a scalable real-time analytics platform collects, processes, and analyzes data streams from various sources in real time, providing dashboards and alerts based on predefined rules. The work on this project is yet to start. (Individual Project, Tech Stack: Java, Apache Kafka, Apache Flink, Elastic Search, Grafana, Docker, Kubernetes, Prometheus)`,
    Category: "Software Engineering",


  },
  {
    Title: "Geo-Spatial Data Analysis and Visualization Platform. (Environemntal Monitoring)",
    ProjectDescription: `This helps track and analyze environmental data.(Individual Project, Tech Stack: Python, Django, PostgreSQL with PostGIS extension, GeoPandas, Shapely, Leaflet.js, Mapbox, Kubernetes, Prometheus, Grafana)`,
    Category: "Software Engineering",


  },

  {
    Title: "Vocabulum",
    ProjectDescription: `This is an all-languages-to-all-languages dictionary that takes as input the search query along with the source and target language and displays the query and its meaning in the source language, English, and target language. It uses external APIs for translation and meaning search. It also employs an LRU cache and Elastic Search DB for faster retrieval and reduction of latency and API calls. This project is still in progress.
(Independent Project, Tech Stack: Java, Spring, Spring Boot, React, JavaScript, Twinword Dictionary API,
Google Translate API, LRU Cache, Elastic Search DB )`,
    Category: "Software Engineering",

    ScreenshotCollection: [
      { Url: Vocabulum }

    ]
  },
  {
    Title: "AI model to detect Cardio Vascular Diseases",
    ProjectDescription: `The work on this project is yet to start, the goal is to train a model to detect several Cardio Vascular Diseases based on medical images from readily available datasets. `,
    Category: "Artificial Intelligence or Deep Learning or Natural Language Processing. ",


  },
  {
    Title: "AI model for Skin Disorder Detection",
    ProjectDescription: `The work on this project is yet to start. The goal is to train a model to detect several skin disorders based on readily available datasets. `,
    Category: "Artificial Intelligence or Deep Learning or Natural Language Processing. ",

  },
  {
    Title: "Synaptech",
    ProjectDescription: "This project is also in the ideation process. This is a health tech app powered by Artificial Intelligence and Deep Learning. It implements AI and Deep Learning Algorithms for the analysis of MRI, fMRI, DTI, and CT scan images to aid in the detection and assessment of various brain-related disorders and conditions like Alzheimer's Disease and Dementia, and Brain Tumors. I have also planned to attempt to train a model that can detect Schizophrenia based on the MRI images provided. ",
    Category: "Artificial Intelligence or Deep Learning or Natural Language Processing. ",

  },
  {
    Title: "Social Media App for Musicians",
    ProjectDescription: "This project is still in the ideation process. Being a student of music, I felt the need for a platform for music students or musicians/artists in the field of music to be able to communicate, network, and collaborate with the help of a social media app. As a part of this project, the plan currently, is to add features like the ability for users to add songs sung/played/performed by them, have the community or network like, share or comment on what they upload along with enabling the community to review what they upload. This app would also enable students to get reviews on their work or art pieces from experts or seniors or more learned members in the same area. The app would allow users to add their area of interest in music, for example, Hindustani Classical, Carnatic, or Western. This app would also serve as a go-to place for music students when searching for somebody to collaborate and perform or create music. ",
    Category: "Software Engineering. ",

    ScreenshotCollection: [
      { Url: MusiciansScreenshot }

    ]
  },
  {
    Title: "Advanced Map App",
    ProjectDescription: "The work on this project is yet to start. It is still in the ideation process. The goal of this project is to improve the current map apps, by adding a few more features that would contribute to ease of use, user convenience, more effective browsing on the map apps, and more detailed results. This map app would employ complex graph algorithms, so that whenever the user searches for a particular location, for example, a medical store, the feature should display all the medical stores in nearby areas. When the user selects a particular store from the results being highlighted on the screen or hovers over it, the feature should display all the routes to that store and highlight the fastest route to that store by all modes of transport like walk, bike, train, bus, cab, etc in different colors. If the user searches for a restaurant, similar results should be displayed along with the ranking of restaurants based on user ratings or reviews. ",
    Category: "Software Engineering",

    ScreenshotCollection: [
      { Url: MapApp }
    ]
  },
  {
    Title: "PaceUpReading",
    ProjectDescription: "This is an app that allows readers to read books at customized reading speeds. It accepts as input a pdf file/ epub/ kindle/mobi file, which is a book the user wants to read, this file is parsed and the content from the file is fetched sentence by sentence or paragraph by paragraph. This content is then displayed on the screen in the form of a stream of words that goes through the screen from right to left at a rate of specific words per minute as chosen by the user. To further aid the process of speed reading, the first few letters of each word are displayed in bold, so that the user can guess what the word is without reading the complete word, thereby saving the time spent in reading. This app is still in progress and would also provide the notetaking and highlighting features along with features for increasing the font size.",
    Category: "Software Engineering",

    ScreenshotCollection: [
      { Url: SpeedReadingScreenshot }
    ]
  },
  {
    Title: "Google Maps Clone",
    ProjectDescription: "Built a simple clone of the Google Maps Web App using readily available APIs",
    Category: "APIs",
    Url: "https://github.com/MugdhaBehere/GoogleMapsClone",
    ScreenshotCollection: [
      { Url: MapApp }
    ]
  },
  {
    Title: "My Blog",
    ProjectDescription: "Coded a blog site and deployed it on Vercel. This is my blog where I usually write articles based on Computer Science and Technology. (Independent Project, Tech Stack: GraphQL, NextJS, Tailwind CSS)",
    Category: "Software Engineering",
    Url: "https://www.codedreamer.pro",
    ScreenshotCollection: [
      { Url: CodeDreamer }

    ]
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
      <div id="Projects" className="projects">
        <Slider {...settings}>
          {projectsItems.map((project, index) => (
            <div key={index} className="paragraph-style">
              <h1>{project.Title}</h1>
              <div dangerouslySetInnerHTML={{ __html: project.ProjectDescription }} />
              <div className="project-screenshots">
                {project.ScreenshotCollection && project.ScreenshotCollection.map((screenshot, index) => (
                  <a key={index} href={screenshot.Url} target="_blank" rel="noopener noreferrer">
                    View Screenshot {index + 1}
                  </a>
                ))}
              </div>
              <p>Category: {project.Category}</p>
              {project.Url && <a href={project.Url} target="_blank" rel="noopener noreferrer">Visit Project</a>}
            </div>
          ))}
        </Slider>
      </div>
    </Layout>
  );


};

export default Projects;
