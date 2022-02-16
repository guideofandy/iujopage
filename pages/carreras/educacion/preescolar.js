import Careers from "../../../components/Careers";
import PreescolarData from "../../../components/Data/PreescolarData";

const Preescolar = () => {

  const { career, profile, profileList, skills, pensumURL } = PreescolarData();

  return (
    <Careers
      color="#1B5E20"
      career={career}
      profile={profile}
      profileList={profileList.map((element, key) => <li key={key}>{element}</li>)}
      skills={skills.map((element, key) => <li key={key}>{element}</li>)}
      pensum={pensumURL}
    />
  )
}

export default Preescolar