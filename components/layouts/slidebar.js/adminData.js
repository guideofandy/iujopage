import { AiFillHome } from 'react-icons/ai';
import { RiSettings4Fill } from 'react-icons/ri'
import { MdOutlinePostAdd } from 'react-icons/md';

const adminData = () => {
  return ([
    {
      title: "DASHBOARD",
      path: "/dashboard",
      externalLink: false,
      icon: <AiFillHome color='white' size={"2rem"} />,
    },
    {
      title: "NOTICIAS",
      path: "/noticias",
      externalLink: false,
      icon: <MdOutlinePostAdd color='white' size={"2rem"} />,
    },
    {
      title: "OPCIONES",
      path: "/admin",
      externalLink: false,
      icon: <RiSettings4Fill color='white' size={"2rem"} />,
    }
  ]);
}

export default adminData;