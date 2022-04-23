import axios from "axios";
import Cookies from "js-cookie";
import {useState} from "react";

const useUsers = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [statusSelected, setStatusSelected] = useState(null);
  const sessionJWT = Cookies.get("sessionJWT");

  const config = {
    headers: {
      Authorization: `Bareer ${sessionJWT}`,
    },
  };

  const handleName = ({target}) => {
    if (
      (/^[a-zA-Z ]+$/.test(target.value) && target.value.length <= 20) ||
      target.value === ""
    ) {
      setName(target.value);
    }
  };

  const handleUsername = ({target}) => {
    if (
      (/^[a-zA-Z]+$/.test(target.value) && target.value.length <= 20) ||
      target.value === ""
    ) {
      setUsername(target.value);
    }
  };

  const handleStatus = (status) => {
    statusSelected === null ? setStatusSelected(status) :
      status === null ? setStatusSelected(null) : setStatusSelected(!statusSelected)
  }

  const handlePassword = ({target}) => {
    setPassword(target.value);
  };

  const handlePasswordCheck = ({target}) => {
    setPasswordCheck(target.value);
  };

  const handleEmail = ({target}) => {
    if (/ /g.test(target.value)) {
      setError("El correo electronico no puede contener espacios");
      setSuccess("");
    } else {
      setError("");
      setEmail(target.value.trim());
    }
  };

  const handleUpdateUser = ({id, status}, callback) => {
    let errors = false;
    if (
      email !== "" ||
      password !== "" ||
      passwordCheck !== "" ||
      name !== "" ||
      username !== "" ||
      statusSelected !== status
    ) {
      if (email !== "") {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          setError("El correo electronico no es valido");
          setSuccess("");
          errors = true;
        }
      }
      if (password !== "" && passwordCheck !== "") {
        if (password !== passwordCheck) {
          setError("Las contraseñas no coinciden");
          setSuccess("");
          errors = true;
        } else {
          if (
            !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
              password
            )
          ) {
            setError(
              "La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula y un numero"
            );
            setSuccess("");
            errors = true;
          }
        }
      }
      if (!errors) {
        axios
          .put(`/api/users/${id}`, {email, password, name, status: statusSelected}, config)
          .then((res) => {
            setSuccess("Usuario actualizado");
            setError("");
            setEmail("");
            setPassword("");
            setPasswordCheck("");
            setName("");
            callback();
          })
          .catch((e) => {
            setError("Error al actualizar el usuario");
            setSuccess("");
          });
      }
    } else {
      setError("No hay datos para actualizar");
      setSuccess("");
    }
  };

  const handleCreateUser = (callback) => {
    if (
      name.length > 0 &&
      username.length > 0 &&
      password.length > 0 &&
      email.length > 0
    ) {
      if (
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password)
      ) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          if (password === passwordCheck) {
            const data = {
              name,
              password,
              username,
              email,
            };
            axios
              .post("/api/users/", data, config)
              .then((response) => {
                setSuccess("Usuario creado con exito");
                setError("");
                setName("");
                setUsername("");
                setPassword("");
                setPasswordCheck("");
                setEmail("");
                callback();
              })
              .catch((res) => {
                setError(res.response.data.message);
                setSuccess("");
              });
          } else {
            setError("Las contraseñas no coinciden");
            setSuccess("");
          }
        } else {
          setError("El correo electronico no es valido");
          setSuccess("");
        }
      } else {
        setError(
          "La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula y un numero"
        );
        setSuccess("");
      }
    } else {
      setError("Todos los campos son obligatorios");
      setSuccess("");
    }
  };

  return {
    handleCreateUser,
    handleName,
    handleUsername,
    handlePassword,
    handlePasswordCheck,
    handleEmail,
    error,
    success,
    name,
    username,
    password,
    passwordCheck,
    email,
    handleUpdateUser,
    handleStatus,
    statusSelected,
  };
};

export default useUsers;
