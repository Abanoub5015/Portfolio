import React from 'react'
import './Contact.css';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

  //useState
  const [done, setDone]= useState(false); // false by default.. till the msg sent  /*pointer*/

  //for emailjs func
    const form = useRef();
  
    const sendEmail = (e) => { e.preventDefault(); /*  (preventDefault) to prevent refresh  */
  
      emailjs.sendForm('service_ddf7n39', 'template_k2ru899', form.current, '3izofQXbx0B3xldrD')
        .then((result) => {
            console.log(result.text);
            setDone(true); /*pointer*/
        }, (error) => {
            console.log(error.text);
        });
    };



  return (
        <div className="contact-form" id="Contact">
          
            <div className="c-left">
              <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me...</span>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
              </div>
            </div>

            {/* slider */}
            <div className="c-right">
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user" placeholder="Name" />
                <input type="email" name="user_email" className="user" placeholder="Email" />
                <textarea            name="message" className="user" placeholder="Message" />
                <input type="submit" value="Send" className="button"/>
                <span>{done && "thanks for contacting me!"}</span>   { /*pointer*/ }
                <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>

              </form>

            </div>
       
        </div>

  )
}

export default Contact;