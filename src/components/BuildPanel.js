import React from 'react'

const BuildPanel = ({ text, description }) => {

  return (
    <div className='panels-builds'>
      <h3>{text}</h3>
      <p>{description}</p>
    </div>
  )
}

export default BuildPanel