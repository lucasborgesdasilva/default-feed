import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './styles.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/maykbrito.png" />
          <div className={styles.authorInfo}>
            <strong>Lucas Borges</strong>
            <span>FullStack Developer</span>
          </div>
        </div>
        <time 
          title='03 de Outubro as 16:32h'
          dateTime='2024-10-03 16:32:00'
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p> 

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="https://www.google.com">jane.design/doctorcare</a></p>

        <p>
          <a href="https://www.google.com">#novoprojeto</a>{' '}
          <a href="https://www.google.com">#nlw</a>{' '}
          <a href="https://www.google.com">#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button> 
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}