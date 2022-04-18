import styles from "./Button.module.css"
import {useRouter} from "next/router";

const Button = ({title, path = "", eventClick, color = "white", type}) => {

  const CustomColor = () => {
    if (color === "black") {
      return styles.button + " " + styles.black;
    } else if (color === 'red') {
      return styles.button + " " + styles.red;
    } else if (color === 'green') {
      return styles.button + " " + styles.green;
    } else if (color === 'orange') {
      return styles.button + "  " + styles.orange;
    } else {
      return styles.button

    }
  }

  const router = useRouter();

  const handleClick = () => {
    if (!!eventClick) {
      eventClick()
    }
    if (path !== "") {
      router.push(path)
    }

  }
  return (
    <button onClick={handleClick} type={type} className={CustomColor()}>
      {title}
    </button>);
};

export default Button;
