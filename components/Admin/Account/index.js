import styles from "../../../pages/admin/admin.module.css";
import Button from "../../Button";
import InputText from "../../InputText";
import useAuth from "../../../hooks/useAuth";

const Account = () => {

  const {user} = useAuth();

  return (
    <>
      <header className={styles.headerBody}>
        <h2>
          Cuenta <span className={styles.autorHeader}>{user.name}</span>
        </h2>
        <span>(Configuracion de datos)</span>
      </header>
      <h4 className={styles.subtitle}>
        Cambiar el nombre del autor de los contenidos
      </h4>
      <span>
        (Este nombre aparecera en la parte superior de las publicaciones)
      </span>
      <div className={styles.lineInput}>
        <InputText type={"text"} placeholder={user.name} />
        <Button color={"green"} title={"Guardar"} />
      </div>
      <h4 className={styles.subtitle}>Cambiar el correo electrónico</h4>
      <span>(Este correo no es publico)</span>
      <div className={styles.lineInput}>
        <InputText className={styles.inputForm} placeholder="example@iujo.edu.ve" type="email" />
        <Button color={"green"} title={"Guardar"} />
      </div>
      <h4 className={styles.subtitle}>Cambiar la contraseña</h4>
      <span>(Este contraseña es utilizada para iniciar sesión)</span>
      <div className={styles.lineInput}>
        <div className={styles.doubleInput}>
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
        </div>
        <Button color={"green"} title={"Guardar"} />
      </div>
    </>
  );
};

export default Account;
