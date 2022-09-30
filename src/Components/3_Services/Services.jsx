import React from 'react'
import Card from '../3_Services-Card/Card'
import './Services.css'

import HeartEmoji from '../../img/heartemoji.gif'
import glasses from '../../img/glasses.gif'
import Humble from '../../img/humble.png'
import Angular from '../../img/Angular.gif'


import ParticleImage, { ParticleOptions, forces, ParticleForce } from "react-particle-image";


import { ThemeContext } from '../../Context';
import { useContext } from 'react';

import { motion } from "framer-motion"

function Services() {

    // for the animation .. 2 sec
    const transition ={duration: 2, type: 'spring'}

     //for dark mode theme
     const theme = useContext(ThemeContext);
     const darkMode = theme.state.darkMode;
 

    const particleOptions: ParticleOptions = {
        filter: ({ x, y, image }) => {
          // Get pixel
          const pixel = image.get(x, y);
          // Make a particle for this pixel if blue > 50 (range 0-255)
          return pixel.b > 50;
        },
        color: ({ x, y, image }) => "#61dafb"
      };

      const motionForce = (x: number, y: number): ParticleForce => {
        return forces.disturbance(x, y, 7);
      };


    return (
        <div className='services' id="Services"> {/* id for link(react-scroll) in Navbar.jsx */}
            
            <div className="awesome">
                <span style={{color: darkMode? 'white' : ''}}>My Technology</span>
                <span>Services</span>
                <spane>These are all (frameworks, libraries) that I worked on in their languages
                    <div class="container">
                     <div class="stack" style={{'--index': '3'}}>
                         <span style={{'--index': '0'}}>And here's my resume.. If you are interested, just click on the button below😌</span>
                         <span style={{'--index': '1'}}>And here's my resume.. If you are interested, just click on the button below😌</span>
                         <span style={{'--index': '2'}}>And here's my resume.. If you are interested, just click on the button below😌</span>
                     </div>
                   </div>
                </spane>

                <a href={'https://drive.google.com/file/d/1nk1_E2HITCP4rEl6HatBxYr2lEarc6Ry/view?usp=sharing'} target="_blank" rel="noreferrer" >
                <button className="button s-button"> View CV</button>
                </a>
                
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            <div className="cards">


                <motion.div
                  initial={{left:'-1rem'}}
                  whileInView= {{left: '1rem'}}
                  transition= {{transition}}
                 
                 
                 style={{ left: '2rem'}}>
                    <Card
                        emoji={Angular}
                        heading={'Angular'}
                        detail={"develop and build single-page web applications using TypeScript language. also Angular is a fully responsive and powerful framework."}
                    />
                </motion.div>

                <motion.div
                 initial={{left:'27rem', top: "3rem"}}
                 whileInView= {{left: '17rem', top: "3rem"}}
                 transition= {{transition}}
                
                
                style={{ left: '16rem'}}>
                    <Card
                         custom_emoji={ <ParticleImage
                            src={Humble}
                            scale={1.5}
                            entropy={20}
                            maxParticles={4200}
                            particleOptions={particleOptions}
                            mouseMoveForce={motionForce}
                            touchMoveForce={motionForce}
                            style={{
                                width: "90%",
                                height: "80%",
                                position: "absolute",
                                top: -50,
                                left: 12,
                                background: 'transparent'
                            }}
                            />}
                        heading={'React'}
                        detail={"develop build user interfaces specifically for single-page applications .. React JS used in web development to build interactive elements on websites."}
                    />
                </motion.div>



                <motion.div 
                  initial={{left:'-22rem',top:"17rem"}}
                  whileInView= {{left: '-3rem'}}
                  transition= {{transition}}
                
                style={{  left: '-2rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Flutter'}
                        detail={
                            <p style={{"font-size": '12px'}}>develop 
                             <span style={{"font-size": '12px' ,'color':"var(--clr)", 'font-weight': "bold"}}> cross-platform applications </span>
                              for ( Android, iOS, Linux, macOS, Windows, and the web ) from a 
                              <span style={{"font-size": '12px', color:"#ff1867", 'font-weight':'bold'}}> single codebase</span>
                              .</p>}
                        //detail={"develop cross-platform applications for ( Android, iOS, Linux, macOS, Windows, and the web ) from a single codebase."}
                    />
                </motion.div>
                
            

                <motion.div 
                 initial={{left:'18rem'}}
                 whileInView= {{left: '12rem'}}
                 transition= {{transition}}

                style={{ left: '12rem', top: '19rem' }}>
                    <Card
                       emoji={glasses}
                        heading={'Android'}
                        detail={"creates apps used on Android phones and tablets.. designs software and applications for Android devices and the Google Play Store."}
                    />
                    
                </motion.div>

                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
             
            </div>
        </div>
    )
}

export default Services