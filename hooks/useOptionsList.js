import styles from "../pages/admin/admin.module.css";
import { useRouter } from "next/router";

const useOptionsList = (Initial) => {

  const router = useRouter();

  const optionsList = [
    { name: "Cuenta", path : "/admin/cuenta/" },
    { name: "Usuarios", path : "/admin/usuarios/" },
    { name: "Carreras" , path : "/admin/carreras/" },
    { name: "Servicios" , path : "/admin/servicios/" },
    { name: "Reportes" , path : "/admin/reportes/" },
  ];

  const optionListEditor = [{ name: "Cuenta", path: "/admin/cuenta/" }];

  const mapList = (element, key) => {
    return (
      <li
        key={key}
        onClick={() => {
          router.push(element.path)
        }}
        className={
          element.name === Initial.name
            ? `${styles.itemList} ${styles.activeOption}`
            : styles.itemList
        }
      >
        {element.name}
      </li>
    );
  };

  return { optionsList, mapList, optionListEditor };
};

export default useOptionsList;
