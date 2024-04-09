import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hobbies.css';
import Layout from '../../components/Layout/Layout.js';
import '../../pages/custom-slider.css';

import SingingCertificate from '../../images/MugdhaBehere_HV101Certificate.png';

// Manual data
const hobbiesData = [
  {
    Name: "Reading",
    DescriptionPart1: `I have heard from many people that the habit of Reading is very essential in today's world. I also believe in these two quotes: "Leaders are Readers." and "Books are the best friends of human beings. Books never complain and books never demand, yet serve as our best friends to accompany. Books are indeed our best and true friends by all means." I have recently started to learn several speed reading techniques, to be able to read as many books as I can. One of my forthcoming projects: PaceUpReading, the idea for this project came out of my love for reading.I still don't read very regularly, but, I have enjoyed reading whenever I have found some time for it from my daily schedule. I read books belonging to all categories, but I mostly read informative and self-help books, and also story books and novels or autobiographies sometimes. Following are some books, I have learned from, read (either read fully or partially) and enjoyed reading:`,
  },
  {
    Name: "Reading (continued)",
    DescriptionPart2: `Books I have read`,

    BooksLearned: [
      "Limitless by Jim Kwik.",
      "Science of Mind Management by Swami Mukundananda.",
      "Seven Habits of Highly Effective People by Stephen Covey.",
      "Hyperfocus by Chris Bailey.",
      "Deep Work by Cal Newport."
    ],
  },
  {
    Name: "Reading (continued..)",
    DescriptionPart3: `Books I want to read`,
    BooksToRead: [
      "Good To Great by Jim Collins.",
      "Range by David Epstein.",
      "This is Your Brain on Music by Daniel Levitin.",
      "Mindset by Carol Dweck.",
      "Atomic Habits by James Clear.",
      "Getting Things Done by David Allen."
    ],

  },
  {
    Name: "Painting and Rangoli Creation",
    Description: `I enjoy painting with Water Colors, Acrylic Colors, Gouache Colors, Oil Paint, Chalk Acrylic Colors, and Poster Colors in my free time, and learning digital art with Procreate on my iPad. I also like to make Rangolis occasionally. Not a professional artist, but a beginner who is always keen to learn more.`,
    AlbumUrl: "https://photos.app.goo.gl/eyqpKPQiHdWgyL4T7"
  },
  {
    Name: "Singing",
    Description: `Currently a student of Hindustani Classical Music, I have cleared and completed the Hindustani Vocal 101 audit course with Shankar Mahadevan Academy. I also aspire to clear all levels of Vocal Examinations in Hindustani Classical Vocal Music. I also play the Keyboard, Guitar, and Harmonium, although still a beginner and in the phase of learning these skills.`,
    PhotoCollection: [
      { Url: SingingCertificate },
    ]
  },
];

const Hobbies = () => {
  const [hobbiesItems] = useState(hobbiesData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Layout>
      <div id="Hobbies" className="hobbies">
        <Slider {...settings}>
          {hobbiesItems.map((hobby, index) => (
            <div key={index} className="paragraph-style">
              <h1>{hobby.Name}</h1>
              {hobby.Photo && (
                <img src={hobby.Photo} alt={hobby.Name} />
              )}
              {hobby.Name === "Reading" && hobby.DescriptionPart1 && (
                <div>
                  <p>{hobby.DescriptionPart1}</p>
                </div>
              )}
              {hobby.Name === "Reading (continued)" && hobby.DescriptionPart2 && (
                <div>
                  <p>{hobby.DescriptionPart2}</p>

                  <ul>
                    {hobby.BooksLearned.map((book, index) => (
                      <li key={index}>{book}</li>
                    ))}
                  </ul>
                </div>
              )}
              {hobby.Name === "Reading (continued..)" && hobby.DescriptionPart3 && (
                <div>
                  <p><strong>Books To Read:</strong></p>
                  <ul>
                    {hobby.BooksToRead.map((book, index) => (
                      <li key={index}>{book}</li>
                    ))}
                  </ul>
                </div>
              )}


              {hobby.Name !== "Reading" && hobby.Name !== "Reading (continued)" && (
                <p>{hobby.Description}</p>
              )}
              {hobby.AlbumUrl && (
                <div>
                  <a href={hobby.AlbumUrl} target="_blank" rel="noopener noreferrer">View Album</a>
                </div>
              )}
              {hobby.PhotoCollection && hobby.PhotoCollection.map((photo, index) => (
                <div className="hobbies-screenshots" key={index}>
                  <a href={photo.Url} target="_blank" rel="noopener noreferrer">
                    Click to View Certificate
                  </a>
                </div>
              ))}
            </div>
          ))}
        </Slider>



      </div>
    </Layout>
  );
};

export default Hobbies;
