import {AiOutlineCode, AiOutlineRead} from "react-icons/ai";
import {
  GiElectricalResistance,
  GiElectric,
  GiGearHammer,
  GiKidSlide,
  GiSpectacleLenses,
} from "react-icons/gi";
import {MdAccountTree, MdListAlt} from "react-icons/md";
import styles from "./Icons.module.css";

const Icons = ({icon, callback}) => {
  const dataIcons = [
    {CONST: "CODE", icon: <AiOutlineCode color={"#212121"} size={"3rem"} />},
    {
      CONST: "RESISTANCE",
      icon: <GiElectricalResistance color={"#212121"} size={"3rem"} />,
    },
    {CONST: "ELECTRIC", icon: <GiElectric color={"#212121"} size={"3rem"} />},
    {
      CONST: "ADMINISTRATION",
      icon: <MdAccountTree color={"#212121"} size={"3rem"} />,
    },
    {CONST: "CONTABILIDAD", icon: <MdListAlt color={"#212121"} size={"3rem"} />},
    {CONST: "MECHANIC", icon: <GiGearHammer color={"#212121"} size={"3rem"} />},
    {CONST: "KIDS", icon: <GiKidSlide color={"#212121"} size={"3rem"} />},
    {CONST: "INTEGRAL", icon: <AiOutlineRead color={"#212121"} size={"3rem"} />},
    {
      CONST: "SPECIAL",
      icon: <GiSpectacleLenses color={"#212121"} size={"3rem"} />,
    },
  ];

  return (
    <div className={styles.iconsFlex}>
      {dataIcons.map((el, key) => (
        <div onClick={() => callback(el.CONST)} className={`${styles.iconItem} ${icon === el.CONST && styles.selected}`}>{el.icon}</div>
      ))}
    </div>
  );
};

export default Icons;
