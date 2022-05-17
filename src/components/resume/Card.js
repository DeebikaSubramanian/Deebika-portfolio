import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='card'>
          
            <h4 className="resume_title">{props.resume.course}</h4>
            <p>
            <span className="eduDetails">{props.resume.place}</span><br/>
            <span className="eduDetails">{props.resume.year}</span><br/>
            <span className="eduDetails">{props.resume.percentage}</span>
            </p>
        </div>
    </>
  )
}

export default Card