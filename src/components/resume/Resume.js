import React from "react"
import "./resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Card"

const Resume = () => {
  return (
    <>
      <div className='resume container' id='resume'>
      <h3 className='heading'>Resume</h3>
        
         <div className='content-section'>
            <div className='left'>
            <h4 className="head">Education</h4>
              <div className='content'>
                {ResumeApi.map((e, id) => {
              
                    return <Card resume={e} />
                //   }
                })}

</div>
            </div>
           
            <div className='right'>
            <h4 className="head">Personal Details</h4>    
              <div className='content'>
              <div className='card'>
          
          <h4 className="resume_title">Present Address</h4>
          <p>
          <span className="eduDetails">2nd parklands</span><br/>
          <span className="eduDetails">Nairobi</span><br/>
          <span className="eduDetails">Kenya</span>
          </p>
      </div>

      <div className='card'>
          
          <h4 className="resume_title">Native</h4>
          <p>
          <span className="eduDetails">Trichy</span><br/>
          <span className="eduDetails">Tamilnadu</span><br/>
          <span className="eduDetails">India</span>
          </p>
      </div>
      <div className='card'>
      <h4 className="resume_title">DOB</h4>
          <p>
          <span className="eduDetails">08.12.1989</span><br/>
          </p>
          <h4 className="resume_title">Marital Status</h4>
          <p>
          <span className="eduDetails">Married</span><br/>
          </p>
      </div>

      <div className='card'>
          
          <h4 className="resume_title">Contact</h4>
          <p>
          <span className="eduDetails"><i class="fab fa-whatsapp" style={{color:"blue"}}aria-hidden="true"></i>9751371965</span><br/>
          </p>
          <p>
          <span className="eduDetails"><i class="fa-solid fa-envelope" style={{color:"blue"}}></i>deebideebikask@gmail.com</span><br/>
          </p>
      </div>

              
                </div>
            </div>
          
        </div>
       
      </div>
    </>
  )
}

export default Resume