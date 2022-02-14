import styles from './Card.module.css';
import Image from 'next/image'

const Card = ({ title, path }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={path} layout={'fill'} priority objectFit="cover" alt={title} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <a className={styles.showMore}>Ver mas</a>
    </div>
  )
}

export default Card