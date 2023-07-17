import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../Components/ContactUs.css"
import bosque from "../Images/Bosque.jpg"
import {  useNavigate } from 'react-router-dom';
 const ContactUs = () => {
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d2z04x6', 'template_csenn0t', form.current, 'wZZD7cKPU2Je3STpl')
      .then((result) => {
          console.log(result.text);
          navigate("/");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div class="form__box">
        <img src={bosque} alt="" />
    <div class="form__box-content" > 
    <form ref={form} onSubmit={sendEmail} class="field">
    <a href="/#"class="form__title">Contact Us
      </a>
    <div class="form__box-content">
      <label>Full Name</label>
      <input type="text" name="user_name" />
      <a href="/#"class="divider">_</a>
      <label>E-mail</label>
      <input type="email" name="user_email" />
      <a href="/#"class="divider">_</a>
      <label>Message</label>
      <input type="text" name="message" />
      <a href="/#"class="divider">-</a>
      <input  type="submit"value="Contact Us" />
      </div>
    </form>
    </div>
    </div>
  );
};
export default ContactUs;