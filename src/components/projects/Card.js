import React from 'react'
import {Link} from 'react-router-dom'

function Card(props) {
  return (
      <> 
    <div className="box project_shadow project_card">
    <div className="image">
        <a href={props.link} target="_blank">
    <img src={props.image} alt=" "/></a></div>
     <h4 className="title">{props.title}</h4>
       </div>
      </>
  )
}

export default Card