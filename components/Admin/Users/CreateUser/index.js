import Button from "../../../Button";
import {useState} from "react";
import axios from "axios";
import styles from "../../../../pages/admin/admin.module.css";
import {useRouter} from "next/router";
import InputText from "../../../InputText";

const CreateUser = () => {
  const router = useRouter();

  const [data, setData] = useState({name: "", password: "", email: ""});

  const handleName = (e) => {
    setData({...data, name: e.target.value});
  };
  const handleUsername = (e) => {
    setData({...data, username: e.target.value});
  };

  const handlePassword = (e) => {
    setData({...data, password: e.target.value});
  };

  const handleEmail = (e) => {
    setData({...data, email: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/", data)
      .then((response) => console.log(response))
      .catch();
  };

  return (
    <>
      <div className={styles.input}>
        <InputText
          className={styles.inputForm}
          onChange={handleName}
          placeholder="Nombre"
          type="text"
        />
        <span>(Este nombre aparecera como el autor en las publicaciones)</span>
      </div>
      <div className={styles.input}>
        <InputText
          className={styles.inputForm}
          onChange={handleUsername}
          placeholder="Nombre de usuario"
          type="text"
        />
        <span>(Este es el usuario con el que se de iniciar sesión)</span>
      </div>
      <div className={styles.input}>
        <InputText onChange={handleEmail} placeholder="Correo" type="email" />
        <span>
          (Este correo no será publico, sera utilizado como contacto.)
        </span>
      </div>
      <div className={styles.input}>
        <InputText
          className={styles.inputForm}
          placeholder="Contraseña"
          type="password"
        />
        <InputText
          className={styles.inputForm}
          placeholder="Repetir Contraseña"
          type="password"
        />
        <span>(Esta contraseña será usada para iniciar sesión)</span>
      </div>
      <div className={styles.input}>
        <Button color="black" title="Registrar Editor" type="submit" />
      </div>
    </>
  );
};

export default CreateUser;
