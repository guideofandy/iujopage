import {sync} from '../../db/relations';

const Test = () => {

  return (
    <div className="container">
      <h1>Base de Datos restablecida</h1>
      
    </div>
  );
};

export default Test;

export async function getServerSideProps() {
  await sync();
  return {props: {data: null}};
}
