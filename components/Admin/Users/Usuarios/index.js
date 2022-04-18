import Button from "../../../Button";
import styles from "../../../../pages/admin/admin.module.css";
import {useState} from "react";
import InputText from "../../../InputText";

const Usuarios = ({data}) => {
  const [selected, setSelected] = useState("");

  return (
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
                  <span>Estado:</span> Activo
                </p>
              </div>
              <div className={styles.itemTableButtons}>
                <Button
                  color="orange"
                  eventClick={() => setSelected(id)}
                  title="Edit"
                />
              </div>
            </>
          ) : (
            <>
              <div key={key} className={styles.itemTableData}>
                <p className={styles.messageEdit}>
                  Si no deseas actualizar algun campo <span>Dejalo vacío</span>
                </p>
                <p>
                  <InputText placeholder={name} />
                </p>
                <p>
                  <InputText placeholder={email} />
                </p>
                <p>
                  <span>Nombre de usuario</span> @{username}
                </p>
                <div>
                  <span>Estado:</span>{" "}
                  <div className={status ? `${styles.buttonSlide} ${styles.activeButton}` : styles.buttonSlide}>
                    <div className={styles.buttonSlideClick}></div>
                  </div>
                </div>
              </div>
              <div className={styles.itemTableButtons}>
                <Button
                  color="red"
                  eventClick={() => setSelected("")}
                  title="Cancel"
                />
                <Button
                  color="green"
                  eventClick={() => setSelected("")}
                  title="Guardar"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Usuarios;
