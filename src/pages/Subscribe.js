import React from 'react'
import './Subscribe.css';
import subscribeImage from '../subscribe.jpg';

function Subscribe() {
  const backgroundStyle = {
    backgroundImage: `url(${subscribeImage})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center', 
    height: '100vh', 
  };
  return (
    <>
    <div className="subscribe" style={backgroundStyle}>
      <div className='subscribe-page'> 
        <h1>JioCinema Premium</h1>
        <p>Welcome to the new home of all your favourite Hollywood content.The biggest,the best.Exclusively yours. </p> 
        </div>
        <br /><br /> 
        <div className='subscribe-content'>
            <h1>Best of Hollywood</h1>
            <ul className='subscribe-list'>
              <li>Watch on any device</li>
              <li>Highest video & audio quality</li>
              <li>Upto 4 devices simultaneously</li>
            </ul>

        </div>
        <button className='subscribe-btn' onClick={() => alert("You are Subscribed!!!")}>Continue and pay $999</button>

    </div>
    </>
  )
}

export default Subscribe