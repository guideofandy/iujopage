import styles from "../styles/Index.module.css";
import IndexPost from "../components/Index/IndexPost";
import Header from "../components/Index/Header";
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import Services from "../components/Index/Services";
import News from "../components/Index/News";

export default function Home() {
  return (
    <>
      <section className={styles.mainPage}>
        <div className={styles.dataPage}>
          <Header />
          <IndexPost />
          <div className={styles.showMore}>
            <BsFillArrowDownCircleFill className={styles.arrow} />
            <p>Has scroll para ver más información</p>
          </div>
        </div>
      </section>
      <News/>
      <Services />
    </>
  )
}
