import React from 'react'
import './Intro.css'

/* import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import wa from '../../img/whatsapp.png'; */

import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'

import boy from '../../img/boy.png'

import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../2_Intro-FloatingDiv/FloatingDiv';

import { ThemeContext } from '../../Context';
import { useContext } from 'react';

import { motion } from "framer-motion"

/* import ReactRoundedImage from "react-rounded-image"; */


function Intro() {

    // for the animation .. 2 sec
    const transition ={duration: 2, type: 'spring'}

    //for dark mode theme
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode? 'white' : ''}}>Hey! I'm</span>
                    <span>Abanoub Magdy</span>
                    <span>Front-End Developer with a high
                        level of experience in web development, production of high-quality work, with
                        <br/>
                         (2 years experience) in Flutter Development
                        <br/>                      
                         (1-year experience) in Front-End Development [React JS] 
                        <br/>    
                         (1-year experience) in Android Development 
                      
                        </span>
                </div>

              {/*   <button className="button i-button">
                    Hire me
                </button> 
              */}

            
               <div className="i-icons">
                 <div className="icon github">
                    <a href="https://github.com/Abanoub5015" target="_blank" rel="noreferrer">
                        <div className="tooltip">Github</div>
                        <div className="circle_tooltip"><span className="<i fa-brands fa-github fa-3x"></span> </div>
                       {/*  <ReactRoundedImage
                            image={Github}
                            roundedColor="#fff"
                            imageWidth="100"
                            imageHeight="100"
                            roundedSize="7"
                            hoverColor="#171515"
                         /> */}

                    </a>
                 </div>
            

                 <div className="icon linkedin">
                    <a href="https://www.linkedin.com/in/abanoub-magdy-98a17412a/" target="_blank" rel="noreferrer">
                        <div className="tooltip">LinkedIn</div>
                        <div className="circle_tooltip"><span className="fa-brands fa-linkedin-in fa-3x"></span> </div>
                    </a>
                 </div>
                  
                 <div className="icon whatsapp">
                    <a href="https://api.whatsapp.com/send/?phone=%2B201555737801&text&app_absent=0" target="_blank" rel="noreferrer">
                        <div className="tooltip">WhatsApp</div>
                        <div className="circle_tooltip"> <i class="fa-brands fa-whatsapp fa-3x"></i> </div>
                        
                    </a>
                 </div>
               </div>

            </div>
 

           <div className="i-right">
                <img src={vector1} alt="" />
                <img src={vector2} alt="" />
                <img src={boy} alt="" />

                <motion.img
                     initial={{left:'-36%'}}
                     whileInView= {{left: '-24%'}}
                     transition= {{transition}}

                src={glassesimoji} alt="" 
                />

                <motion.div
                     initial={{top: '-4%' , left:'74%'}}
                     whileInView= {{left: '68%'}}
                     transition= {{transition}}

                 style={{top: '-4%', left: '68%'}}>
                <FloatingDiv image={crown} txt1={'Web'} txt2={'Developer'}/>
                </motion.div>

                <motion.div
                     initial={{top: '18rem' , left:'9rem'}}
                     whileInView= {{left: '-5.5rem'}}
                     transition= {{transition}}

                   style={{top: '18rem', left: '-5.5rem'}}>
                  <FloatingDiv image={thumbup} txt1={'Flutter'} txt2={'Developer'}/>
                </motion.div>

                {/* blur div */}
                <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
                <div className="blur" style={{background: '#c1f5ff', top: '17rem', left: '-9rem'}}></div>


            </div>

            
        </div>
    )
}

export default Intro