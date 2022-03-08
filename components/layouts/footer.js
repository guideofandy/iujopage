import styles from '../../styles/Footer.module.css';
import Image from 'next/image'
import Link from 'next/link'

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
            <Link href="/carreras" ><li><a href="">Carreras</a></li></Link>
            <Link href="/noticias" ><li><a href="">Noticias</a></li></Link>
            <Link href="/servicios" ><li><a href="">Servicios</a></li></Link>
            <Link href="/test" ><li><a href="">Test</a></li></Link>
          </ul>
        </section>
        <section>
          <ul className={styles.ol}>
            <Link href="/dashboard" ><li><a href="">Dashboard</a></li></Link>
            <Link href="/login" ><li><a href="">Iniciar Sesion</a></li></Link>
          </ul>
        </section>
      </div>
      <div className={styles.derechos}>
        DERECHOS RESERVADOS 2022.
      </div>
    </footer>);
};

export default Footer;
