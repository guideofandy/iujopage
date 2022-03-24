import Button from '../../../components/Button'

const Usuarios = () => {
  return (
    <div className="container">
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
            <td><input type="text" placeholder="UPP" /></td>
            <td>
              <select>
                <option>Admin</option>
                <option>Editor</option>
              </select>
            </td>
            <td><Button color="red" title="X"/></td>
            <td><Button color="green" title="Guardar"/></td>
          </tr>
          <tr>
            <td><input type="text" placeholder="Caja" /></td>
            <td>
              <select>
                <option>Admin</option>
                <option>Editor</option>
              </select>
            </td>
            <td><Button color="red" title="X"/></td>
            <td><Button color="green" title="Guardar"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Usuarios