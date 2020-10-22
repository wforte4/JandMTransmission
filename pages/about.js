import { useState } from 'react';
import { useWindowSize } from '../components/hooks';

function About() {

  const initialValues = {
    trans: "Transmission",
    auto: "Auto Repair"
  }

  const newwindow = useWindowSize()


  return (
    <div className="body">
      <img className='bgimg' src='/background_about.jpg'/>
      <div id="servicewrapper">
        <ul id="services">
          <li id="title">Services We Offer</li>
          <li>{initialValues.trans}</li>
          <li>{initialValues.auto}</li>
        </ul>
      </div>
      <style jsx>{`
        .body {
          float: left;
          width: 100%;
          position: relative;
          overflow: hidden;
          height: 600px;
        }
        .bgimg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1.1,1.1);
          width: 100%;
          z-index: 0;
        }
        #servicewrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 900;
          width: 80%;
          height: 300px;
          background: rgba(255,255,255,.7);
        }
        #services {
          float: left;
          width: 80%;
          padding: 10%;
        }
        #services li {
          float: left;
          width: 100%;
          font: 18px 'Mukta';
        }
        #services #title {
          font: 30px 'Mukta';
          margin-bottom: 10px;
          margin-left: -10px;
        }
        `}</style>
    </div>
  );
}

export default About;
