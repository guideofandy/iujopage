import styles from "../../../styles/Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import slidebarData from "./slidebarData";
import SlidebarElement from "./SlidebarElement.js";

const Slidebar = ({ handleState, state }) => {

  const SlidebarState = state ? styles.slidebar + " " + styles.active : styles.slidebar;
  const ShowButton = state ? styles.active : styles.inactive;
  return (
    <aside className={SlidebarState}>
      <header className={styles.headerSlidebar}>
        {state &&
          <div onClick={handleState} className={ShowButton}>
            <AiOutlineMenu color='white' size={"3rem"} />
          </div>
        }
      </header>
      {slidebarData().map((element, key) => <SlidebarElement key={key} element={element} />)}
    </aside>);
};

export default Slidebar;
