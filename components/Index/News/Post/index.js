import styles from './Post.module.css';
import Image from 'next/image';
import {AiOutlinePlus} from 'react-icons/ai';
import {BiShare} from 'react-icons/bi';
import Link from 'next/link';
import splitText from '../../../../helpers/splitText';

const Post = ({element}) => {

  const {id, title, autor, content, updatedAt} = element;
  const text = splitText(content)

  return (
    <div className={styles.post}>
      <header className={styles.header}>
        <div className={styles.headerImg}>
          <Image src={"/img/fya.png"} alt={"IUJO"} width={355} height={355} />
        </div>
        <div className={styles.headerText}>
          <h5>{autor.name}</h5>
          <span>{updatedAt.slice(0, 10)}</span>
        </div>
      </header>
      <section className={styles.body}>
        <h4>{title}</h4>
        {!!text && text.map((el, key) => <p key={key}>{el}</p>)}
      </section>
      <footer className={styles.footer}>
        <Link href={`/noticias/${id}`}>
          <a>
            <div className={styles.aling}>
              <AiOutlinePlus color='#212121' />
              <p>Ver mas</p>
            </div>
          </a>
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
