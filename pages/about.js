import { useState } from 'react';
import { useWindowSize } from '../components/hooks';

function About() {



  return (
    <div className="body">
      <img className='bgimg' src='/background_about.jpg'/>
      <div id="servicewrapper">
        <h3>Services we offer</h3>
        <ul id="services">
          <li>Transmission repair</li>
        </ul>
      </div>
      <style jsx>{`
        .body {
          float: left;
          width: 100%;
          position: relative;
          overflow: hidden;
          height: 800px;
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
          padding: 10px 5%;
          border-radius: 8px;
          min-height: 400px;
          height: auto;
          background: rgba(255,255,255,.6);
          backdrop-filter: blur(12px);
        }
        #services {
          float: left;
          width: 90%;
          padding: 20px 5%;
        }
        #servicewrapper h3 {
          float: left;
          font: 38px 'Montserrat';
        }
        #services li {
          float: left;
          width: 100%;
          font: 18px 'Roboto';
          list-style: none;
        }
        `}</style>
    </div>
  );
}

export default About;
