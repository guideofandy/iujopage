import styles from "./Button.module.css"
import { useRouter } from "next/router";

const Button = ({ title, path = "", eventClick, color = "white" }) => {

  const CustomColor = () => {
    if (color === "black") {
      return styles.button + " " + styles.black;
    }
    return styles.button
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
    <button onClick={handleClick} className={CustomColor()}>
      {title}
    </button>);
};

export default Button;
