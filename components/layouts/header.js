import styles from '../../styles/Header.module.css';
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai';
import {BsArrowBarLeft} from 'react-icons/bs';
import Link from 'next/link';
import { useState } from 'react'
import Slidebar from './slidebar.js';
import headerData from '../Data/headerData';
import HeaderLinks from './headerLinks';
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
            {headerData().map((element, key) => <HeaderLinks key={key} element={element} />)}
          </div>

        </div>
        {!slidebar ?
          <div onClick={handleSlidebar}>
            <AiOutlineMenu color='white' size={"3rem"} />
          </div> : 
          <BsArrowBarLeft color='white' size={"3rem"}/> 
        }
      </header>
      <Slidebar handleState={handleSlidebar} state={slidebar} />
    </>
  );
};

export default Header;
