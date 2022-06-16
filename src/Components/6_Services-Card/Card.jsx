import React from 'react'
import './Card.css'

function Card({emoji,custom_emoji,heading, detail}) {
  return (
    <div className='card'>
        {custom_emoji}
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="c-button">Learn More</button>
    </div>
  )
}

export default Card