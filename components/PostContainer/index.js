import styles from './Post.module.css';
import Image from 'next/image';

const PostContainer = ({ element }) => {

  const splitText = (string) => {
    if (typeof string == 'string') {
      return string.split(/\r?\n/);
    }
  }

  const { autor, title, date, content } = element;

  const text = splitText(content)

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
          {text.map((el,key) => <p key={key}>{el}</p>)}
      </section>
      <footer className={styles.footer}>
        <a>Compartir</a>
      </footer>
    </div>
  )
}

export default PostContainer