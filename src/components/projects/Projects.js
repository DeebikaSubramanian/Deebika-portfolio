import React from 'react'
import './projects.css'
import Card from './Card'
import data from './projectapi'
import project from '../images/project.png'


function Projects() {
  return (
    <>
<section id="project" className='project'  data-aos="fade-left"
    data-aos-duration="1000"
    data-aos-once="false">

      <div >
          <h3 className='heading'>Projects</h3>
          {/* <img className="project_img" src={project} alt=""/> */}
          {/* <i class="fa-solid fa-desktop-arrow-down fa-fade" style={{color:"red"}}></i> */}
          </div>
 <div className="content project_flex">
   {
     data.map((e,index)=>
     {
       console.log(data.length)
       return <Card key={index} image={e.image} title={e.title} link={e.link}/>
     })
   }
  </div>
 
</section>
</>
  )
}

export default Projects