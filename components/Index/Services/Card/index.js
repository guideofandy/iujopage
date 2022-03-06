import styles from './Card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ title, path, route = "/servicios" }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={path} layout={'fill'} priority objectFit="cover" alt={title} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <Link href={route}>
        <a className={styles.showMore}>Ver mas</a>
      </Link>

    </div>
  )
}

export default Card