require('dotenv')

const ERROR_MESSAGE = [
  { ERROR_MESSAGE: `connect ECONNREFUSED ${process.env.DB_HOST}:3306`, TRANSLATED: "No hay conexion con la base de datos" }
]

export default ERROR_MESSAGE;
