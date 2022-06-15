import React from 'react'
import Card from '../Card/Card'
import './Services.css'

import HeartEmoji from '../../img/heartemoji.gif'
import glasses from '../../img/glasses.gif'
import Humble from '../../img/humble.png'

import ParticleImage, { ParticleOptions, forces,
    ParticleForce } from "react-particle-image";


function Services() {

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
        <div className='services'>
            <div className="awesome">
                <span>My awesome</span>
                <span>Services</span>
                <spane>hhhh ahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahaha h haha h
                    <br />
                    is asd fdsa dsfasfd
                </spane>

                <a href={'https://download2271.mediafire.com/z3sldvb12exg/qjf7cw7g2htyrpo/Abanoub+Magdy+Resume.pdf'}>
                <button className="button s-button"> Download CV</button>
                </a>
                
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            <div className="cards">
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Flutter'}
                        detail={"develop cross platform applications for Android, iOS, Linux, macOS, Windows, Google Fuchsia, and the web from a single codebase."}
                    />
                </div>
                <div style={{ left: '-4rem', top: '12rem' }}>
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
                </div>
                <div style={{ left: '12rem', top: '19rem' }}>
                    <Card
                       emoji={glasses}
                        heading={'Android'}
                        detail={"creates apps used on Android phones and tablets.. designs software and applications for Android devices and the Google Play Store."}
                    />
                    
                </div>

                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
             
            </div>
        </div>
    )
}

export default Services