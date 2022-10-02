import React from 'react'

const GuidePanel = ({ text , description }) => {

  return (
    <div className='panels-guides'>
      <h3>{text}</h3>
      <p>{description}</p>
    </div>
  )
}

export default GuidePanel