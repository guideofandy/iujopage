import Button from "../../components/Button";
import styles from "./Login.module.css";
import Image from "next/image"
import axios from "axios";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Login = () => {

  const { logIn } = useAuth();

  const [user, setUser] = useState({ username: "", password: "" });
  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('/api/login', user)
      .then(({ data }) => logIn(data))
      .catch(e => console.log(e.response));
  }

  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src="/img/controlestudio.jpg" layout={'fill'} priority objectFit="cover" alt={"Personal Iujo"} />
        </div>
        <form onSubmit={handleLogin} className={styles.login}>
          <div className={styles.center}>
            <input placeholder={"Nombre de Usuario"} onChange={({ target }) => setUser({ ...user, username: target.value })} type="text" />
            <input placeholder={"Contraseña"} onChange={({ target }) => setUser({ ...user, password: target.value })} type="password" />
          </div>
          <Button type="submit" title="Iniciar Session" />
        </form>
      </div>
    </div>
  )
}

export default Login