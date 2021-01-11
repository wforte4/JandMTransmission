import React from "react";
import Link from 'next/link';
import Theme from '../styles/theme'
import { useScroll } from "../components/hooks";

export default function Index() {

  const scroll = useScroll();

  return (
    <div id="wrapper">
      <div id="banner">
        <img src="/background_shop.jpg" />
      </div>
      <div id="aboutcomp">
        <div className='left'>
          <h1 className='fromLeft'>About Our Shop</h1>
          <p><br/>Ready to get your transmission fixed? You have come to right place, down at J and M transmissions we treat you like family because we know how important it is to get your car back on the road, you can click the link below to contact us to learn about pricing and more of our services!</p>
          <Link href='/contact'><h3 className='button'>Contact us</h3></Link>
        </div>
        <img src="/family.jpeg" />
      </div>
      <div id="locationcontainer">
        <div id="getintouch">
          <h1 className='fromLeft'>Find Our Shop</h1>
          <ul>
            <li><img src='/icon_home.png'/> 1076 Pleasant St, Attleboro, MA, 02703</li>
            <li><img src='/icon_phone.png'/> <a href="tel:508-222-1406" className="pagelink">1-(508)-222-1406</a></li>
            <li><img src='/icon_owner.png'/> Steven Dalrymple</li>
          </ul>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.1299957503716!2d-71.24674358455779!3d41.954542768605826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e460f75c90b6bb%3A0x63dc839649eda577!2sJ%20%26%20M%20Transmissions!5e0!3m2!1sen!2sus!4v1586143162576!5m2!1sen!2sus" width="400" height="400" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
      </div>
      <div id="reviews">
        <a className='frame' href="https://www.google.com/maps/place/J+%26+M+Transmissions/@41.9545388,-71.2467436,17z/data=!3m1!4b1!4m7!3m6!1s0x0:0x63dc839649eda577!8m2!3d41.9545388!4d-71.2445549!9m1!1b1"><img src="/reviews.png" /></a>
        <div className='left'>
            <h1 className='fromLeft'>Track Record</h1>
            <p>Don't just take what we see say, listen to what our customer's have to say</p>
            <Link href='https://www.google.com/maps/place/J+%26+M+Transmissions/@41.9545388,-71.2467436,17z/data=!3m1!4b1!4m7!3m6!1s0x0:0x63dc839649eda577!8m2!3d41.9545388!4d-71.2445549!9m1!1b1'><h3 className='button'>See Google Reviews</h3></Link>
        </div>
      </div>
      <style jsx>{`
        #wrapper {
          float: left;
          width: 100%;
          background: white;
          margin-top: 0;
          margin: 0;
          padding: 0;
        }
        #aboutcomp {
          float: left;
          width: 90%;
          padding: 40px 5%;
          margin: 60px 0;
          display: flex;
          justify-content: space-evenly;
        }
        .right {
          float: left;
          width: 40%;
          position: relative;
        }
        #aboutcomp img {
          float: left;
          width: 320px;
          height: 320px;
          margin: 0 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(20,20,20,.4);
        }
        .left {
          width: 40%;
          float: left;
          padding: 0;
        }
        .left p {
          float: left;
          width: 90%;
          font: 18px 'Roboto';
          margin-bottom: 30px;
          padding: 10px 5%;
        }
        .left .button {
          float: left;
          margin: 0;
          cursor: pointer;
          padding: 10px;
          margin: 20px 5%;
          background: ${Theme.colors.coral};
          color: white;
          font: 16px 'Roboto';
        }
        .left .button:hover {
          box-shadow: ${Theme.colors.shadowlight};
        }
        .left h1 {
          float: left;
          padding: 10px 0;
          font: 40px 'Montserrat';
          margin: 0;
          margin-top: 10px;
          margin-left: 5%;
        }
        #reviews {
          float: left;
          width: 90%;
          padding: 40px 5%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        #reviews img {
          float: left;
          width: 90%;
          border-radius: 5px;
          margin: 20px 5%;
        }
        .frame {
          float: left;
          width: 40%;
        }
        #reviews a:hover {
          background: rgba(200,200,200,.6);
        }
        #locationcontainer {
          float: left;
          width: 90%;
          background: rgba(89,89,89,.2);
          padding: 60px 5%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        iframe {
          float: left;
          width: 450px;
        }
        #getintouch {
          float: left;
          width: 35%;
        }
        #getintouch h1 {
          float: left;
          padding: 20px 10px;
          font: 40px 'Montserrat';
          margin: 0;
          margin-top: 10px;
        }
        #getintouch ul {
          float: left;
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
          height: 600px;
          overflow: hidden;
          position: relative;
        }
        #banner img {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          transition: all .2s ease;
          transform: translate(-50%,-50%) translate3d(0,0,0);
          margin-top: -${scroll.scrollY / 4}px;
        }

        h1 { display:inline-block; }
        h1:after {
          display:block;
          content: '';
          border-bottom: solid 2px ${Theme.colors.coral};  
          transform: scaleX(0);  
          transition: transform 250ms ease-in-out;
        }
        h1.fromLeft:after{ transform-origin: 100% 50%; }
        h1.fromRight:after{  transform-origin:   0% 50%; }
        h1.fromLeft:hover:after{ transform: scaleX(1); transform-origin:   0% 50%; }
        h1.fromRight:hover:after{ transform: scaleX(1); transform-origin: 100% 50%; }

/* Mobile Styling for the index page (Only Execute if mobile-device) */
        @media only screen and (max-device-width: 480px) {
          #aboutcomp img {
            float: left;
            width: 80%;
            height: auto;
          }
          #aboutcomp {
            padding: 0;
          }
          #banner {
            height: 250px;
          }
          #banner img {
            width: auto;
            height: 110%;
            transform: scale(1.4,1.4);
          }
          .left {
            width: 100%;
            padding: 40px 0;
          }
          .right {
            width: 100%;
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
          #getintouch {
            width: 100%;
          }
        }
        `}</style>
    </div>
  );
}
