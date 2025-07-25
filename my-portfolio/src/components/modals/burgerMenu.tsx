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
    const closeIcon = {fontSize: '40px'};
const [closing, setClosing] = useState(false);

      const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      closeMenu();
    }, 200); 
  };
  return (
    <>
    <div className={`${styles.menuContainer} ${closing ? styles.menuClose : styles.menuOpen}`}>
        <button className={styles.closeButton} onClick={handleClose}><MdClose style={closeIcon}/></button>
        <ul className={styles.menuList}>
            <li className={styles.listItem}>{home}</li>
            <li className={styles.listItem}>{about}</li>
            <li className={styles.listItem}>{techstack}</li>
            <li className={styles.listItem}>{projects}</li>
            <li className={styles.listItem}>{contact}</li>
        </ul>
    </div>
    </> 
  )
}

export default BurgerMenu