import axios from "axios";
import { useState } from "react";

const useServices = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [path, setPath] = useState("");
  const [coordinator, setCoordinator] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
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
    if (/^[a-zA-Z\-]+$/.test(target.value) || target.value === "") {
      setPath(target.value);
    }
  };

  const handleCoordinator = ({ target }) => {
    if (/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/.test(target.value) || target.value === "") {
      setCoordinator(target.value);
    }
  };

  const handleDescription = ({ target }) => {
    setDescription(target.value);
  };

  const handleImage = ({ target }) => {
    setFile(target.files[0]);
  };

  const handleSubmit = () => {
    if (
      name !== "" ||
      email !== "" ||
      phone !== "" ||
      path !== "" ||
      coordinator !== "" ||
      description !== "" ||
      file !== ""
    ) {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email
        )
      ) {
        if (phone.length >= 10) {
          const form = new FormData();
          form.append("file", file);
          form.append("name", name.toUpperCase());
          form.append("email", email);
          form.append("phone", phone);
          form.append("path", path.toLowerCase());
          form.append("coordinator", coordinator);
          form.append("description", description);
          axios
            .post("/api/admin/services", form, {
              headers: {
                "content-type":
                  "multipart/form-data; boundary=--------------------------999619143332017334035581",
              },
            })
            .then(() => {
              setSuccess("Se ha agregado el servicio correctamente");
              setError("");
            })
            .catch(() => {
              setSuccess("");
              setError("Ha ocurrido un error");
            });
        } else {
          setError("El numero de telefono debe tener 10 digitos");
          setSuccess("");
        }
      } else {
        setError("El email no es valido");
        setSuccess("");
      }
    } else {
      setError("Todos los campos son obligatorios");
      setSuccess("");
    }
  };

  return {
    handleName,
    name,
    handleEmail,
    email,
    handlePhone,
    phone,
    handlePath,
    path,
    handleCoordinator,
    coordinator,
    handleDescription,
    description,
    error,
    success,
    handleImage,
    handleSubmit,
  };
};

export default useServices;
