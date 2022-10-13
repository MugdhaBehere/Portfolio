import React from 'react';

import { FaFacebookF } from 'react-icons/fa';
import {FaLinkedinIn } from 'react-icons/fa';
const link=url=>{
  window.open(url, '_blank');

}

const SocialMedia = () => (
  <div className="app__social">
   
    <div>
      
        <FaFacebookF onClick={()=>link("https://www.facebook.com/mugdhabehere3443")}/>
      
    </div>
    <div>
      
        <FaLinkedinIn onClick={()=>link("https://www.linkedin.com/in/mugdhabehere")}/>      

    </div>
    </div>
);

export default SocialMedia