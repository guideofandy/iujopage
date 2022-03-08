import Button from "../../components/Button";
import styles from "./Login.module.css";
import Image from "next/image"

const Login = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src="/img/controlestudio.jpg" layout={'fill'} priority objectFit="cover" alt={"Personal Iujo"} />
        </div>
        <div className={styles.login}>
          <div className={styles.center}>
            <input placeholder={"Nombre de Usuario"} type="text" />
            <input placeholder={"Contraseña"} type="text" />
          </div>
          <Button title="Iniciar Session" />
        </div>
      </div>
    </div>
  )
}

export default Login