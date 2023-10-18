
import React from 'react'
import "./style.css"

export const Info = ({biografia, nombre}) => {
  return (

    <div className='info-container'>
      <div className="card-info">
        <h1 className="name"> {nombre}</h1>
        <span className="biography"> {biografia}</span>
      </div>
    </div>
   
    
  )
}

