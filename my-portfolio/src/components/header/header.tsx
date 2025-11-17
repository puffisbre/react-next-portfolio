'use client'

import React, { useState } from 'react'
import ProfileImage from '../../../public/images/felixProfileImg.jpg'
import { IoMenu } from "react-icons/io5";
import styles from './styles.module.css';
import BurgerMenu from '@/components/modals/burgerMenu';
import Image from "next/image";

type Header = {
  onClick: () => void
}

const Header: React.FC<Header> = ({ onClick }) => {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu() {
    setOpenMenu((prev) => !prev);
  }

  return (
    <>
      {openMenu && (
        <BurgerMenu 
          home='Home' 
          about='About' 
          techstack='Techstack' 
          projects='Projects' 
          contact='Contact' 
          closeMenu={toggleMenu}
        />
      )}
      <header className={styles.headerMain}>
        <div className={styles.headerContent}>
          <button 
            className={styles.profileButton} 
            onClick={onClick}
            aria-label="Scroll to top"
          >
            <Image 
              src={ProfileImage} 
              alt='Felix profile' 
              className={styles.profileImage} 
              width={50} 
              height={50}
              priority
            />
          </button>
          <button 
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={openMenu}
          >
            <IoMenu className={styles.burgerIcon} />
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
