import React from 'react'
import './projects.css'
import Card from './Card'
import data from './projectapi'
import project from '../images/project.png'


function Projects() {
  return (
    <>
<section id="project" className='project' 
//  data-aos="zoom-out"
//     data-aos-duration="1000"
//     data-aos-once="false"
    >

      
          <h3 className='heading'>Projects</h3>
          
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