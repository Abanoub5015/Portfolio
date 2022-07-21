import React from 'react'
import './Footer.css';

import Wave from '../../img/wave.png';



/* import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import wa from '../../img/whatsapp.png'; */

/* import ReactRoundedImage from "react-rounded-image"; */

function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{width:'100%'}}/>
      <div className="f-content">
    
        <div className="f-icons">
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
        <span>Abanoub5016@gmail.com</span>
      </div>
    </div>
  )
}

export default Footer