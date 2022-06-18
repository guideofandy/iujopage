import styles from "./QueryReports.module.css"

const QueryReports = ({element}) => {

  const {title, data, time} = element
  return (
    <div className={styles.container}>
      <h6 className={styles.title}>{title}</h6>
      <div className={styles.data}>
        <p className={styles.dataNumber}>{data}</p>
        <p className={styles.description}>{time === undefined ? "Desde el inicio" : time != "1" ? `En el ultimos ${time} meses` : `En el ultimo mes`}</p>
      </div>
    </div>
  );
};

export default QueryReports;
