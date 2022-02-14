import styles from '../../styles/Footer.module.css';
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.centered}>
        <section>
          <div className={styles.imgFooter}>
            <Image
              src="/img/principal.png"
              alt="Iujo Barquisimeto"
              width={833}
              height={261}
            />
          </div>
        </section>
        <section>
          <ul className={styles.ol}>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </section>
        <section>
          <ul className={styles.ol}>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </section>
      </div>
      <div className={styles.derechos}>
        DERECHOS RESERVADOS 2022.
      </div>
    </footer>);
};

export default Footer;
