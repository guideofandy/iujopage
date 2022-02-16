import styles from "../styles/Index.module.css";
import IndexPost from "../components/Index/IndexPost";
import Header from "../components/Index/Header";
import { BsFillArrowDownCircleFill, BsArrowRightShort } from 'react-icons/bs'
import Services from "../components/Index/Services";
import News from "../components/Index/News";
import Button from "../components/Button";

export default function Home() {

  const Register = true;


  return (
    <>
      {Register &&
        <div className={styles.Message}>
          <div className={styles.MessageText}>
            <span>Pre inscripciones abiertas</span>
            <BsArrowRightShort color="white" size={"2rem"} />
          </div>
          <Button title="Pre-Inscribete" />
        </div>}
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
      <News />
      <Services />
    </>
  )
}
