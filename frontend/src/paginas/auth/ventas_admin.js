import React from 'react';
const VentasAdmin = () =>{
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
    <h2>Consulta de Ventas</h2>
    <br />
    {/* Botón para abrir el modal */}
    <button type="button" className="btn btn-success mb-3">Generar Reporte</button>
    {/* Tabla de productos */}
    <table className="table table-striped mt-4">
      <thead>
        <tr>
          <th>ID Venta</th>
          <th>Precio Unitario</th>
          <th>Cantidad</th>
          <th>Método de Pago</th>
          <th>ID Cliente</th>
          <th>ID Producto</th>
          <th>Fecha de Venta</th>
          <th>Precio Total</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>10000</td>
          <td>2</td>
          <td>Efectivo</td>
          <td>101</td>
          <td>201</td>
          <td>2024-07-31 12:30:00</td>
          <td>20000</td>
          <td>
            <button type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editarVentaModal">Editar</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>20000</td>
          <td>1</td>
          <td>Tarjeta</td>
          <td>102</td>
          <td>202</td>
          <td>2024-07-31 13:00:00</td>
          <td>20000</td>
          <td>
            <button type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editarVentaModal">Editar</button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>15000</td>
          <td>3</td>
          <td>Transferencia</td>
          <td>103</td>
          <td>203</td>
          <td>2024-07-31 14:00:00</td>
          <td>45000</td>
          <td>
            <button type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editarVentaModal">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  {/* Modal para editar venta*/}
  <div className="modal fade" id="editarVentaModal" tabIndex={-1} aria-labelledby="editarVentaModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="editarVentaModalLabel">Editar Venta</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="editIdVenta" className="form-label">ID Venta</label>
              <input type="text" className="form-control" id="editIdVenta" />
            </div>
            <div className="mb-3">
              <label htmlFor="editPrecioUnitario" className="form-label">Precio Unitario</label>
              <input type="number" className="form-control" id="editPrecioUnitario" required />
            </div>
            <div className="mb-3">
              <label htmlFor="editCantidad" className="form-label">Cantidad</label>
              <input type="number" className="form-control" id="editCantidad" required />
            </div>
            <div className="mb-3">
              <label htmlFor="editMetodoPago" className="form-label">Método de Pago</label>
              <select className="form-select" id="editMetodoPago" required>
                <option value="efectivo">Efectivo</option>
                <option value="tarjeta">Tarjeta</option>
                <option value="transferencia">Transferencia</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="editIdCliente" className="form-label">ID Cliente</label>
              <input type="number" className="form-control" id="editIdCliente" required />
            </div>
            <div className="mb-3">
              <label htmlFor="editIdProducto" className="form-label">ID Producto</label>
              <input type="number" className="form-control" id="editIdProducto" required />
            </div>
            <div className="mb-3">
              <label htmlFor="editFechaVenta" className="form-label">Fecha de Venta</label>
              <input type="datetime-local" className="form-control" id="editFechaVenta" required />
            </div>
            <div className="mb-3">
              <label htmlFor="editPrecioTotal" className="form-label">Precio Total</label>
              <input type="number" className="form-control" id="editPrecioTotal" required />
            </div>
            <button type="submit" className="btn btn-success">Guardar Cambios</button>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default VentasAdmin;