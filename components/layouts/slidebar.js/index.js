import styles from "../../../styles/Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowBarRight } from "react-icons/bs";
import { BiLogOut } from 'react-icons/bi';
import slidebarData from "./slidebarData";
import SlidebarElement from "./SlidebarElement.js";
import useAuth from "../../../hooks/useAuth";

const Slidebar = ({ handleState, state }) => {

  const { user, logOut } = useAuth();

  const SlidebarState = state ? styles.slidebar + " " + styles.active : styles.slidebar;
  const ShowButton = state ? styles.active : styles.inactive;
  return (
    <aside className={SlidebarState}>
      <header className={styles.headerSlidebar}>
        {state ?
          <div onClick={handleState} className={ShowButton}>
            <AiOutlineMenu cursor="pointer" color='white' size={"2rem"} />
          </div> :
          <BsArrowBarRight cursor="pointer" color='white' size={"2rem"} />
        }
      </header>
      {slidebarData().map((element, key) => <SlidebarElement event={handleState} key={key} element={element} />)}
      {!!user &&
        <div onClick={logOut} className={styles.SlideElement}>
          <div className={styles.SlideElement}>
            <BiLogOut color='white' size={"2rem"} />
            < span >
              Logout
            </span >
          </div >
        </div>
      }
    </aside>);
};

export default Slidebar;
