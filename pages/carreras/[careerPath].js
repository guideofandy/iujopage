import Careers from "../../components/Careers";
import CareerController from "../../db/Controllers/CareerController";
import getColors from "../../helpers/getColors";

const Carrera = ({ data }) => {
  const { career, color, profile, pensumURL, Profiles, Skills } = data;

  return (
    <Careers
      color={getColors(color)}
      career={career}
      profile={profile}
      profileList={Profiles.map((element, key) => (
        <li key={key}>{element.name}</li>
      ))}
      skills={Skills.map((element, key) => (
        <li key={key}>{element.name}</li>
      ))}
      pensum={pensumURL}
    />
  );
};

export default Carrera;

export async function getServerSideProps({ query }) {
  const career = new CareerController();
  const data = await career.getCareerByPath(query.careerPath);
  if (data) {
    return {
      props: {
        data,
      },
    };
  }
  return {
    redirect: {
      permanent: false,
      destination: "/carreras",
    },
  };
}
