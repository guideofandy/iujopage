import Button from "../../components/Button";
import styles from "./Login.module.css";
import Image from "next/image";
import axios from "axios";
import {useState} from "react";
import useAuth from "../../hooks/useAuth";
import Message from "../../components/Message";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {logIn} = useAuth();

  const handleUsername = ({target}) => {
    if (target.value.match(/^[a-zA-Z0-9]*$/) && target.value.length < 20) {
      setUsername(target.value);
    }
  };

  const handlePassword = ({target}) => {
    if (
      target.value.match(/^[@#$%&*a-zA-Z0-9]*$/) &&
      target.value.length < 20
    ) {
      setPassword(target.value);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("/api/login", {username, password})
      .then(({data}) => logIn(data))
      .catch((e) => {
        setError(e.response.data.message);
        setPassword("");
      });
  };

  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image
            src="/img/controlestudio.jpg"
            layout={"fill"}
            priority
            objectFit="cover"
            alt={"Personal Iujo"}
          />
        </div>
        <form onSubmit={handleLogin} className={styles.login}>
          <div className={styles.center}>
            {error !== "" && <Message message={error} />}
            <input
              placeholder={"Nombre de Usuario"}
              value={username}
              onChange={handleUsername}
              type="text"
            />
            <input
              placeholder={"Contraseña"}
              value={password}
              onChange={handlePassword}
              type="text"
            />
          </div>
          <Button type="submit" title="Iniciar Session" />
        </form>
      </div>
    </div>
  );
};

export default Login;
