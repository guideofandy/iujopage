import Button from "../../../Button";
import styles from "../../../../pages/admin/admin.module.css";
import {useState} from "react";
import InputText from "../../../InputText";
import useUsers from "../../../../hooks/useUsers";
import Message from "../../../Message";

const Usuarios = ({data, updateList}) => {
  const [selected, setSelected] = useState("");

  const {
    handleName,
    handleEmail,
    handlePassword,
    handlePasswordCheck,
    name: nameUser,
    password,
    email: emailUser,
    passwordCheck,
    error,
    success,
    statusSelected,
    handleStatus,
    handleUpdateUser,
  } = useUsers();

  return (
    <>
      {error !== "" && <Message message={error} />}
      {success !== "" && <Message message={success} type={"normal"} />}
      <div className={styles.table}>
        {data.map(({name, id, email, username, status}, key) => (
          <div key={key} className={styles.itemTable}>
            {selected !== id ? (
              <>
                <div key={key} className={styles.itemTableData}>
                  <p>
                    <span>Nombre:</span> {name}
                  </p>
                  <p>
                    <span>Correo: </span> {email}
                  </p>
                  <p>
                    <span>Nombre de usuario</span> @{username}
                  </p>
                  <p>
                    <span>Estado:</span> {status ? "Activo" : "Inactivo"}
                  </p>
                </div>
                <div className={styles.itemTableButtons}>
                  <Button
                    color="orange"
                    eventClick={() => {setSelected(id); handleStatus(status)}}
                    title="Edit"
                  />
                </div>
              </>
            ) : (
              <>
                <div key={key} className={styles.itemTableData}>
                  <p className={styles.messageEdit}>
                    Si no deseas actualizar algun campo{" "}
                    <span>Dejalo vacío</span>
                  </p>
                  <div className={styles.input}>
                    <InputText
                      className={styles.inputForm}
                      onChange={handleName}
                      placeholder="Nombre"
                      value={nameUser}
                      type="text"
                    />
                    <span>
                      (Este nombre aparecera como el autor en las publicaciones)
                    </span>
                  </div>
                  <div className={styles.input}>
                    <InputText
                      onChange={handleEmail}
                      value={emailUser}
                      placeholder="Correo"
                      type="email"
                    />
                    <span>
                      (Este correo no será publico, sera utilizado como
                      contacto.)
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
                    <span>
                      (Esta contraseña será usada para iniciar sesión)
                    </span>
                  </div>
                  <div onClick={handleStatus}>
                    <span>Estado:</span>
                    <div
                      className={
                        statusSelected
                          ? `${styles.buttonSlide} ${styles.activeButton}`
                          : styles.buttonSlide
                      }
                    >
                      <div className={styles.buttonSlideClick}></div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemTableButtons}>
                  <Button
                    color="red"
                    eventClick={() => {setSelected(""); handleStatus(null)}}
                    title="Cancel"
                  />
                  <Button
                    color="green"
                    eventClick={() => {
                      handleUpdateUser({id, status}, updateList);
                      if (error === "" && success !== "") {
                        handleStatus(null);
                        setSelected("");
                      }
                    }}
                    title="Guardar"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Usuarios;
