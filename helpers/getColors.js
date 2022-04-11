import styles from "../components/BoxCarrer/BoxCarrer.module.css";

const getColors = (color) => {
  switch (color) {
    case "BLUE":
      return styles.blue;
    case "GRAY":
      return styles.gray;
    case "RED":
      return styles.red;
    case "YELLOW":
      return styles.yellow;
    case "GREEN":
      return styles.green;
  }
}

export default getColors;
