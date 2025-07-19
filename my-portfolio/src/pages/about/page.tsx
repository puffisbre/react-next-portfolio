import React, {forwardRef} from 'react'
import styles from './styles.module.css';
import Image from 'next/image';
import AboutImage from '../../../public/images/felix1.png'

const About = forwardRef<HTMLElement, {}>((props, ref) => {
  return (
 <>
 <section ref={ref} className={styles.aboutContainer}>
 <h3>About</h3>
 <p>Hello my name is Felix and I'm a fullstack developer</p>
 <div className={styles.imageSize}>
 <Image src={AboutImage} alt='self-image' className={styles.aboutImage}/>
 </div>
 <p>I come from a game development education, but felt that web development was more for me.</p>
 <br />
 <p>I’m someone that strive to learn new things and stay up to date with the latest tech. </p>
 </section>
 </>
  )
});

export default About