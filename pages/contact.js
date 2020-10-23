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
  const [status, setStatus] = useState('form')

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
    setStatus('loading')
    const submitForm = await submitContact(inputs.fullname, inputs.message, inputs.email, inputs.cellphone)
    if(submitForm) {
      console.log(submitForm)
      if(submitForm == 200) {
        setStatus('success')
      } else {
        setStatus('failed')
      }
    }
  }

    return (
      <div id="wrapper">
        <div id="banner">
          <img src="/background_phone.jpg" />
        </div>
        <h2>Contact Us</h2>
        <div id="contactwrapper">
          <form onSubmit={status == 'form' ? handleSubmit: null} name="confirmed" value="submit">
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
          <div className='loadiv'>
            <img src='/loading_a.gif' />
          </div>
          <div className='success'>
            <p>Your Message was Sent! Thank you, we will get back to you as soon as possible via email or phone!</p>
          </div>
          <div className='failed'>
            <p>Something went wrong, please refresh and try again.</p>
          </div>
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
            padding: 5% 10%;
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
            width: 90%;
            padding: 5%;
            padding-top: 5%;
            display: ${status == 'form' ? 'block': 'none'};
            box-shadow: 0 0 4px rgba(200,200,200,.4);
          }
          .loadiv {
            float: left;
            width: 90%;
            height: 300px;
            position: relative;
            padding: 5%;
            padding-top: 5%;
            display: ${status == 'loading' ? 'block': 'none'};
            box-shadow: 0 0 4px rgba(200,200,200,.4);
          }
          .loadiv img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90px;
            height: 90px;
          }
          .success {
            float: left;
            width: 90%;
            height: 300px;
            position: relative;
            padding: 5%;
            padding-top: 5%;
            display: ${status == 'success' ? 'block': 'none'};
            box-shadow: 0 0 4px rgba(200,200,200,.4);
          }
          .success p {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50%;
            height: auto;
            text-align: center;
            font: 18px 'Roboto';
          }
          .failed {
            float: left;
            width: 90%;
            height: 300px;
            position: relative;
            padding: 5%;
            padding-top: 5%;
            display: ${status == 'failed' ? 'block': 'none'};
            box-shadow: 0 0 4px rgba(200,200,200,.4);
          }
          .failed p {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            width: 50%;
            height: auto;
            font: 18px 'Roboto';
            color: ${Theme.colors.coral};
          }
          h2 {
            float: left;
            margin: 40px 40px;
            font: 36px 'Montserrat';
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
              margin-top: 20px;
              background: rgba(150,150,150,.1);
            }
            label {
              padding: 20px 0;
            }
            textarea {
              width: 80%;
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
