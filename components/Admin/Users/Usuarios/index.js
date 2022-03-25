import Button from "../../../Button"
import styles from '../../../../pages/admin/admin.module.css';

const Usuarios = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input className={styles.inputForm} type="text" placeholder="UPP" /></td>
            <td>
              <select className={styles.inputForm} >
                <option>Admin</option>
                <option>Editor</option>
              </select>
            </td>
            <td><Button color="red" title="X" /></td>
            <td><Button color="green" title="Guardar" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Usuarios