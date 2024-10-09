import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'; // Importing the Button component from React Bootstrap

const ScrollToTopButton = () => {
  // State to track if the button should be shown
  const [showButton, setShowButton] = useState(false);

  // Function to handle scrolling and show/hide the button
  const scrollFunction = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Scroll to top function
  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Effect to handle scroll event
  useEffect(() => {
    // Adding scroll event listener
    window.addEventListener('scroll', scrollFunction);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  return (
    <>
      {/* Conditionally render the button */}
      {showButton && (
        <Button onClick={topFunction} variant="dark" style={{position: 'fixed', bottom: '20px', right: '30px', zIndex: '1'}}>
          Scroll to Top
        </Button>
      )}
    </>
  );
};

export default ScrollToTopButton;