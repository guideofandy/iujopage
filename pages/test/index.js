import {sync} from '../../db/relations';

const Test = () => {
  return (
    <div className="container">
    </div>
  );
};

export default Test;

export async function getServerSideProps() {
  await sync();
  return {props: {data: null}};
}
