import React from 'react'
import aboutmeImage from '../images/aboutmeImage.png'
import Deebika_cv from '../cv/Deebika_cv.pdf'
import './aboutme.css'


function Aboutme() {
  return (
    <div className="about_container" id="aboutme"
    data-aos="fade-left"
    data-aos-duration="1000"
    data-aos-once="true" >
        <h3 className="heading">About Me</h3>
        <div className="about">
        <div className="about_image_div">
            <img className="about_image" src={aboutmeImage} alt=""/>
            </div>
            <div className="about_content">
                <ul className="about_list">
                    <li className='about_link'>
                     {/* <i class="fa-solid fa-angles-right"></i> */}
                     Doing Fullstack Developement certificate course in Guvi Geek, Chennai at present.
                    </li>
                    <li className='about_link'>
                        I love to do codings.
                    </li>
                    <li className='about_link'>
                        Interested in Frontend Development as well as Web developement
                    </li>
                    <li className='about_link'>
                        I am located in Nairobi, Kenya at present. Willing to do Work from Home
                    </li>
                </ul> 
                {/* <p className="about_list">Doing Fullstack Development certificate course in Guvi Geek, Chennai at present.  
                <br/>Passionate towards coding. <br/>
                Interested in Frontend as well as backend developement.</p> */}
                <div className="buttondiv"><a href={Deebika_cv} target="_blank"> <button className="cv_button">VIEW RESUME</button></a></div>
                </div>
                </div>
    </div>
  )
}

export default Aboutme