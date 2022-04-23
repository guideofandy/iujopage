import Button from "../../../Button";
import styles from "../../../../pages/admin/admin.module.css";
import InputText from "../../../InputText";
import Message from "../../../Message";
import useUsers from "../../../../hooks/useUsers";

const CreateUser = ({updateList}) => {
  const {
    name,
    username,
    email,
    password,
    passwordCheck,
    handleCreateUser,
    handleName,
    handleUsername,
    handleEmail,
    handlePassword,
    handlePasswordCheck,
    error,
    success,
  } = useUsers();

  return (
    <>
      {error !== "" && <Message message={error} />}
      {success !== "" && <Message message={success} type={"normal"} />}
      <div className={styles.input}>
        <InputText
          className={styles.inputForm}
          onChange={handleName}
          placeholder="Nombre"
          value={name}
          type="text"
        />
        <span>(Este nombre aparecera como el autor en las publicaciones)</span>
      </div>
      <div className={styles.input}>
        <InputText
          value={username}
          className={styles.inputForm}
          onChange={handleUsername}
          placeholder="Nombre de usuario"
          type="text"
        />
        <span>(Este es el usuario con el que se de iniciar sesión)</span>
      </div>
      <div className={styles.input}>
        <InputText
          onChange={handleEmail}
          value={email}
          placeholder="Correo"
          type="email"
        />
        <span>
          (Este correo no será publico, sera utilizado como contacto.)
        </span>
      </div>
      <div className={styles.input}>
        <InputText
          className={styles.inputForm}
          onChange={handlePasswordCheck}
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
        />
        <span>(Esta contraseña será usada para iniciar sesión)</span>
      </div>
      <div className={styles.input}>
        <Button
          eventClick={() => handleCreateUser(updateList)}
          color="black"
          title="Registrar Editor"
        />
      </div>
    </>
  );
};

export default CreateUser;
