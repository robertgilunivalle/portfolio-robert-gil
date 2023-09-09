
import React from 'react'

export const Info = ({biografia, nombre}) => {
  return (
    <>
    <div className='info-container'>
    <h1>{nombre}</h1>
    <h1> {biografia}</h1>
    </div>
    </>
    
  )
}

