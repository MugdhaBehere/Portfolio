import React from 'react';
import './Header.scss';
import {motion} from 'framer-motion';
import { images } from '../../constants';
const scaleVariants={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1, ease:"easeInOut"
    }
  }
}
const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
    <motion.div 
    whileInView={{x:[-100,0], opacity:[0,1]}}
    transition={{duration:0.5}}
    className="app__header-info"
    >
    <div className="app__header-badge">
    <div className="badge-cmp app__flex">
    <span>👋🏻</span>
    <div style={{marginLeft: 20}}>
      <p className='p-text'><strong>Namaste, My name is</strong> </p>
      <h1 className='head-text'><strong>Mugdha</strong></h1>

    </div>
    <div className='tag-cmp app__flex'>
      <p className='p-text'>Software Developer</p>
      <p className='p-text'>Full Stack Developer</p>
    </div>

    </div>

    </div>
    </motion.div>
    <motion.div 
     whileInView={{ opacity:[0,1]}}
    transition={{duration:0.5, delayChildren: 0.5}}
    className="app__header-img"
    >
    <img src={images.profile} alt="profile_bg"></img>
    <motion.img
     whileInView={{scale:[0,1]}}
    transition={{duration:1, ease:'easeInOut'}}
    className="overlay_circle"
    src={images.circle}
    alt="profile_circle"
    
    />
    </motion.div>
    <motion.div
    variants={scaleVariants}
    whileInView={scaleVariants.whileInView}
    className="app__header-circles"
    
    >
    {[images.react, images.golang, images.java, images.javascript, images.amazonwebservices, images.vscode, images.github,images.python, images.git, images.cpp,images.html, images.css].map((circle,index)=> <div className='circle-cmp app__flex' key={`circle-index`}>
      <img src={circle} alt="circle"/>
    </div>)
    }

    </motion.div>
    </div>
  )
};

export default Header