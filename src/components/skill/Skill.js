import React from 'react'
import './skill.css'
import skill from '../images/skill.png'

function Skill() {
  return (
    <div className='container skills_container' id="skills"
    // data-aos="zoom-out"
    // data-aos-duration="1000"
    // data-aos-once="false" 
    >
 
<h3 className="heading skill_heading">Skills</h3>
          <div className='skills f_flex'>
              <span className='name'>javascript</span>
              <div className='percent'>
                  <div className='progress' style={{width:"85%"}}></div>
              </div>
              <span className='value'>85%</span>
          </div>
          
          <div className='skills f_flex'>
              <span className='name'>Html</span>
              <div className='percent'>
                  <div className='progress'style={{width:"80%"}}></div>
              </div>
              <span className='value'>80%</span>
          </div>

          <div className='skills f_flex'>
              <span className='name'>css</span>
              <div className='percent'>
                  <div className='progress' style={{width:"80%"}}></div>
              </div>
              <span className='value'>80%</span>
          </div>

           <div className='skills f_flex'>
              <span className='name'>react</span>
              <div className='percent'>
                  <div className='progress' style={{width:"75%"}}></div>
              </div>
              <span className='value'>75%</span>
          </div>

          <div className='skills f_flex'>
              <span className='name'>mongodb</span>
              <div className='percent'>
                  <div className='progress' style={{width:"65%"}}></div>
              </div>
              <span className='value'>65%</span>
          </div>

          <div className='skills f_flex'>
              <span className='name'>nodejs</span>
              <div className='percent'>
                  <div className='progress' style={{width:"65%"}}></div>
              </div>
              <span className='value'>65%</span>
          </div>

    </div>
  )
}

export default Skill