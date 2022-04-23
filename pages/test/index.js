import {useState} from 'react';

const Test = () => {

  const [data, setData] = useState(["a", "b", "c"]);

  return (
    <div className="container">
      {data && data.map((el, key) => <p>{el}</p>)}
      <button>Agregar</button>
      <button>Editar</button>
      <button>Eliminar</button>
    </div>
  );
};

export default Test;

export async function getServerSideProps() {
  return {props: {data: null}};
}
