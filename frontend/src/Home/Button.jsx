import React from 'react'
import './Button.css';
const Button = ({text}) => {
  return (
    <button class="button-64" role="button"><span class="text">{text}</span></button>
  )
}

export default Button
