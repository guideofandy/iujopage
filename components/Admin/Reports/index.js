import styles from "../../../pages/admin/admin.module.css";
import Button from "../../Button";
import PostTemplete from "../../Reports/PostsTemplete";

const Reports = () => {
  return (
    <>
      <header className={styles.headerBody}>
        <h2>Reportes</h2>
      </header>
      <div className={styles.lineInput}>
        <select
          className={styles.select}
          placeholder="Repetir Contraseña"
          type="password"
        >
          <option>Usuarios y publicaciones</option>
          <option>Bitacora</option>
        </select>
        <Button eventClick={PostTemplete} color={"green"} title={"Generar"} />
      </div>
    </>
  );
};

export default Reports;
