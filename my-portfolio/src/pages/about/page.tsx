'use client'

import React, { forwardRef, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import AboutImage from "../../../public/images/felix1.png";

type AboutProps = Record<string, never>;

const About = forwardRef<HTMLElement, AboutProps>((_props, ref) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers = [
      { ref: titleRef, className: 'fade-in-up' },
      { ref: imageRef, className: 'fade-in-left', delay: 50 },
      { ref: textRef, className: 'fade-in-right', delay: 75 },
    ].map(({ ref, delay }) => {
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
      <h3 ref={titleRef} className={`${styles.sectionTitle} fade-in-up`}>About</h3>
      <section ref={ref} className={styles.aboutContainer}>
        <div ref={imageRef} className={`${styles.sectionPart} fade-in-left delay-200`}>
          <div className={styles.imageSize}>
            <Image
              src={AboutImage}
              alt="Self portrait"
              className={styles.aboutImage}
            />
          </div>
        </div>
        <div ref={textRef} className={`${styles.sectionPart} fade-in-right delay-300`}>
          <p>Hello my name is Felix and I&apos;m a fullstack developer.</p>
          <br />
          <p>
            I come from a game development education, but felt that web
            development was more for me.
          </p>
          <br />
          <p>
            I&apos;m someone that strives to learn new things and stay up to
            date with the latest tech.
          </p>
        </div>
      </section>
    </>
  );
});

About.displayName = "About";

export default About;
