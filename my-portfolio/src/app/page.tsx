'use client'

import React, { useRef, useState, useEffect } from 'react';
import Home from '../pages/home/page';
import About from '../pages/about/page';
import Button from '@/components/buttons/button';
import styles from './styles.module.css';
import Techstack from '@/pages/techstack/page';
import Projects from '@/pages/projects/page';
import Contact from '@/pages/contact/page';
import { FaChevronDown } from "react-icons/fa";

const MainPage = () => {
    const sectionsRef = useRef<Array<HTMLElement | null>>([]);
    const [sectionIndex, setSectionIndex] = useState(0);
    const [scrollOffset, setScrollOffset] = useState(100);
      const nextpageIcon = {color: 'white', fontSize: '30px'};

  const scrollToNextSection = () => {
    const nextIndex = sectionIndex + 1;

    if (nextIndex < sectionsRef.current.length) {
      const nextSection = sectionsRef.current[nextIndex];
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
        setSectionIndex(nextIndex); 
      }
    }
  };

    useEffect(() => {
      // Set scroll offset based on screen size (header height + some spacing)
      const updateScrollOffset = () => {
        const isMobile = window.innerWidth < 600;
        setScrollOffset(isMobile ? 90 : 100);
      };
      
      updateScrollOffset();
      window.addEventListener('resize', updateScrollOffset);
      
      return () => window.removeEventListener('resize', updateScrollOffset);
    }, []);

    useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const sectionPositions = sectionsRef.current.map((el) =>
        el ? el.offsetTop : 0
      );

      const current = sectionPositions.findIndex(
        (pos, i) =>
          scrollY >= pos - scrollOffset &&
          (i === sectionPositions.length - 1 || scrollY < sectionPositions[i + 1] - scrollOffset)
      );

      if (current !== -1 && current !== sectionIndex) {
        setSectionIndex(current);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIndex, scrollOffset]);
  return (
    <>
    <Button buttonClass={styles.nextPageButton} onClick={scrollToNextSection} toPage='/about' text={<FaChevronDown style={nextpageIcon}/>}/>
      <div id="home" style={{ scrollMarginTop: `${scrollOffset}px`}} ref={(el) => { sectionsRef.current[0] = el; }}><Home /></div>
      <div id="about" style={{ scrollMarginTop: `${scrollOffset}px`}} ref={(el) => { sectionsRef.current[1] = el; }}><About /></div>
      <div id="techstack" style={{ scrollMarginTop: `${scrollOffset}px`}} ref={(el) => { sectionsRef.current[2] = el; }}><Techstack /></div>
      <div id="projects" style={{ scrollMarginTop: `${scrollOffset}px`}} ref={(el) => { sectionsRef.current[3] = el; }}><Projects /></div>
      <div id="contact" style={{ scrollMarginTop: `${scrollOffset}px`}} ref={(el) => { sectionsRef.current[4] = el; }}><Contact /></div>
    </>
  )
}

export default MainPage