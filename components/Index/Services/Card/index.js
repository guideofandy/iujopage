import styles from './Card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({element}) => {

  const {name, image, path} = element;

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={image} layout={'fill'} priority objectFit="cover" alt={name} />
      </div>
      <h4 className={styles.title}>{name}</h4>
      <Link href={`/servicios/${path}`}>
        <a className={styles.showMore}>Ver mas</a>
      </Link>
    </div>
  )
}

export default Card
