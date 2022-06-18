import useOptionsList from "../../../hooks/useOptionsList";
import styles from "../admin.module.css";
import Account from "../../../components/Admin/Account";
import { verify } from "jsonwebtoken";
import useAuth from "../../../hooks/useAuth";

const Cuenta = ({ data }) => {
  const { user, updateNameAccount } = useAuth();
  const { account, role } = data;
  const { optionsList, optionListEditor, mapList } = useOptionsList({
    name: "Cuenta",
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
          <Account data={{...account, user, updateNameAccount}} />
        </div>
      </div>
    </div>
  );
};

export default Cuenta;

export async function getServerSideProps({ req }) {
  const { sessionJWT } = req.cookies;
  const { role, id, email } = verify(sessionJWT, process.env.SECRET);
  return {
    props: {
      data: {
        role,
        account: { userId: id, email },
      },
    },
  };
}
