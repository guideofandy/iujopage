import styles from "./Colors.module.css";

const Colors = ({color, callback}) => {
  const dataColors = [
    {CONST: "BLUE", styles: styles.blue},
    {CONST: "GRAY", styles: styles.gray},
    {CONST: "GREEN", styles: styles.green},
    {CONST: "RED", styles: styles.red},
    {CONST: "YELLOW", styles: styles.yellow},
  ];

  return (
    <div className={styles.colorsFlex}>
      {dataColors.map((el, key) => (
        <div
          key={key}
          onClick={() => callback(el.CONST)}
          className={`${styles.colorItem} ${el.styles} ${color === el.CONST && styles.selected
            }`}
        ></div>
      ))}
    </div>
  );
};

export default Colors;
