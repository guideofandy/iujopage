import styles from "../../../../styles/Header.module.css";
import Link from "next/link"

const SlidebarElement = ({ element }) => {
  if (element.externalLink) {
    return (
      <a href={element.path}>
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
        <a>
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