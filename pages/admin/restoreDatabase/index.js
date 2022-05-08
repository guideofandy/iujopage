import {sync} from "../../../db/relations";

const RestoreDatabase = () => {
  return (
    <div className="container">
      <h1>Restored</h1>
    </div>
  );
};

export default RestoreDatabase;

export async function getServerSideProps() {
  await sync();
  return { props: { data: [] } };
}
