import React from 'react';
import '../estilos/style_usuarios.css'
const UsuariosAdmin =()=>{
    return(
<div>
  <div>
    <header>
      <div className="navbar">
        <div className="logo">
        <img src="https://i.ibb.co/dbTBHkz/LOGO-JEFE-DE-PRODUCCI-N.jpg" alt="LOGO-JEFE-DE-PRODUCCI-N" class="logo"/>
        </div>
        <div className="small-image">
          <img src="../IMG/pngtree-users-vector-icon-png-image_3725294.jpg" alt="Gerente" />
          <span>Gerente</span>
        </div>
        <ul className="links">
          <li><a href="usuarios_admin.js">Usuarios</a></li>
          <li><a href="productos.js">Productos</a></li>
          <li><a href="ventas_admin.js">Ventas</a></li>
          <li><a href="domicilios_admin.js">Domicilios</a></li>
        </ul>
        <button className="action-btn">Cerrar Sesion</button>
      </div></header>
  </div>
  <h1>Gestion De Usuarios Administrativos</h1>
  <button className="register-button">Registrar Usuario</button>
  <table className="user-table">
    <thead>
      <tr>
        <th>Ref #</th>
        <th>Nombre Completo</th>
        <th>Tipo de Documento</th>
        <th>Documento</th>
        <th>Correo Electrónico</th>
        <th>Dirección</th>
        <th>Rol</th>
        <th>Teléfono</th>
        <th>Acción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>miguel</td>
        <td>Cédula</td>
        <td>123458689</td>
        <td>miguelito123@example.com</td>
        <td>Calle Falsa 123</td>
        <td>Administrador</td>
        <td>3001234567</td>
        <td>
          <button className="edit-button">🖋️</button>
          <button className="delete-button">🗑️</button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Dairon Smith Chapid Moreno</td>
        <td>Cédula</td>
        <td>128676789</td>
        <td>dairon_mor@example.com</td>
        <td>Calle Falsa 123</td>
        <td>Administrador</td>
        <td>3001234567</td>
        <td>
          <button className="edit-button">🖋️</button>
          <button className="delete-button">🗑️</button>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>Samuel</td>
        <td>Cédula</td>
        <td>124566789</td>
        <td>samuelito23_mor@example.com</td>
        <td>Calle Falsa 123</td>
        <td>Administrador</td>
        <td>3001234567</td>
        <td>
          <button className="edit-button">🖋️</button>
          <button className="delete-button">🗑️</button>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>Laura</td>
        <td>Cédula</td>
        <td>12454389</td>
        <td>laura123_@example.com</td>
        <td>Calle Falsa 123</td>
        <td>Administrador</td>
        <td>3641234567</td>
        <td>
          <button className="edit-button">🖋️</button>
          <button className="delete-button">🗑️</button>
        </td>
      </tr>
    </tbody>
  </table>
  <div className="form-container" id="formContainer">
    <button className="close-btn" onclick="closeForm()">×</button>
    <form className="user-form" id="userForm">
      <label htmlFor="fullName">Nombre Completo:</label>
      <input type="text" id="fullName" name="fullName" required />
      <label htmlFor="address">Dirección:</label>
      <input type="text" id="address" name="address" required />
      <label htmlFor="role">Rol:</label>
      <input type="text" id="role" name="role" required />
      <label htmlFor="documentType">Tipo de Documento:</label>
      <input type="text" id="documentType" name="documentType" required />
      <label htmlFor="document">Documento:</label>
      <input type="text" id="document" name="document" required />
      <label htmlFor="phone">Teléfono:</label>
      <input type="tel" id="phone" name="phone" required />
      <label htmlFor="email">Correo Electrónico:</label>
      <input type="email" id="email" name="email" required />
      <button type="submit">Agregar</button>
    </form>
  </div>
</div>

    )
}

export default UsuariosAdmin;