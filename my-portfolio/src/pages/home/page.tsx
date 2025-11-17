'use client'

import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import HomeImage from '../../../public/images/cartoon-coder.png'

const Home = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers = [
      { ref: textRef, className: 'fade-in-left' },
      { ref: imageRef, className: 'fade-in-right', delay: 50 },
      { ref: roleRef, className: 'fade-in-up', delay: 25 },
      { ref: experienceRef, className: 'fade-in-up', delay: 50 },
    ].map(({ ref, className, delay }) => {
      if (!ref.current) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              ref.current?.classList.add('visible');
            }, delay || 0);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
      );
      
      observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach(obs => obs?.disconnect());
    };
  }, []);

  return (
   <>
   <div className={styles.homeTopContainer}>
   <div ref={textRef} className={`${styles.homeTextContainer} fade-in-left`}>
    <h1>Felix</h1>
    <h1>Olsson</h1>
    <h3>Welcome to my portfolio.</h3>
    <h3>Feel free to browse and get to know me a little bit.</h3>
   </div>
   <div ref={imageRef} className={`${styles.topImage} fade-in-right delay-200`}>
   <Image src={HomeImage} alt='glasses-code' width={900} height={900} style={{borderRadius: "40px", maxWidth: "100%", height: "auto" }}/>
   </div>
   </div>
   <div className={styles.homeSecondSection}>
    <div ref={roleRef} className={`${styles.secondSectionPart} fade-in-up delay-100`}>
    <h3>Current role:</h3>
    <h3 style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}> Fullstack Developer <span style={{fontSize:'25px'}}>&#128119;</span><span style={{fontSize:'25px'}}>&#128295;</span><span style={{fontSize:'25px'}}>&#128187;</span></h3>
    </div>
    <br />
    <div ref={experienceRef} className={`${styles.secondSectionPart} fade-in-up delay-200`}>
    <h3>Experience: </h3>
    <h3>Game Development, E-Commerce, Fullstack</h3>
    </div>
   </div>
   </>
  )
}

export default Home