import React from 'react'
import Card from '../3_Services-Card/Card'
import './Services.css'

import HeartEmoji from '../../img/heartemoji.gif'
import glasses from '../../img/glasses.gif'
import Humble from '../../img/humble.png'

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
                <span style={{color: darkMode? 'white' : ''}}>My awesome</span>
                <span>Services</span>
                <spane>This is all the language I've worked with
                    <br />
                    And here is my resume... If you are interested, just click on the button below 😌
                </spane>

                <a href={'https://drive.google.com/u/0/uc?id=1IjsLpIQ56FB7K0ctJvUizfM13X4OKJgg&export=download'}>
                <button className="button s-button"> Download CV</button>
                </a>
                
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            <div className="cards">

                <motion.div 
                 initial={{left:'25rem'}}
                 whileInView= {{left: '14rem'}}
                 transition= {{transition}}
                
                style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Flutter'}
                        detail={
                            <p style={{"font-size": '12px'}}>develop 
                             <span style={{"font-size": '12px' ,'color':"blue", 'font-weight': "bold"}}> cross-platform applications </span>
                              for ( Android, iOS, Linux, macOS, Windows, and the web ) from a 
                              <span style={{"font-size": '12px', color:"darkolivegreen", 'font-weight':'bold'}}> single codebase</span>
                              .</p>}
                        //detail={"develop cross-platform applications for ( Android, iOS, Linux, macOS, Windows, and the web ) from a single codebase."}
                    />
                </motion.div>
                
                <motion.div
                 initial={{left:'-25rem'}}
                 whileInView= {{left: '-4rem'}}
                 transition= {{transition}}
                
                style={{ left: '-4rem', top: '12rem' }}>
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
                        detail={"develop, building user interfaces specifically for single-page applications .. React JS used in web development to build interactive elements on websites."}
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