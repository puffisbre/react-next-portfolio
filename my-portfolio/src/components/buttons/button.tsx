import React from 'react';

type Button = {
  text: React.ReactNode,
  buttonClass: string,
  toPage: string,
  onClick: () => void
}

const NextPageButton: React.FC<Button> = ({text, buttonClass, toPage, onClick}) => {
  return (
    <>
        <button onClick={onClick} className={buttonClass}>{text}</button>
    </>
  )
}

export default NextPageButton