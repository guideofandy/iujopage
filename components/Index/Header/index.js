import Image from 'next/image';
import styles from '../../../styles/Index.module.css'
import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link';
import { useState } from "react"
import Slidebar from '../../layouts/slidebar.js';

const Header = () => {

  const [slidebar, setSlidebar] = useState(false);

  const handleSlidebar = () => {
    !slidebar ? setSlidebar(true) : setSlidebar(false);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerImage}>
          <Image src={'/img/principal.png'} width={833} height={261} alt={"Logo de La institución"} />
        </div>
        <div className={styles.Links}>
          <a href='http://190.120.252.155:49153/sigea/index.php'>SIGEA</a>
          <a>NOTICIAS</a>
          <Link href="/carreras">
            <a>CARRERAS</a>
          </Link>
        </div>
        <div className={styles.menu} onClick={handleSlidebar}>
          <AiOutlineMenu color='white' size={"3rem"} />
        </div>
      </header>
      <Slidebar handleState={handleSlidebar} state={slidebar} />
    </>
  )
}

export default Header