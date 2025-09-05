'use client'

import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import HomeImage from '../../../public/images/glasses-code.jpg'
import HomeImage2 from '../../../public/images/cartoon-coder.png'

const Home = () => {


  return (
   <>
   <div className={styles.homeTopContainer}>
   <div className={styles.homeTextContainer}>
    <h1>Felix</h1>
    <h1>Olsson</h1>
    <h3>Welcome to my portfolio.</h3>
    <h3>Feel free to browse and get to know me a little bit.</h3>
   </div>
   <div className={styles.topImage}>
   <Image src={HomeImage2} alt='glasses-code' width={900} style={{borderRadius: "40px" }}/>
   </div>
   </div>
   <div className={styles.homeSecondSection}>
    <div className={styles.secondSectionPart}>
    <h3>Current role:</h3>
    <h3 style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}> Fullstack Developer <span style={{fontSize:'25px'}}>&#128119;</span><span style={{fontSize:'25px'}}>&#128295;</span><span style={{fontSize:'25px'}}>&#128187;</span></h3>
    </div>
    <br />
    <div className={styles.secondSectionPart}>
    <h3>Experience: </h3>
    <h3>Game Development, E-Commerce, Fullstack</h3>
    </div>
   </div>
   </>
  )
}

export default Home