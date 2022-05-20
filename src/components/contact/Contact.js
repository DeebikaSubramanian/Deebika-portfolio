import React from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import {useState} from 'react'

const Result=()=>
{
    return(<p>Your message has been sent successfully.</p>)
}

function Contact() {

     const[result,setResult]=useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ggo6w9d', 'template_q1bbn5o', e.target, 'vPd1MtBgoItoarrbR')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          setResult(true)
      };

      setTimeout(()=>
      {
        setResult(false)
      },5000)
  return (
    <div className="contact" id="contact" 
    //  data-aos="fade-left"
    // data-aos-duration="1000" 
    // data-aos-once="false"
    >
        <div className="container">
            <h3 className='heading'>Contact</h3>
            <div className="contact_card">
                <div className="form">
                    <form action="" onSubmit={sendEmail}>
                        <label className="label">Full Name</label><br/>
                        <input className="input" type="text" name="from_name" required /><br/>
                        <label className="label">Phone Number</label><br/>
                        <input className="input" type="text" name="phone" required /><br/>
                        <label className="label">Email</label><br/>
                        <input className="input" type="email" name="email" required /><br/>
                        <label className="label">Message</label><br/>
                        <textarea className="input" name="message" required/><br/>
                        <div className='btndiv'><button className="button">Submit</button></div>
                        <div className="result">{result?<Result/>:""}</div>
                    </form>
                </div>
                <div className='map'>
                {/* width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" */}
                <iframe className="mapImage" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3585377297!2d36.70730714498482!3d-1.3028617879404878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1652463508666!5m2!1sen!2ske"></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
