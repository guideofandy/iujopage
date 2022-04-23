import styles from "../../../pages/admin/admin.module.css";
import Button from "../../Button";
import InputText from "../../InputText";
import useAuth from "../../../hooks/useAuth";
import {useState} from "react";
import axios from "axios";
import Message from "../../Message";

const Account = ({data}) => {
  const {email: userEmail, userId} = data;
  const {user, updateNameAccount} = useAuth();
  const [emailPlaceholder, setEmailPlaceholder] = useState(userEmail);
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = ({target}) => {
    if (
      (/^[a-zA-Z ]+$/.test(target.value) && target.value.length <= 20) ||
      target.value === ""
    ) {
      setName(target.value);
    }
  };

  const handlePassword = ({target}) => {
    //check if the input have letters and numbers and caracters specials
    setPassword(target.value);
  };

  const handleEmail = ({target}) => {
    //check if input have not spaces
    if (/ /g.test(target.value)) {
      setError("El correo electronico no puede contener espacios");
      setSuccess("");
    } else {
      setError("");
      setEmail(target.value.trim());
    }
  };

  const updatePassword = () => {
    if (
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password)
    ) {
      if (password === passwordCheck) {
        axios
          .patch(`/api/users/${userId}`, {
            password,
          })
          .then(() => {
            setPassword("");
            setPasswordCheck("");
            setError("");
            setSuccess("Contraseña actualizada");
          })
          .catch((err) => {
            setSuccess("");
            setError(err.response.data.message);
          });
      } else {
        setSuccess("");
        setError("Las contraseñas no coinciden");
      }
    } else {
      setSuccess("");
      setError(
        "La contraseña debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número"
      );
    }
  };

  const updateName = () => {
    if (name !== "") {
      axios
        .patch(`/api/users/${userId}`, {name: name.toUpperCase().trim()})
        .then((res) => {
          updateNameAccount(name.toUpperCase().trim());
          setName("");
          setError("");
          setSuccess("Nombre actualizado");
        })
        .catch((err) => {
          setSuccess("");
          setError(err.response.data.message);
        });
    } else {
      setSuccess("");
      setError("Ingrese un nombre valido");
    }
  };

  const updateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      axios
        .patch(`/api/users/${userId}`, {email: email.toLowerCase().trim()})
        .then((res) => {
          setEmail("");
          setEmailPlaceholder(email.toLowerCase().trim());
          setError("");
          setSuccess("Correo electronico actualizado");
        })
        .catch((err) => {
          setError(err.response.data.message);
          setSuccess("");
        });
    } else {
      setSuccess("");
      setError("Correo electornico invalido");
    }
  };

  return (
    <>
      <header className={styles.headerBody}>
        <h2>
          Cuenta <span className={styles.autorHeader}>{user.name}</span>
        </h2>
        <span>(Configuracion de datos)</span>
      </header>
      {success !== "" && <Message message={success} type={"normal"} />}
      {error !== "" && <Message message={error} />}
      <h4 className={styles.subtitle}>
        Cambiar el nombre del autor de los contenidos
      </h4>
      <span>
        (Este nombre aparecera en la parte superior de las publicaciones)
      </span>
      <div className={styles.lineInput}>
        <InputText
          type={"text"}
          onChange={handleName}
          placeholder={user.name}
          value={name}
          onEnter={updateName}
        />
        <Button color={"green"} eventClick={updateName} title={"Guardar"} />
      </div>
      <h4 className={styles.subtitle}>Cambiar el correo electrónico</h4>
      <span>(Este correo no es publico)</span>
      <div className={styles.lineInput}>
        <InputText
          className={styles.inputForm}
          onChange={handleEmail}
          value={email}
          placeholder={emailPlaceholder}
          type="email"
          onEnter={updateEmail}
        />
        <Button eventClick={updateEmail} color={"green"} title={"Guardar"} />
      </div>
      <h4 className={styles.subtitle}>Cambiar la contraseña</h4>
      <span>(Este contraseña es utilizada para iniciar sesión)</span>
      <div className={styles.lineInput}>
        <div className={styles.doubleInput}>
          <InputText
            className={styles.inputForm}
            onChange={({target}) => setPasswordCheck(target.value)}
            value={passwordCheck}
            placeholder="Contraseña"
            type="password"
          />
          <InputText
            className={styles.inputForm}
            value={password}
            onChange={handlePassword}
            placeholder="Repetir Contraseña"
            type="password"
            onEnter={updatePassword}
          />
        </div>
        <Button eventClick={updatePassword} color={"green"} title={"Guardar"} />
      </div>
    </>
  );
};

export default Account;
