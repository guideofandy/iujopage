import styles from './Post.module.css';
import Image from 'next/image';

const Post = ({ element }) => {

  const { title, autor, date, content } = element;

  return (
    <div className={styles.post}>
      <header className={styles.header}>
        <div className={styles.headerImg}>
          <Image src={"/img/fya.png"} alt={"IUJO"} width={355} height={355} />
        </div>
        <div className={styles.headerText}>
          <h5>{autor}</h5>
          <span>{date}</span>
        </div>
      </header>
      <section className={styles.body}>
        <h4>{title}</h4>
        <p>
          {content}
        </p>
      </section>
      <footer className={styles.footer}>
        <a>Ver mas</a>
        <a>Compartir</a>
      </footer>
    </div>
  )
}

export default Post