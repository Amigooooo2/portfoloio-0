import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactPage>
      <h1>Contact Us</h1>
      <ContactForm>
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Message</label>
        <textarea rows="5"></textarea>
        <button type="submit">Send</button>
      </ContactForm>
    </ContactPage>
  );
};

const ContactPage = styled.div\`
  padding: 2rem;
  text-align: center;
\`;

const ContactForm = styled.form\`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    margin: 0.5rem 0;
  }

  input, textarea {
    margin: 0.5rem 0;
    padding: 0.5rem;
    width: 100%;
    max-width: 500px;
  }

  button {
    margin: 1rem 0;
    padding: 0.5rem 2rem;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
  }
\`;

export default Contact;
