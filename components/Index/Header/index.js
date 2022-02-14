import Image from 'next/image';
import styles from '../../../styles/Index.module.css'
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerImage}>
          <Image src={'/img/principal.png'} width={833} height={261} alt={"Logo de La institución"} />
      </div>
      <div className={styles.Links}>
        <a>SIGEA</a>
        <a>NOTICIAS</a>
        <a>CONOCENOS</a>
      </div>
      <div className={styles.menu}>
        <AiOutlineMenu color='white' size={"3rem"} />
      </div>
    </header>
  )
}

export default Header