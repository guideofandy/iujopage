import axios from "axios";
import { useState } from "react";

const useServices = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [path, setPath] = useState("");
  const [coordinator, setCoordinator] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  const handleName = ({ target }) => {
    if (/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/.test(target.value) || target.value === "") {
      setName(target.value);
    }
  };

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePhone = ({ target }) => {
    if (/^[0-9]*$/.test(target.value) || target.value === "") {
      setPhone(target.value);
    }
  };

  const handlePath = ({ target }) => {
    if (/^[a-zA-Z]+$/.test(target.value) || target.value === "") {
      setPath(target.value);
    }
  };

  const setCoordinator = ({ target }) => {
    if (/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/.test(target.value) || target.value === "") {
      setCoordinator(target.value);
    }
  };

  const handleDescription = ({ target }) => {
    setDescription(target.value);
  };


  const handleSubmit = ({callback}) => {
    if(name !== "" || email !== "" || phone !== "" || path !== "" || coordinator !== "" || description !== "" || image !== ""){
      const data = {
        name.toUpperCase(),
        email,
        phone,
        path,
        coordinator,
        description,
        image
      };
      axios.post('/admin/services/', data)
        .then(() => {
          setSuccess("Se ha agregado el servicio correctamente");
          setError("");
          callback();
          setName("");
          setEmail("");
          setPath("");
          setPhone("");
          setCoordinator("");
          setDescription("");
          setImage("");
        })
        .catch(() => {
          setSuccess("");
          setError("Ha ocurrido un error");
        })
    }
  }

  return {
    handleName,
    name,
    handleEmail,
    email,
    handlePhone,
    phone,
    handlePath,
    path,
    setCoordinator,
    coordinator,
    handleDescription,
    description,
    error,
    success,
  };
};

export default useServices;
