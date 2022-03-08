import styles from "../../../../styles/Header.module.css";
import Link from "next/link"

const SlidebarElement = ({ element, event }) => {
  if (element.externalLink) {
    return (
      <a onClick={event} target="_blank" href={element.path}>
        <div className={styles.SlideElement}>
          {element.icon}
          <span>
            {element.title}
          </span>
        </div>
      </a>)
  } else {
    return (
      <Link href={element.path}>
        <a onClick={event}>
          <div className={styles.SlideElement}>
            {element.icon}
            < span >
              {element.title}
            </span >
          </div >
        </a>
      </Link>
    )
  }
}

export default SlidebarElement