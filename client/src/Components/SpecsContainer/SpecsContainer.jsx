import React, { useEffect, useRef } from 'react';
import './SpecsContainer.css';
import TraceLine from '../TraceLine/TraceLine';
import BranchLine from '../../Asets/Svgs/git-branch-collaboration.svg';

function SpecsContainer(props) {
  const containerRef = useRef(null);
  const fadeInClass = 'fade-in';
  const fadeOutClass = 'fade-out';

  useEffect(() => {
    let isCenter = false;
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (containerRef.current) {
        const { top, bottom } = containerRef.current.getBoundingClientRect();
        const windowCenter = window.innerHeight / 2;

        if (top < windowCenter && bottom > windowCenter) {
          // Element is in the center of the window
          if (!isCenter) {
            containerRef.current.classList.add(fadeInClass);
            containerRef.current.classList.remove(fadeOutClass);
            isCenter = true;
          }
        } else {
          // Element is outside the center of the window
          containerRef.current.classList.remove(fadeInClass);
          containerRef.current.classList.add(fadeOutClass);
          isCenter = false;
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='specsContain' ref={containerRef}>
      <div>
        <div className='branch'>
          <div>
            <TraceLine background={props.bgcolor} />
          </div>
          <div className='branchLine'>
            <img src={BranchLine} alt='error' />
          </div>
        </div>
      </div>
      <div className='details'>
        <div className='details_container'>
          <span className='heading'>{props.head}</span>
          <div className='headExplain'>{props.exp}</div>
        </div>
      </div>
    </div>
  );
}

export default SpecsContainer;
