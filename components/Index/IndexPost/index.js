import styles from "../../../styles/Index.module.css";
import Button from "../../Button"
import Image from 'next/image'

const IndexPost = () => {
  return (
    <div className={styles.post}>
      <div className={styles.postFlex}>
        <div className={styles.postImg}>
          <Image src={"/img/maria.svg"} width={512} height={512} alt={"Jose Maria Velaz"} />
        </div>
        <div className={styles.postText}>
          <h1>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, vitae"</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, deserunt qui. Porro blanditiis explicabo nam eum nesciunt? Cumque, rerum amet?</p>
          <Button title={"Saber más"} />
        </div>
      </div>
    </div>
  )
}

export default IndexPost