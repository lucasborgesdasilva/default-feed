import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styles from './styles.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
        alt='banner profile'
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/lucasborgesdasilva.png" />

        <strong>Lucas Borges</strong>
        <span>FullStack Developer</span>
      </div>

      <footer>
        <a 
          href="https://www.google.com" 
          target='_blank' rel="noreferrer"
        >
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}