import React from 'react'
import Button from '../../../components/Button'
import { useState } from 'react'
import axios from 'axios'
import styles from './usuario.module.css';

const Usuario = () => {

  const [data, setData] = useState({ name: '', password: '', email: '' })

  const handleName = (e) => {
    setData({ ...data, name: e.target.value })
  }

  const handlePassword = (e) => {
    setData({ ...data, password: e.target.value })
  }

  const handleEmail = (e) => {
    setData({ ...data, email: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/users/', data).then(response => { console.log(response) })
  }

  return (
    <div className="container">
      <div className={`container ${styles.container}`}>
        <form onSubmit={handleSubmit} className={styles.content}>
          <div className={styles.login}>
            <div className={styles.center}>
              <h3>Crear usuario</h3>
              <input autoComplete="off" onChange={handleName} placeholder="Name" type="text" />
              <input autoComplete="off" onChange={handlePassword} placeholder="Password" type="password" />
              <input autoComplete="off" onChange={handleEmail} placeholder="Email" type="email" />
            </div>
            <Button title="enviar" type="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Usuario