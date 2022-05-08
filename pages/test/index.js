import { useState, useRef } from "react";
import axios from "axios";

const Test = () => {
  const [file, setFile] = useState(null);

  const handler = ({ target }) => {
    setFile(target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("file", file);
    axios
      .post("/api/upload", form, {
        headers: {
          "content-type":
            "multipart/form-data; boundary=--------------------------999619143332017334035581",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <input type="text" name="text"/>
      <input type="file" name="file" onChange={handler} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Test;

export async function getServerSideProps() {
  return { props: { data: null } };
}
