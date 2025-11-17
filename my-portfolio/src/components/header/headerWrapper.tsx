'use client'

import React from 'react'
import Header from './header'

const HeaderWrapper = () => {
  const scrollBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Don't wrap in extra div - let header handle its own positioning
  return <Header onClick={scrollBackToTop} />
}

export default HeaderWrapper

