import styles from "./BoxCarrer.module.css";
import Link from "next/link";
import getIcon from "../../helpers/getIcon";
import getColors from "../../helpers/getColors";

const BoxCarrer = ({element}) => {
  const {name, icon, color, path} = element;
  return (
    <Link href={`/carreras/${path}`}>
      <a className={styles.block + " " + getColors(color)}>
        {getIcon(icon)}
        {name}
      </a>
    </Link>
  );
};

export default BoxCarrer;
