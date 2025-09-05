import React, {forwardRef} from 'react'
import styles from './styles.module.css';
import Image from 'next/image';
import AboutImage from '../../../public/images/felix1.png'

const About = forwardRef<HTMLElement, {}>((props, ref) => {
  return (
 <>
 <h3 className={styles.sectionTitle}>About</h3>
 <section ref={ref} className={styles.aboutContainer}>
  
  <div className={styles.sectionPart}>
 

 <div className={styles.imageSize}>
 <Image src={AboutImage} alt='self-image' className={styles.aboutImage}/>
 </div>
 </div>
  <div className={styles.sectionPart}>
     <p>Hello my name is Felix and I'm a fullstack developer.</p>
     <br />
 <p>I come from a game development education, but felt that web development was more for me.</p>
 <br />
 <p>I’m someone that strive to learn new things and stay up to date with the latest tech. </p>
 </div>
 </section>
 </>
  )
});

export default About