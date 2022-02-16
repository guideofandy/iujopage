import styles from './Post.module.css';
import Image from 'next/image';

const Post = () => {
  return (
    <div className={styles.post}>
      <header className={styles.header}>
        <div className={styles.headerImg}>
          <Image src={"/img/fya.png"} alt={"IUJO"} width={355} height={355} />
        </div>
        <div className={styles.headerText}>
          <h5>Administración</h5>
          <span>11/2/22</span>
        </div>
      </header>
      <section className={styles.body}>
        <h4>Title</h4>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium aperiam dicta doloribus eaque rerum sequi sit necessitatibus ea ipsam dolorem nesciunt distinctio eius nobis, asperiores omnis. Porro nihil cum eius error vitae et, laborum fugit architecto illo at assumenda non quisquam, dignissimos distinctio quidem consectetur doloribus, aut corrupti fugiat ratione.
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