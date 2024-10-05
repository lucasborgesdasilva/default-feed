/* eslint-disable react/prop-types */
import styles from './styles.module.css';

export function Avatar({border = true, src}){
  return (
    <img 
      className={border ? styles.avatarWithBorder : styles.avatar} 
      src={src} 
      alt="" 
    />
  )
}