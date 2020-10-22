import React from "react";
import Link from 'next/link';
import Theme from '../styles/theme'
import { useScroll } from "../components/hooks";

export default function Index() {

  const scroll = useScroll();

  return (
    <div id="wrapper">
      <div id="banner">
        <img src="/background_engine.jpg" />
      </div>
      <div id="aboutcomp">
        <div className='left'>
          <h1>About Our Shop</h1>
          <p>Ready to get your transmission fixed? You have come to right place, down at J and M transmissions we treat you like family because we know how important it is to get your car back on the road, you can click the link below to contact us to learn about pricing and more of our services!</p>
          <Link href='/contact'><h3 className='button'>Contact us</h3></Link>
        </div>
        <img src="/family.jpeg" />
      </div>
      <div id="locationcontainer">
        <div id="getintouch">
          <h1>Find Our Shop</h1>
          <ul>
            <li><img src='/icon_home.png'/> 1076 Pleasant St, Attleboro, MA, 02703</li>
            <li><img src='/icon_phone.png'/> <a href="tel:508-222-1406" className="pagelink">1-(508)-222-1406</a></li>
            <li><img src='/icon_owner.png'/> Steven Dalrymple</li>
          </ul>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.1299957503716!2d-71.24674358455779!3d41.954542768605826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e460f75c90b6bb%3A0x63dc839649eda577!2sJ%20%26%20M%20Transmissions!5e0!3m2!1sen!2sus!4v1586143162576!5m2!1sen!2sus" width="400" height="400" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
      </div>
      <div id="reviews">
        <a href="https://www.google.com/maps/place/J+%26+M+Transmissions/@41.9545388,-71.2467436,17z/data=!3m1!4b1!4m7!3m6!1s0x0:0x63dc839649eda577!8m2!3d41.9545388!4d-71.2445549!9m1!1b1"><img src="/reviews.png" /></a>
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
        #wrapper {
          float: left;
          width: 100%;
          background: white;
          margin-top: 0;
          margin: 0;
          padding: 0;
        }
        .left {
          width: 60%;
          float: left;
        }
        #aboutcomp {
          float: left;
          width: 94%;
          padding: 0 3%;
          margin-top: 40px;
          margin-bottom: 60px;
        }
        #aboutcomp img {
          float: right;
          width: 320px;
          height: 320px;
          margin-top: 30px;
          margin-right: 40px;
          box-shadow: 0 0 10px rgba(20,20,20,.4);
        }
        .left p {
          float: left;
          width: 98%;
          font: 18px arial;
          margin: 25px;
          padding: 10px 1%;
        }
        .left .button {
          float: left;
          margin: 0;
          cursor: pointer;
          padding: 10px;
          margin: 0 20px;
          background: ${Theme.colors.coral};
          color: white;
          font: 16px 'Roboto';
        }
        .left .button:hover {
          box-shadow: ${Theme.colors.shadowlight};
        }
        .left h1 {
          float: left;
          padding: 20px 10px;
          font: 40px 'Rubik';
          margin: 0;
          margin-top: 10px;
          width: 100%;
          border: none;
        }
        #reviews {
          float: left;
          width: 100%;
        }
        #reviews img {
          float: left;
          width: 50%;
          margin: 10%;
        }
        #reviews a:hover {
          background: rgba(200,200,200,.6);
        }
        #locationcontainer {
          float: left;
          width: 80%;
          background: rgba(89,89,89,.2);
          padding: 10%;
        }
        iframe {
          float: left;
          width: 50%;
        }
        #getintouch {
          float: left;
          width: 50%;
        }
        #getintouch h1 {
          float: left;
          padding: 20px 10px;
          font: 40px 'Rubik';
          margin: 0;
          margin-top: 10px;
          width: 100%;
          border: none;
        }
        #getintouch ul {
          float: left;
          width: 90%;
          padding: 5%;
          padding-top: 20px;
          padding-bottom: 20px;
        }
        #getintouch ul li {
          float: left;
          width: 100%;
          padding: 10px 0;
          font: 20px 'Roboto';
          list-style: none;
        }
        #getintouch ul li img {
          float: left;
          width: 30px;
          height: 30px;
          padding: 0px 15px;
        }
        #getintouch ul li a {
          color: ${Theme.colors.coral};
          font: 20px 'Roboto';
          opacity: .7;
          transition: all .3s ease;
          text-decoration: none;
        }
        #getintouch ul li a:hover {
          opacity: 1;
        }
        #banner {
          float: left;
          width: 100%;
          height: 550px;
          overflow: hidden;
          position: relative;
        }
        #banner img {
          float: left;
          width: 100%;
          transition: all .1s ease;
          margin-top: -${scroll.scrollY / 4}px;
        }

/* Mobile Styling for the index page (Only Execute if mobile-device) */
        @media only screen and (max-device-width: 480px) {
          p {
            width: 80%;
            padding: 10%;
            margin: 0;
          }
          img {
            height: 100%;
            width: auto;
          }
          #aboutcomp img {
            float: left;
            width: 80%;
            height: auto;
            margin: 10%;
            margin-top: 30px;
          }
          h1 {
            width: 80%;
            padding: 10%;
          }
          iframe {
            width: 100%;
            float: left;
          }
          #locationcontainer {
            margin: 0;
            float: left;
          }
          #getintouch ul {
            position: relative;
            width: 90%;
            padding: 5%;
          }
        }
        `}</style>
    </div>
  );
}
