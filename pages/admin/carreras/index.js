import useOptionsList from "../../../hooks/useOptionsList";
import styles from "../admin.module.css";
import { verify } from "jsonwebtoken";
import Careers from "../../../components/Admin/Careers/";
import CareerController from "../../../db/Controllers/CareerController";

const Carreras = ({ data }) => {
  
  const {role} = data;

  const { optionsList, optionListEditor, mapList } = useOptionsList({
    name: "Carreras",
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
          <Careers data={data.careers} />
        </div>
      </div>
    </div>
  );
};

export default Carreras;

export async function getServerSideProps({ req }) {
  const { sessionJWT } = req.cookies;
  const { role } = verify(sessionJWT, process.env.SECRET);
  const careers = await CareerController.getDataCareers();
  return {
    props: {
      data: {
        pre: process.env.PREINSCRIPCION,
        careers,
        role,
      },
    },
  };
}
