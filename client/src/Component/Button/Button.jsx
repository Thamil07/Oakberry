import "./Button.css"
import React from 'react'

function Button({text,shape}) {

    const buttonclass=shape==="round"?"round":"square";
  return (
    <button className={`${buttonclass} button`}>{text}</button>
  )
}

export default Button