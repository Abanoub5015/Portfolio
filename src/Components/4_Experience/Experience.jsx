import React from 'react'
import './Experience.css'

function Experience() {
  return (
    <div className="experience" id="Experience"> {/* id for link(react-scroll) in Navbar.jsx */}
        <div className="achievement">
            <div className="circle">2+</div>
            <span>years</span>
            <span>Experience</span>
        </div>

        <div className="achievement">
            <div className="circle">5+</div>
            <span>Completed</span>
            <span>Projects</span>
        </div>

        <div className="achievement">
            <div className="circle">1+</div>
            <span>Freelance</span>
            <span>Work</span>
        </div>
    </div>
  )
}

export default Experience