import React from 'react'
import aboutmeImage from '../images/aboutmeImage.png'
import './aboutme.css'


function Aboutme() {
  return (
    <div className="about_container container" id="aboutme"  
    // data-aos="zoom-out"
    // data-aos-duration="1000"
    // data-aos-once="false" 
    >
        <h3 className="heading">About Me</h3>
        <div className="about">
        <div className="about_image_div">
            <img className="about_image" src={aboutmeImage} alt=""/>
            </div>
            <div className="about_content">

            {/* <ul className="about_list">
                    <li className='about_link'>
                   completed certification as Full Stack Developer from reputed Institution.
                    </li>
                    <li className='about_link'>
                      Post graduate in Information Technology.
                    </li>
                    <li className='about_link'>
                        Interested in Frontend Development as well as Web developement
                    </li>
                    <li className='about_link'>
                       Proficient in Javascript,Html,Css,React and mongodb.
                    </li>
                </ul>  */}
                <p className="about_list">
                completed certification as Full Stack Developer from reputed Institution.   Post graduate in Information Technology.  
                 Interested in Frontend Development as well as Web developement.   Proficient in Javascript,Html,Css,React and mongodb.
                </p>
            
                <div className="buttondiv"><a href="https://drive.google.com/file/d/1AnJv-z0Ss-kowRO78Q9XAiw_k7lL54dn/view?usp=sharing" target="_blank"> <button className="cv_button">VIEW RESUME</button></a></div>
                </div>
                </div>
    </div>
  )
}

export default Aboutme