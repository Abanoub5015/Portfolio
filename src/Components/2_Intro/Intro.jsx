import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import wa from '../../img/whatsapp.png';
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'

import boy from '../../img/boy.png'

import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../2_Intro-FloatingDiv/FloatingDiv';




function Intro() {
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hey! I'm</span>
                    <span>Abanoub Magdy</span>
                    <span>Front-End Developer with high
                        level of experience in web designing
                        and development,Production of high-quality work</span>
                </div>

                <button className="button i-button">
                    Hire me
                </button>

                <div className="i-icons">
                    <a href="https://github.com/Abanoub5015?tab=repositories" target="_blank" rel="noreferrer">
                        <img src={Github} alt="" />
                    </a>

                    <a href="https://www.linkedin.com/in/abanoub-magdy-98a17412a/" target="_blank" rel="noreferrer">
                        <img src={LinkedIn} alt="" />
                    </a>

                    <a href="https://api.whatsapp.com/send/?phone=%2B201555737801&text&app_absent=0" target="_blank" rel="noreferrer">
                        <img src={wa} alt="" />
                    </a>

                </div>

            </div>

            <div className="i-right">
                <img src={vector1} alt="" />
                <img src={vector2} alt="" />
                <img src={boy} alt="" />

                <img src={glassesimoji} alt="" />

                <div style={{top: '-4%', left: '68%'}}>
                    <FloatingDiv image={crown} txt1={'Web'} txt2={'Developer'}/>
                </div>

                <div style={{top: '18rem', left: '-5.5rem'}}>
                    <FloatingDiv image={thumbup} txt1={'Flutter'} txt2={'Developer'}/>
                </div>

                {/* blur div */}
                <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
                <div className="blur" style={{background: '#c1f5ff', top: '17rem', left: '-9rem'}}></div>


            </div>
        </div>
    )
}

export default Intro