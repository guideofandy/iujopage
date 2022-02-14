import { CgNotes } from 'react-icons/cg'
import { FaUniversity } from 'react-icons/fa'

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
      title: "CONOCENOS",
      path: "/",
      externalLink: false,
      icon: <CgNotes color='white' size={"2rem"} />,
    },
    {
      title: "SERVICIOS",
      path: "/",
      externalLink: false,
      icon: <CgNotes color='white' size={"2rem"} />,
    }
  ])
}

export default slidebarData