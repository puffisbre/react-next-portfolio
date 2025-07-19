'use client'

import React from 'react'
import ProfileImage from '../../../public/images/felixProfileImg.jpg'
import { IoMenu } from "react-icons/io5";
import styles from './styles.module.css';
import BurgerMenu from '@/components/modals/burgerMenu';
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation';


type Header = {
    onClick: () => void
}
const Header: React.FC<Header> = ({onClick}) => {
          const burgerIcon = {color: 'white', fontSize: '70px', margin: '20px'};
    const [openMenu, setOpenMenu] = useState(false);
    const router = useRouter();
       

    function toggleMenu() {
      setOpenMenu((prev) => !prev);
    }
  return (
    <>
   {openMenu ? <BurgerMenu home='home' about='about' techstack='techstack' projects='projects' contact='contact' closeMenu={toggleMenu}/> : null}
   <header className={`${styles.headerMain} ${styles.addBackground}`}>
    <Image src={ProfileImage} alt='profile-image' className={styles.profileImage} width={70} onClick={onClick}/>
    <IoMenu style={burgerIcon} onClick={toggleMenu}/>
   </header>
   </>
  )
}

export default Header