'use client'

import React, {useState} from 'react'
import styles from './styles.module.css'
import { MdClose } from "react-icons/md";

type BurgerMenu = {
    home: string,
    about: string,
    techstack: string,
    projects: string,
    contact: string,
    closeMenu: () => void
}

const BurgerMenu: React.FC<BurgerMenu> = ({home, about, techstack, projects, contact, closeMenu}) => {
const [closing, setClosing] = useState(false);
 const scrollTo = (targetId: string) => {
    setClosing(true)
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      closeMenu()
    }, 200)
  }
    

      const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      closeMenu();
    }, 200); 
  };

  const handleOverlayClick = () => {
    handleClose();
  };

  return (
    <>
    <div 
      className={`${styles.overlay} ${closing ? styles.overlayClose : styles.overlayOpen}`}
      onClick={handleOverlayClick}
    />
    <div className={`${styles.menuContainer} ${closing ? styles.menuClose : styles.menuOpen}`}>
        <button 
          className={styles.closeButton} 
          onClick={handleClose}
          aria-label="Close menu"
        >
          <MdClose className={styles.closeIcon} />
        </button>
          <ul className={styles.menuList}>
        <li className={styles.listItem} onClick={() => scrollTo('home')}>
          <span className={styles.listItemText}>{home}</span>
        </li>
        <li className={styles.listItem} onClick={() => scrollTo('about')}>
          <span className={styles.listItemText}>{about}</span>
        </li>
        <li className={styles.listItem} onClick={() => scrollTo('techstack')}>
          <span className={styles.listItemText}>{techstack}</span>
        </li>
        <li className={styles.listItem} onClick={() => scrollTo('projects')}>
          <span className={styles.listItemText}>{projects}</span>
        </li>
        <li className={styles.listItem} onClick={() => scrollTo('contact')}>
          <span className={styles.listItemText}>{contact}</span>
        </li>
      </ul>
    </div>
    </>
  )
}

export default BurgerMenu