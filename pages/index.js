import styles from "../styles/Index.module.css";
import Image from 'next/image';
import { AiOutlineMenu } from "react-icons/ai";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <section className={styles.mainPage}>
        <div className={styles.dataPage}>
          <header className={styles.header}>
            <div className={styles.headerImage}>
              <Image src={'/img/principal.png'} width={833} height={261} alt={"Logo de La institución"} />
            </div>
            <div className={styles.Links}>
              <a>SIGEA</a>
              <a>BOLETIN INFORMATIVO</a>
              <a>RADIO</a>
            </div>
            <div className={styles.menu}>
              <AiOutlineMenu color='white' size={"3rem"} />
            </div>
          </header>
          <div className={styles.post}>
            <div className={styles.postFlex}>
              <h1>"Unidos Haciendo vida universitaria"</h1>
              <div className={styles.postImg}>
                <Image src={"/img/maria.svg"} width={512} height={512} alt={"Jose Maria Velaz"} />
              </div>
            </div>
          </div>
          <footer className={styles.footer}>
            <a>Conoce mas acerca del IUJO</a>
          </footer>
        </div>
      </section>
    </>
  )
}
