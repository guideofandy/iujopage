import styles from './News.module.css';
import Post from './Post';
import { AiOutlinePlus } from 'react-icons/ai'
import Link from 'next/link';

const News = ({ list }) => {
  return (
    <section className={styles.information}>
      <h2>Noticias</h2>
      <div className={styles.posts}>
        {list.map(element => <Post key={element.id} element={element} />)}
        <Link href="/noticias">
          <div className={styles.post}>
            <div className={styles.centered}>
              <AiOutlinePlus className={styles.plus} />
              Ver mas
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default News