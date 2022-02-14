import styles from '../../styles/Header.module.css';
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link';
import { useState } from 'react'
import Slidebar from './slidebar.js';

const Header = () => {

  const [slidebar, setSlidebar] = useState(false);

  const handleSlidebar = () => {
    !slidebar ? setSlidebar(true) : setSlidebar(false);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.leftHeader}>
          <Link href="/">
            <div className={styles.imgPrincipal}>
              <Image
                src="/img/principal.png"
                alt="Iujo Barquisimeto"
                width={833}
                height={261}
              />
            </div>
          </Link>
          <div className={styles.links}>
            <Link href="/carreras">
              <a href="">SIGEA</a>
            </Link>
            <Link href="/carreras">
              <a href="">NOTICIAS</a>
            </Link>
            <Link href="/carreras">
              <a href="">CARRERAS</a>
            </Link>
          </div>

        </div>
        {slidebar ||
          <div onClick={handleSlidebar}>
            <AiOutlineMenu color='white' size={"3rem"} />
          </div>
        }
      </header>
      <Slidebar handleState={handleSlidebar} state={slidebar} />
    </>
  );
};

export default Header;
