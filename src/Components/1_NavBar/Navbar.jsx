import React from 'react'
import Toggle from '../1_NavBar-Toggle/Toggle'
import './Navbar.css'

import { Link } from 'react-scroll'

import A_logo from "../../img/A_logo.png";
import A_logo_white from "../../img/A_logo_white.png";


import { ThemeContext } from '../../Context';
import { useContext } from 'react';


function Navbar() {

    //for dark mode theme .. for (A_logo)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

   // const [isFocused, setFocus] = useState(false);

   function refreshPage(){ 
    window.location.reload(); 
  }

  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <img src={darkMode? A_logo_white : A_logo} alt="" className="A_logo" onClick={refreshPage} />
            {/* <div className="n-name">Abanoub</div> */}
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}> {/* listStyleType: none to remove (.)/dots of every element */}
                 
                  {/*  
                  <Link spy={true} to={Navbar} smooth={true} 
                      onMouseEnter={() => setFocus(true)}
                      onMouseLeave={() => setFocus(false)}
                      className="link-hoverColor"
                      style={{ "color": isFocused? 'orange' : '' , "cursor": "pointer"}}>
                    <li>Home</li>
                    </Link> 
                  */}

                   <Link spy={true} to={'Navbar'} smooth={true} className="link-hoverColor">
                   <li onClick={refreshPage} >Home</li>
                   </Link>

                   <Link spy={true} to={'Services'} smooth={true} className="link-hoverColor">
                   <li>Services</li>
                   </Link>

                   <Link spy={true} to={'Experience'} smooth={true} className="link-hoverColor">
                   <li>Experience</li>
                   </Link>

                   <Link spy={true} to={'Portfolio'} smooth={true} className="link-hoverColor">
                   <li>Portfolio🔥</li>
                   </Link>

                   
                         
                </ul>
            </div>

            <Link spy={true} to={'Contact'} smooth={true} className="link-hoverColor">

                <button className="button n-button"> Contact </button>

            </Link>
       
        </div>
    </div>
  )
}

export default Navbar