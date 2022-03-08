import styles from './Post.module.css';
import Image from 'next/image';
import { MdDelete } from 'react-icons/md';
import { BiShare } from 'react-icons/bi';
import { AiFillEdit } from 'react-icons/ai'
import axios from 'axios';

const PostContainer = ({ element, update, role = "standard" }) => {

  const splitText = (string) => {
    if (typeof string == 'string') {
      return string.split(/\r?\n/);
    }
  }
  const { autor, title, updatedAt, content, id } = element;
  const text = splitText(content)

  const handleDelete = () => {
    axios.delete(`/api/posts/${id}`).then(() => { update() })
  }

  const handleEdit = () => {

  }

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
        {text.map((el, key) => <p key={key}>{el}</p>)}
      </section>
      <footer className={styles.footer}>
        <a>Compartir <BiShare color='#212121' /></a>
        {role === "admin" && <>
          <a onClick={handleEdit}>Editar <AiFillEdit color={"#212121"} /></a>
          <a onClick={handleDelete}>Eliminar <MdDelete color={"#922f2f"} /></a>
        </>}
      </footer>
    </div>
  )
}

export default PostContainer