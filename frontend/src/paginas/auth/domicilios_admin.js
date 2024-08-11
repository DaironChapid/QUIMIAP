import React from 'react';
const DomicilioAdmin = () =>{
    return(
<div className="container">
  <header className="py-3 mb-4 border-bottom">
    <div className="d-flex align-items-center">
    <img src="https://i.ibb.co/dbTBHkz/LOGO-JEFE-DE-PRODUCCI-N.jpg" alt="LOGO-JEFE-DE-PRODUCCI-N" class="logo"/>
    </div>
    <ul className="nav me-auto mb-2 mb-lg-0">
      <li className="nav-item"><a href="usuarios_admin.js" className="nav-link px-2">Usuarios</a></li>
      <li className="nav-item"><a href="productos.js" className="nav-link px-2">Productos</a></li>
      <li className="nav-item"><a href="ventas_admin.js" className="nav-link px-2">Ventas</a></li>
      <li className="nav-item"><a href="domicilios_admin.js" className="nav-link px-2">Domicilios</a></li>
    </ul>
    <div>
      {/* Botón para cerrar sesion */}
      <button type="button" className="btn btn-primary btn-custom" data-bs-toggle="modal" data-bs-target="#loginModal">
        Cerrar sesión
      </button>
    </div></header>
  <section className="container mt-5">
    <h2>Consulta de domicilios pendientes</h2>
    <br />
    {/* Tabla de productos */}
    <table className="table table-striped mt-4">
      <thead>
        <tr>
          <th>ID domicilio</th>
          <th>Cliente</th>
          <th>Contacto</th>
          <th>Dirección</th>
          <th>Fecha de entrega</th>
          <th>Producto confirmado</th>
          <th>cantidad</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Miguel Ortiz</td>
          <td>3134685626</td>
          <td>cra 99#157-43</td>
          <td>20-08-2024</td>
          <td>Cloro</td>
          <td>3</td>
          <td>
            <button type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editarVentaModal">Confirmar</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Samuel Ardila</td>
          <td>31222467</td>
          <td>cra 123a34-43</td>
          <td>15-08-2024</td>
          <td>Detergente liquido</td>
          <td>2</td>
          <td>
            <button type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editarVentaModal">Confirmar</button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Camilo Perez</td>
          <td>322456534</td>
          <td>cra 123#43-54</td>
          <td>28-08-2024</td>
          <td>Desengrasante</td>
          <td>2</td>
          <td>
            <button type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editarVentaModal">Confirmar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</div>


    )
}

export default DomicilioAdmin;