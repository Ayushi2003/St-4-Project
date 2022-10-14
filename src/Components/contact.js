import React from 'react';
import "../Styles/contact.css";
 const Contact=()=>{
    return (
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13748.91182690317!2d76.6528112!3d30.5145926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1665131230244!5m2!1sen!2sin" width="1335px" height="220px" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div id="form">
    <div className="fish" id="fish" />
    <div className="fish" id="fish2" />
    <form id="waterform" action='about.js'>
      <div className="formgroup" id="name-form">
        <label htmlFor="name">Your name*</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="formgroup" id="email-form">
        <label htmlFor="email">Your e-mail*</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="formgroup" id="message-form">
        <label htmlFor="message">Your message</label>
        <textarea id="message" name="message" defaultValue={""} />
      </div>
      <input type="submit" defaultValue="Send your message!" />
    </form>
    </div>
    </div>
    );
 }
 export default Contact;