import React from 'react'
import { CardInterface } from '../types'
import styles from './Card.module.css'
import Badge from './Badge'
import Button from './Button'

const Card = ({body,button,title,badge,image,indicator,subtitle}:CardInterface) => {
  return (
    //if indicator is there then apply small
    <article className={`stack-lg ${styles.card}`}>
        {indicator &&
        <small className={styles.indicator}>{indicator}
        </small>
        }
        {badge &&
        <Badge text={badge.text} filled={badge.filled}
        />}
        {image &&
            <img src={image} alt='Random Image' className=
            {styles.image}/>
        }
        <div className='stack-sm'>
            <h3 className={styles.title}> {title} </h3>
            {subtitle &&
            <small className={styles.subtitle}>{subtitle}</small>}
        </div>
        <p className={styles.body}>{body}</p>
        <Button
        filled={button.filled}
        type={button.type}
        text={button.text}
        href={button.href}
        icon={button.icon}
        />
        </article>
  )

}

export default Card