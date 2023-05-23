import React, { useEffect, useRef, useState } from 'react';
import './TraceLine.css';

function TraceLine({ background }) {
  const [isInWindow, setIsInWindow] = useState(false);
  const traceLineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (traceLineRef.current) {
        const { top, bottom } = traceLineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the element is in the window
        const checkIsInWindow = top <= windowHeight && bottom >= 0;

        setIsInWindow(checkIsInWindow);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={traceLineRef}
      className={`trace-line ${isInWindow ? 'animate' : ''}`}
      style={{ background }}
    ></div>
  );
}

export default TraceLine;
