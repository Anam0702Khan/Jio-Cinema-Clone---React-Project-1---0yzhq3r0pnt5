import React from 'react'
import './Subscribe.css';
import subscribeImage from '../subscribe.jpg';

function Subscribe() {
  const backgroundStyle = {
    backgroundImage: `url(${subscribeImage})`,
    backgroundSize: 'cover', // This ensures the image covers the entire component
    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    backgroundPosition: 'center', // Center the image horizontally and vertically
    height: '100vh', // Set the height to cover the viewport vertically
  };
  return (
    <>
    <div className="subscribe" style={backgroundStyle}>
      <div className='subscribe-page'> 
        <h1>JioCinema Premium</h1><br /><br /> 
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
        <button className='subscribe-btn'>Continue and pay $999</button>

    </div>
    </>
  )
}

export default Subscribe