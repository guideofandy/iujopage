import Careers from "../../../components/Careers";
import ContaduriaData from "../../../components/Data/Careers/ContaduriaData";

const Contaduria = () => {

  const { career, profile, profileList, skills, pensumURL } = ContaduriaData();

  return (
    <Careers
      color="#78281F"
      career={career}
      profile={profile}
      profileList={profileList.map((element, key) => <li key={key}>{element}</li>)}
      skills={skills.map((element, key) => <li key={key}>{element}</li>)}
      pensum={pensumURL}
    />
  )
}

export default Contaduria