import Careers from "../../../components/Careers";
import MecanicaData from "../../../components/Data/Careers/MecanicaData";

const Mecanica = () => {

  const { career, profile, profileList, skills, pensumURL } = MecanicaData();

  return (
    <Careers
      color="#F57F17"
      career={career}
      profile={profile}
      profileList={profileList.map((element, key) => <li key={key}>{element}</li>)}
      skills={skills.map((element, key) => <li key={key}>{element}</li>)}
      pensum={pensumURL}
    />
  )
}

export default Mecanica