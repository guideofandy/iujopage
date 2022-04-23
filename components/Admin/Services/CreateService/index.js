import styles from "../../../../pages/admin/admin.module.css";
import InputText from "../../../InputText";
import Button from "../../../Button";

const CreateService = () => {
  return (
    <>
      <div className={styles.input}>
        <InputText placeholder={"Nombre del servicio"} />
        <span>(Este será el nombre principal del servicio)</span>
      </div>
      <div className={styles.input}>
        <InputText placeholder={"Correo Electronico"} type="email" />
        <span>(Este correo sera utilizado como contacto para el publico)</span>
      </div>
      <div className={styles.input}>
        <InputText placeholder={"Ruta URL"} />
        <span>(Esta es la ruta para ver el servicio. Ej: /servicios/upp)</span>
      </div>
      <div className={styles.input}>
        <InputText placeholder={"Coordinador del servicio"} />
        <span>(Nombre del Coordinador del servicio)</span>
      </div>
      <div className={styles.input}>
        <InputText placeholder={"Descripción"} />
        <span>(Descripción del servicio)</span>
      </div>
      <div className={styles.input}>
        <input type="file" />
        <span>(Esta imagen aparecera como portada del servicio)</span>
      </div>
      <div className={styles.input}>
        <Button color="black" title="Registrar Servicio" type="submit" />
      </div>
    </>
  );
};

export default CreateService;
