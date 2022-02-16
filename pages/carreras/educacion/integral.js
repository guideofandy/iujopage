import Careers from "../../../components/Careers";
import IntegralData from "../../../components/Data/IntegralData";

const Integral = () => {

  const { career, profile, profileList, skills, pensumURL } = IntegralData();

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

export default Integral