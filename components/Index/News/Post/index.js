import styles from './Post.module.css';
import Image from 'next/image';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiShare } from 'react-icons/bi';
import Link from 'next/link';

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
        <Link href="/noticias">
          <div className={styles.aling}>
            <AiOutlinePlus color='#212121' />
            <a>Ver mas</a>
          </div>
        </Link>
        <div className={styles.aling}>
          <BiShare color='#212121' />
          <a>Compartir</a>
        </div>
      </footer>
    </div>
  )
}

export default Post