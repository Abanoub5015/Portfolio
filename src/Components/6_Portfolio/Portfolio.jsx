import React from "react";
import "./Portfolio.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; /* to use the (swiper js) */

import Ecommerce1 from "../../img/Ecommerce1.jpg";
import ecommerce2 from "../../img/ecommerce2.png";
import hdbms from "../../img/hdbms.png";
import vibes from "../../img/vibes.png";
import mystore from "../../img/mystore.png";

import IT0 from "../../img/IT0.jpg";
import IT1 from "../../img/IT1.jpg";
import IT2 from "../../img/IT2.jpg";
import IT3 from "../../img/IT3.jpg";
import IT4 from "../../img/IT4.jpg";
import IT5 from "../../img/IT5.jpg";
import IT6 from "../../img/IT6.jpg";
import IT7 from "../../img/IT7.jpg";
import IT8 from "../../img/IT8.jpg";
import IT9 from "../../img/IT9.jpg";




import { ThemeContext } from '../../Context';
import { useContext } from 'react';


/////////////////////////////////////////////////
// for Pagination and Navigation
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
//////////////////////////////////////////////////


function Portfolio() {

   //for dark mode theme
   const theme = useContext(ThemeContext);
   const darkMode = theme.state.darkMode;

   //handleSlidesChangeListener
   var mediaQuery = window.matchMedia("(max-width: 900px)")
   var mediaQuery2 = window.matchMedia("(max-width: 1300px)")

   var slidesPerView;
  // function handleSlidesChangeListener(e) {
      if (mediaQuery.matches) {
        slidesPerView=1;
      }
      else if (mediaQuery2.matches)
      {
        slidesPerView=2
      }
      else 
      {
        slidesPerView=3
      }
 



  return (
    <div className="portfolio" id="Portfolio"> {/* id for link(react-scroll) in Navbar.jsx */}
      {/* Heading section */}
      <span style={{color: darkMode? 'white' : ''}}>Portfolio</span>
      <span>Projects Timeline</span>


      {/* timeline */}
      <section id="timeline">
        <div class="tl-item">
         <div class="tl-bg" style={{'background-image': 'url(https://wallpapermemory.com/uploads/237/android-wallpaper-full-hd-1080p-169079.jpg)'}}></div>
    
         <div class="tl-year">
           <p class="f2 heading--sanSerif">Jan 2021</p>
         </div>

         <div class="tl-content">
           <h1>Android</h1>
           <p>E-commerce online shopping version1 <br/> for (Android) using (Java).</p>
         </div>

        </div>

       <div class="tl-item">
       <div class="tl-bg" style={{'background-image': 'url(https://i.ibb.co/B4XCd4y/flutter-e1625644676239.png)'}}></div>
           <div class="tl-year">
             <p class="f2 heading--sanSerif">Oct 2021</p>
          </div>

          <div class="tl-content">
             <h1 class="f3 text--accent ttu">Flutter</h1>
            <p>E-commerce online shopping version2 <br/> for (Android, iOS, Web) using (Flutter).</p>
          </div>

        </div>

       <div class="tl-item">
          <div class="tl-bg" style={{'background-image': 'url(https://ealialmashi.ly/wp-content/uploads/2022/05/csharp-using-declaration.png)'}}></div>
    
          <div class="tl-year">
             <p class="f2 heading--sanSerif">Jan 2022</p>
          </div>

           <div class="tl-content">
             <h1 class="f3 text--accent ttu">Desktop App</h1>
            <p style={{'font-size': '12px'}}>Hospital database management system for (Desktop) using (C#) <br/> [Ain Shams University Hospitals,Public Relations Department].</p>
          </div>
       </div>

       <div class="tl-item">
          <div class="tl-bg" style={{'background-image': 'url(https://wallpaperaccess.com/full/3949076.jpg)'}}></div>
        
          <div class="tl-year">
            <p class="f2 heading--sanSerif">May 2022</p>
          </div>
    
          <div class="tl-content">
            <h1 class="f3 text--accent ttu">Website</h1>
            <p>Social Media for (Web) using (React JS).</p>
          </div>
       </div>

       <div class="tl-item">
          <div class="tl-bg" style={{'background-image': 'url(https://i.ibb.co/z8msJBF/React-Js-1.jpg)'}}></div>
        
          <div class="tl-year">
            <p class="f2 heading--sanSerif">Jun 2022</p>
          </div>
    
          <div class="tl-content">
            <h1 class="f3 text--accent ttu">another Website</h1>
            <p>My Portfolio for (Web) using (React JS). <br/> that's right where you are now!😌</p>
            <p></p>
          </div>
       </div>

       <div class="tl-item">
          <div class="tl-bg" style={{'background-image': 'url(https://i.ibb.co/yXqRw3P/angular-bg.jpg)'}}></div>
        
          <div class="tl-year">
            <p class="f2 heading--sanSerif">Aug 2022</p>
          </div>
    
          <div class="tl-content">
            <h1 class="f3 text--accent ttu">Web Application</h1>
            <p>Online Responsive Store <br/> for (Web Application) using (Angular).</p>
          </div>
       </div>
      </section>




      {/* slider */}
      <Swiper
      className='portfolio-slider'
      spaceBetween={30}
      slidesPerView={slidesPerView}
      grabCursor={true}
      >
        
        <SwiperSlide>
           <div class="ui-card">
              <img src={Ecommerce1} alt="" />
               <div class="description">
                 <h6>Jan 2021</h6>
                 <h6>E-commerce(1) [Android App]</h6>
		             <a href="https://drive.google.com/file/d/1BJNlbP0jvtA31huASuXpW-BNp0OJkp4_/view" target="_blank" rel="noreferrer"><span>App Screenshots</span><i></i></a>
	             </div>
            </div>
          <div class="stack-top" style={{'font-size': '18px'}}>Project</div>

        </SwiperSlide>

        <SwiperSlide>
           <div class="ui-card">
              <img src={ecommerce2} alt="" />
               <div class="description">
                 <h6>Oct 2021</h6>
                 <h6>E-commerce(2) [Flutter App]</h6>
		              <a style={{'--clr':'#6eff3e'}} href="https://lowmium.ml/" target="_blank" rel="noreferrer"><span>Website🔗</span><i></i></a>    
                  <a href="https://github.com/Abanoub5015/LowMium" target="_blank" rel="noreferrer"><span>Project Github</span><i></i></a>   
	             </div>
            </div>
          <div class="stack-top" style={{'font-size': '18px'}}>Project</div>

        </SwiperSlide>

        <SwiperSlide>
        <div class="ui-card">
              <img src={hdbms} alt="" />
               <div class="description">
                 <h6>Jan 2022</h6>
                 <h6>Hospital system [Desktop App]</h6>
                 <a style={{'--clr':'#ff1867'}} href="https://drive.google.com/file/d/12-jncScgvGmzbie4IKAuXoyC_QhXd1Jo/view" target="_blank" rel="noreferrer"><span>demo video</span><i></i></a>    
	             </div>
            </div>
          <div class="stack-top" style={{'font-size': '15px'}}>Freelance</div>
        </SwiperSlide>

        <SwiperSlide>
           <div class="ui-card">
              <img src={vibes} alt="" />
               <div class="description">
                 <h6>May 2022</h6>
                 <h6>Social Media [Website]</h6>
                 <a style={{'--clr':'#6eff3e'}} href="https://vibes.gq/" target="_blank" rel="noreferrer"><span>Website🔗</span><i></i></a>    
                 <a href="https://github.com/Abanoub5015/Vibes" target="_blank" rel="noreferrer"><span>Project Github</span><i></i></a>
	             </div>
            </div>
          <div class="stack-top" style={{'font-size': '18px'}}>Project</div>
        </SwiperSlide>

        <SwiperSlide>
   
         <div class="ui-card">
          <img src={mystore} alt="" />
              <div class="description">
                 <h6>Aug 2022</h6>
                 <h6>Online Responsive Store [Web App]</h6>
                 <a style={{'--clr':'#6eff3e'}} href="https://mystore-udacity.tk/" target="_blank" rel="noreferrer"><span>Website🔗</span><i></i></a>    
                 <a  href="https://github.com/Abanoub5015/MyStore" target="_blank" rel="noreferrer"><span>Project Github</span><i></i></a> 
	           </div>
          </div>
          <div class="stack-top" style={{'font-size': '18px'}}>Project</div>
    
        </SwiperSlide>
        
      </Swiper>


     
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
         <SwiperSlide> 
          <div class="mySwiper_items">
            <img src={IT0} alt="" />
          
          </div>   
        </SwiperSlide>
        <SwiperSlide> 
          <div class="mySwiper_items">
            <img src={IT1} alt="" />
            <p>Upgrade PCs</p>
          </div>   
        </SwiperSlide>
        <SwiperSlide> 
          <div class="mySwiper_items">
            <img src={IT2} alt="" />
            <p>OS setup</p>
          </div>   
        </SwiperSlide>
        <SwiperSlide> 
          <div class="mySwiper_items">
            <img src={IT3} alt="" />
            <p>Software Installation(variation)</p>
          </div>   
        </SwiperSlide>
        <SwiperSlide> 
          <div class="mySwiper_items">
            <img src={IT4} alt="" />
            <p>(Experience in Microsoft Word, PowerPoint(recently Prezi), Excel)</p>
          </div>   
        </SwiperSlide>
        <SwiperSlide> 
          <div class="mySwiper_items">
            <img src={IT5} alt="" />
            <p>2yrs Experience in the Configuration(IPs) & maintenance of surveillance systems</p>
          </div>   
        </SwiperSlide>
        <SwiperSlide> 
          <div class="mySwiper_items">
            <img src={IT6} alt="" />
            <p>Configuration(IP [Cam - PC - Router])</p>
          </div>   
        </SwiperSlide>
        <SwiperSlide> 
          <div class="mySwiper_items">
            <img src={IT7} alt="" />
            <p>(Network - Hardware) Troubleshooting</p>
          </div>   
        </SwiperSlide>
        <SwiperSlide> 
          <div class="mySwiper_items">
            <img src={IT8} alt="" />
            <p>(Network - Hardware) Troubleshooting</p>
          </div>   
        </SwiperSlide>
        <SwiperSlide> 
          <div class="mySwiper_items">
            <img src={IT9} alt="" />
            <p>Router Configuration and Cables especially the fiber-optic</p>
          </div>   
        </SwiperSlide>

      </Swiper>
    

 

    </div>

  );
}

export default Portfolio;
