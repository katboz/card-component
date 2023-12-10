import React from 'react'
import { ButtonInterface } from '../types'
import styles from './Button.module.css'
// passing props for my button, needs to have text, type, href, and optional is filled and icon. Those props are defined in my types.ts
const Button = ({text, filled, type, href, icon}: ButtonInterface) => {
  const filledClass = filled ? styles.filled :'' ;
    return (
     <a href={href} className={`${styles.btn} ${styles[type]} ${filledClass}`}>
     <span>{text}</span>
     {icon}
      </a>
  )
}

export default Button