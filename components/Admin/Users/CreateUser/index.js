import Button from '../../../Button'
import { useState } from 'react'
import axios from 'axios'
import styles from '../../../../pages/admin/admin.module.css';
import { useRouter } from 'next/router';

const CreateUser = () => {

  const router = useRouter();

  const [data, setData] = useState({ name: '', password: '', email: '' })

  const handleName = (e) => {
    setData({ ...data, name: e.target.value })
  }
  const handleUsername = (e) => {
    setData({ ...data, username: e.target.value })
  }

  const handlePassword = (e) => {
    setData({ ...data, password: e.target.value })
  }

  const handleEmail = (e) => {
    setData({ ...data, email: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/users/', data).then((response) => console.log(response)).catch();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.leftPosition}>
      <h3>Crear usuario</h3>
      <div className={styles.lineInput}>
        <input className={styles.inputForm} onChange={handleName} placeholder="Nombre" type="text" />
      </div>
      <div className={styles.lineInput}>
        <input className={styles.inputForm} onChange={handleUsername} placeholder="Nombre de usuario" type="text" />
      </div>
      <div className={styles.lineInput}>
        <input className={styles.inputForm} onChange={handleEmail} placeholder="Correo" type="email" />
      </div>
      <div className={styles.lineInput}>
        <input className={styles.inputForm} placeholder="Constraseña" type="password" />
      </div>
      <div className={styles.lineInput} >
        <input className={styles.inputForm} placeholder="Repetir Contraseña" type="password" />
      </div>
      <Button color='black' title="Registrar Editor" type="submit" />
    </form>
  )
}

export default CreateUser