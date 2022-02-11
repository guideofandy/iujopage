import styles from '../../styles/Header.module.css';
import Image from 'next/image'
import {AiOutlineMenu} from 'react-icons/ai'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.imgPrincipal}>
        <Image
          src="/img/principal.png"
          alt="Iujo Barquisimeto"
          width={833}
          height={261}
        />
      </div>
      <div className={styles.menu}>
        <AiOutlineMenu color='white'/>
      </div>
    </header>);
};

export default Header;
