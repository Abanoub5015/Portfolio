import React from 'react'
import './Card.css'

function Card({emoji,custom_emoji,heading, detail}) {
  return (
    <div className='card'>
        {custom_emoji}
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
    </div>
  )
}

export default Card