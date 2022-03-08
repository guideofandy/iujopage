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
            <li><Link href="/carreras" ><a>Carreras</a></Link></li>
            <li><Link href="/noticias" ><a>Noticias</a></Link></li>
            <li><Link href="/servicios" ><a>Servicios</a></Link></li>
            <li><Link href="/test" ><a>Test</a></Link></li>
          </ul>
        </section>
        <section>
          <ul className={styles.ol}>
            <li>
              <Link href="/dashboard" ><a>Dashboard</a></Link>
            </li>
            <li>
              <Link href="/login" ><a>Iniciar Sesion</a></Link>
            </li>
          </ul>
        </section>
      </div>
      <div className={styles.derechos}>
        DERECHOS RESERVADOS 2022.
      </div>
    </footer>);
};

export default Footer;
