import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styles from './styles.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar border={false} src="https://github.com/lucasborgesdasilva.png" />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Borges</strong>
              <time 
                title='03 de Outubro as 16:32h'
                dateTime='2024-10-03 16:32:00'
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button type='button' title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button type='button'>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>


    </div>
  )
}