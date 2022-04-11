import { AiOutlineCode, AiOutlineRead } from 'react-icons/ai';
import { GiElectricalResistance, GiElectric, GiGearHammer, GiKidSlide, GiSpectacleLenses } from 'react-icons/gi';
import { MdAccountTree, MdListAlt } from "react-icons/md";

const getIcon = (icon) => {
  switch (icon) {
    case "CODE":
      return (<AiOutlineCode color='white' size={"3rem"} />)
    case "RESISTANCE":
      return (<GiElectricalResistance color='white' size={"3rem"} />)
    case "ELECTRICITY":
      return (<GiElectric color='white' size={"3rem"} />);
    case "ADMINISTRATION":
      return (<MdAccountTree color='white' size={"3rem"} />);
    case "CONTABILIDAD":
      return (<MdListAlt color='white' size={"3rem"} />);
    case "MECHANIC":
      return (<GiGearHammer color='white' size={"3rem"} />);
    case "KIDS":
      return (<GiKidSlide color='white' size={"3rem"} />);
    case "INTEGRAL":
      return (<AiOutlineRead color='white' size={"3rem"} />);
    case "SPECIAL":
      return (<GiSpectacleLenses color='white' size={"3rem"} />);
  }
}

export default getIcon;
