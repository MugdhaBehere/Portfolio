import React, {useEffect} from 'react';
import {About, Header, Footer, Skills, Testimonial, Work} from './container';
import { Navbar } from './components';
import './App.scss';
const App = () => {
  useEffect(() => {
    document.title = 'Mugdha Behere'
}, []);
  return (
    <div className='app'>
    <Navbar/>
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
</div>
  )
};

export default App