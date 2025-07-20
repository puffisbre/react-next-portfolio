'use client'

import React, { useRef, useState, useEffect } from 'react';
import Home from '../pages/home/page';
import Header from '../components/header/header';
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
  const scrollBackToTop = () =>{
     window.scrollTo({ top: 0, behavior: 'smooth' });
  setSectionIndex(0);
  return;
  }

    useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const sectionPositions = sectionsRef.current.map((el) =>
        el ? el.offsetTop : 0
      );

      const current = sectionPositions.findIndex(
        (pos, i) =>
          scrollY >= pos - 150 &&
          (i === sectionPositions.length - 1 || scrollY < sectionPositions[i + 1] - 150)
      );

      if (current !== -1 && current !== sectionIndex) {
        setSectionIndex(current);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIndex]);
  return (
    <>
    <Button buttonClass={styles.nextPageButton} onClick={scrollToNextSection} toPage='/about' text={<FaChevronDown style={nextpageIcon}/>}/>
    <Header onClick={scrollBackToTop}/>
      <div style={{ scrollMarginTop: '130px'}} ref={(el) => { sectionsRef.current[0] = el; }}><Home /></div>
      <div style={{ scrollMarginTop: '130px'}} ref={(el) => { sectionsRef.current[1] = el; }}><About /></div>
      <div style={{ scrollMarginTop: '130px'}} ref={(el) => { sectionsRef.current[2] = el; }}><Techstack /></div>
      <div style={{ scrollMarginTop: '130px'}} ref={(el) => { sectionsRef.current[3] = el; }}><Projects /></div>
      <div style={{ scrollMarginTop: '130px'}} ref={(el) => { sectionsRef.current[4] = el; }}><Contact /></div>
    </>
  )
}

export default MainPage