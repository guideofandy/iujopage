import styles from "../../../../pages/admin/admin.module.css";
import InputText from "../../../InputText";
import Button from "../../../Button";
import useServices from "../../../../hooks/useServices";
import Message from "../../../Message";
const CreateService = () => {
  const {
    handleName,
    name,
    handlePath,
    path,
    handleEmail,
    email,
    handlePhone,
    phone,
    handleDescription,
    description,
    handleCoordinator,
    coordinator,
    handleImage,
    handleSubmit,
    error,
    success,
  } = useServices();

  return (
    <>
			{success !== "" && <Message type="normal" message={success} />}
			{error !== "" && <Message message={error} />}
      <div className={styles.input}>
        <InputText
          value={name}
          onChange={handleName}
          placeholder={"Nombre del servicio"}
        />
        <span>(Este será el nombre principal del servicio)</span>
      </div>
      <div className={styles.input}>
        <InputText placeholder={"Correo Electronico"} type="email" onChange={handleEmail} value={email} />
        <span>(Este correo sera utilizado como contacto para el publico)</span>
      </div>
      <div className={styles.input}>
        <InputText placeholder={"Ruta URL"} onChange={handlePath} value={path} />
        <span>(Esta es la ruta para ver el servicio. Ej: /servicios/upp)</span>
      </div>
      <div className={styles.input}>
        <InputText placeholder={"Coordinador del servicio"} onChange={handleCoordinator} value={coordinator} />
        <span>(Nombre del Coordinador del servicio)</span>
      </div>
      <div className={styles.input}>
        <InputText type={'textarea'} placeholder={"Descripción"} onChange={handleDescription} value={description}/>
        <span>(Descripción del servicio)</span>
      </div>
      <div className={styles.input}>
        <InputText placeholder={"Telefono"} onChange={handlePhone} value={phone} />
        <span>(Este será publico para todo el publico como contacto)</span>
      </div>
      <div className={styles.input}>
        <input type="file" name="file" onChange={handleImage} />
        <span>(Esta imagen aparecera como portada del servicio)</span>
      </div>
      <div className={styles.input}>
        <Button color="black"  eventClick={handleSubmit} title="Registrar Servicio" type="submit" />
      </div>
    </>
  );
};

export default CreateService;
