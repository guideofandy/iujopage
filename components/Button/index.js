import styles from "../../styles/Button.module.css"
import { useRouter } from "next/router";

const Button = ({ title, path = "", eventClick }) => {

  const router = useRouter();

  const handleClick = () => {
    if (!!eventClick) {
      eventClick()
    }
    if (path !== "") {
      router.push(path)
    }

  }

  console.log(router)
  return (
    <button onClick={handleClick} className={styles.button}>
      {title}
    </button>);
};

export default Button;
