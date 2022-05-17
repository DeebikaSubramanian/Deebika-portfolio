import React from 'react'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import './home.css'
import it from '../images/it.png'
import message from '../images/message.png'
import element1 from '../images/element1.png'
import element2 from '../images/element2.png'
import element3 from '../images/element3.png';
import element4 from '../images/element4.png';
import element5 from '../images/element5.png';
import element6 from '../images/element6.png';
import Deebika_cv from '../cv/Deebika_cv.pdf'

function Home() {
  return (
   <>
   <section className="home" id="home">
       <div className="container home_parentdiv">
<div className='home_div'>
    <h1 className="hi">Hi, I'm <span className='home_name'>Deebika</span></h1>
    <h2 className="fullstack">a Full Stack Developer.</h2>
      
          <p className='fresher'>Fresher</p>
          <div className="buttondiv"><a href={Deebika_cv} target="_blank"> <button className="cv_button">RESUME</button></a></div>
</div>
<div className="home_image_div">
<img  className='home_img' src={it} alt=""/>
<img className="elements1 elementAni" src={element1} alt=""/>
<img className="elements2 elementAni" src={element2} alt=""/>
<img className="elements3 elementAni" src={element3} alt=""/>
<img className="elements4 elementAni" src={element4} alt=""/>
<img className="elements5 elementAni" src={element5} alt=""/>
<img className="elements6 elementAni" src={element6} alt=""/>
<img className="elements7 elementAni" src={message} alt=""/>
</div>
       </div>
       </section>
       </>
  )
}

export default Home