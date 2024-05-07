import React, { useState, useEffect } from 'react';

const HeroSection = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to switch to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000); // Change image every 5 seconds
    return () => clearInterval(intervalId); // Cleanup function to clear the interval
  }, [images, nextImage]); // Re-run effect when images or nextImage function change

  return (
    <div className='carousel'>
      <div className='image-container'>
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} className='carousel-image' />
        <div className='overlay'>
          <div className='overlay-container'>
          <h1 className='Hero-text'>BookTrack</h1>
          <p className='Desc'>Your one stop shop for movies.</p>
          <div className='Options'>
            <button className='Hero-button'>Booking</button>
            <button className='Hero-button'>Contact</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
