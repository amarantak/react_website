import React, { useState } from "react";
import './ContactForm.css';


const FORM_ENDPOINT = ""; // TODO - fill on the later step


const ContactForm = () => {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {

    setTimeout(() => {

      setSubmitted(true);

    }, 100);

  };


  if (submitted) {

    return (

      <div class="alert">
          <h2>Thank you!</h2>
          <div>We'll be in touch soon.</div>
          <br></br>
          <a href="/contact"><i class="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back</a>
      </div>

    );

  }


  return (

    <form

      action={FORM_ENDPOINT}

      onSubmit={handleSubmit}

      method="POST"

      target="_blank"

    >

      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" placeholder="Your name" name="name" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" placeholder="Your email" name="email" required />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea placeholder="Your message" name="message" rows="5" required />
      </div>

      <div class="form-group">
        <button type="submit" class="form-button">Submit</button>
      </div>
    </form>

  );

};


export default ContactForm;