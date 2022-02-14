import styles from './BoxCarrer.module.css';
import Link from 'next/link';

const BoxCarrer = ({ element }) => {
  const { title, icon, color, path } = element;
  if (!!path) return (
    <Link href={path}>
      <a className={styles.block + " " + color}>
        {icon}
        {title}
      </a>
    </Link>
  )
  return (<a className={styles.block + " " + color}>
    {icon}
    {title}
  </a>)
}

export default BoxCarrer