import React, { Component, useState } from "react";
import { post } from '../services/restservice';
import { submitContact } from "../services/apiservice";
import Theme from '../styles/theme'

function Contact () {

  const initVals = {
    fullname: "",
    email: "",
    message: "",
    cellphone: "",
  }
  const [inputs, setInputs] = useState(initVals);

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitForm = await submitContact(inputs.fullname, inputs.message, inputs.email, inputs.cellphone)
    if(submitForm) console.log(submitForm)
  }

    return (
      <div id="wrapper">
        <div id="banner">
          <img src="/background_phone.jpg" />
        </div>
        <h2>Contact Us</h2>
        <div id="contactwrapper">
          <form onSubmit={handleSubmit} name="confirmed" value="submit">
            <label>Full Name
              <input
                name="fullname"
                value={inputs.fullname}
                onChange={handleInputChange}
                placeholder='John Doe'
                required
              />
            </label>
            <label>Email
              <input
                name="email"
                value={inputs.email}
                onChange={handleInputChange}
                placeholder='jandmtransmission@example.com'
                required
              />
            </label>
            <label>Phone # (So we can get in touch!)
              <input
                name="cellphone"
                value={inputs.cellphone}
                onChange={handleInputChange}
                placeholder='123-456-7890'
                required
              />
            </label>
            <label>What can we help you with?
              <textarea
              name="message"
              value={inputs.message}
              onChange={handleInputChange}
              required
              ></textarea>
            </label>
            <button type="submit" name="confirmed" value="submit">Submit</button>
          </form>
        </div>
        <style jsx>{`
          body {
            margin: 0;
          }
          #banner {
            float: left;
            width: 100%;
            height: 350px;
            overflow: hidden;
            position: relative;
          }
          #contactwrapper {
            float: left;
            width: 80%;
            padding: 10%;
            padding-top: 0;
          }
          .submit {
            display: none;
          }
          .false {
            display: block;
          }
          form {
            float: left;
            width: 80%;
            padding: 10%;
            padding-top: 5%;
            box-shadow: 0 0 4px rgba(200,200,200,.4);
          }
          button {
            float: right;
            padding: 15px 20px;
            margin-top: 30px;
            background: ${Theme.colors.coral};
            border: none;
            color: white;
            font: 16px 'Roboto';
            transition: all .3s ease;
            box-shadow: 0 0 2px rgba(150,150,150, .4);
            cursor: pointer;
          }
          button:hover {
            opacity: .8;
            transform: translateY(-2px);
          }
          label {
            width: 100%;
            float: left;
            font: 20px 'Open Sans';
            margin-top: 20px;
          }
          input {
            float: right;
            font: 16px 'Roboto';
            width: 30%;
            border: none;
            color: rgba(89,89,89,1);
            padding: 10px 20px;
            box-shadow: 0 0 2px rgba(100,100,100,.9);
            border-radius: 8px;
          }
          input:hover {
            background: rgba(150,150,150,.1);
          }
          textarea {
            float: right;
            width: 40%;
            height: 150px;
            resize: vertical;
            font: 16px 'Roboto';
            border: none;
            color: rgba(89,89,89,1);
            padding: 20px 20px;
            box-shadow: 0 0 2px rgba(100,100,100,.9);
            border-radius: 8px;
          }
          textarea:hover {
            background: rgba(150,150,150,.1);
          }
          #banner img {
            float: left;
            width: 100%;
            height: auto;
            margin-top: -100px;
          }
          #wrapper {
            float: left;
            margin: 0;
            width: 100%;
          }
          h2 {
            float: left;
            display: block;
            padding: 20px;
            margin-left: 40px;
            font: 40px 'Montserrat';
          }

/* Mobile exported version of the contact page to better format the view-port */
          @media only screen and (max-device-width: 480px) {
            #banner img {
              margin-top: 0;
              width: auto;
              height: 100%;
            }
            input {
              width: 80%;
              float: left;
              background: rgba(150,150,150,.1);
            }
            textarea {
              width: 90%;
              float: left;
              background: rgba(150,150,150,.1);
            }
            select {
              float: left;
              background: rgba(150,150,150,.1);
              width: 100%;
            }
          }
          `}</style>
      </div>
    );
}

export default Contact;
