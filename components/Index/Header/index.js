import Image from 'next/image';
import styles from '../../../styles/Index.module.css'
import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerImage}>
        <Link href="/">
          <Image src={'/img/principal.png'} width={833} height={261} alt={"Logo de La institución"} />
        </Link>
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