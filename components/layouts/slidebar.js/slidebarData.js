import { CgNotes } from 'react-icons/cg';
import { FaUniversity } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';

const slidebarData = () => {
  return ([
    {
      title: "SIGEA",
      path: "/",
      externalLink: true,
      icon: <CgNotes color='white' size={"2rem"} />,
    },
    {
      title: "CARRERAS",
      path: "/carreras",
      externalLink: false,
      icon: <FaUniversity color='white' size={"2rem"} />,
    },
    {
      title: "AULA VIRTUAL",
      path: "https://aulabqto.iujoac.org.ve/",
      externalLink: true,
      icon: <SiGoogleclassroom color='white' size={"2rem"} />,
    },
    {
      title: "SERVICIOS",
      path: "/",
      externalLink: false,
      icon: <MdDesignServices color='white' size={"2rem"} />,
    }
  ])
}

export default slidebarData