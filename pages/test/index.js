import getBitacora from "../../components/Reports/getBitacora";

const Test = () => {

  const get = async () => {
    const bitacora = await getBitacora();
    bitacora.save();
  }

  return (<div className="container">
    <button onClick={get}>Get</button>
    </div>);
};

export default Test;

