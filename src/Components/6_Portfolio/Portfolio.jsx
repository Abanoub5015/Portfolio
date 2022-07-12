import React from "react";
import "./Portfolio.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; /* to use the (swiper js) */

import Sildebar from "../../img/sidebar.gif";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";


import { ThemeContext } from '../../Context';
import { useContext } from 'react';


function Portfolio() {

   //for dark mode theme
   const theme = useContext(ThemeContext);
   const darkMode = theme.state.darkMode;

   //handleSlidesChangeListener
   var mediaQuery = window.matchMedia("(max-width: 700px)")
   var slidesPerView;
  // function handleSlidesChangeListener(e) {
      if (mediaQuery.matches) {
        slidesPerView=1;
      }
      else
      {
        slidesPerView=2
      }
 //  }
    // Register event listener
  //  mediaQuery.addListener(handleSlidesChangeListener)
    // Initial check
  //  handleSlidesChangeListener(mediaQuery)



  return (
    <div className="portfolio" id="Portfolio"> {/* id for link(react-scroll) in Navbar.jsx */}
      {/* Heading section */}
      <span style={{color: darkMode? 'white' : ''}}>Recent Porjects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
      className='portfolio-slider'
      spaceBetween={30}
      slidesPerView={slidesPerView}
      grabCursor={true}
      >
        
        <SwiperSlide>
        <div class="container">
           <img src={Sildebar} alt="" />
           <div class="stack-top">P</div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="container">
           <img src={Ecommerce} alt="" />
           <div class="stack-top">P</div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="container">
            <img src={HOC} alt="" />
            <div class="stack-top">P</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="container">
          <img src={MusicApp} alt="" />
          <div class="stack-top">P</div>
        </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={MusicApp} alt="" />
          <div class="stack-top">F</div>
        </SwiperSlide>

      </Swiper>

    </div>

  );
}

export default Portfolio;
