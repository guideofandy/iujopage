import ServicesController from "../../../db/Controllers/ServiceController";
import useOptionsList from "../../../hooks/useOptionsList"
import styles from "../admin.module.css";
import Services from "../../../components/Admin/Services";
import { verify } from "jsonwebtoken";

const Servicios = ({data}) => {

  const {role} = data;

  const { optionsList, optionListEditor, mapList } = useOptionsList({
    name: "Servicios",
  });

  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.options}>
          <ul className={styles.list}>
            {role ? optionsList.map(mapList) : optionListEditor.map(mapList)}
          </ul>
        </div>
        <div className={styles.body}>
          <Services  data={data.services}/> 
        </div>
      </div>
    </div>
  );
};

export default Servicios;

export async function getServerSideProps({ req }) {
  const { sessionJWT } = req.cookies;
  const { role } = verify(sessionJWT, process.env.SECRET);
  const services = await ServicesController.getDataServices();
  return {
    props: {
      data: {
        pre: process.env.PREINSCRIPCION,
        services,
        role,
      },
    },
  };
}
