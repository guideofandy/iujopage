import styles from './News.module.css';
import Post from './Post';
import { AiOutlinePlus } from 'react-icons/ai'


const News = () => {
  return (
    <section className={styles.information}>
      <h2>Noticias</h2>
      <div className={styles.posts}>
        <Post />
        <Post />
        <div className={styles.post}>
          <div className={styles.centered}>
            <AiOutlinePlus className={styles.plus} />
            Ver mas
          </div>
        </div>

      </div>
    </section>
  )
}

export default News