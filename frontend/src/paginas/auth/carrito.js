import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../estilos/style_carrito.css';
import CarritoContext from './CarritoContext'; // Verifica la ruta

const Carrito = () => {
  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);

  const calcularTotal = () => {
    return carrito.reduce((total, item) => 
      total + parseFloat(item.precio.replace(/[^0-9.-]+/g, '')), 0
    ).toFixed(2);
  };

  return (
    <div id="root">
      <main className="container my-5">
        <h1 className="mb-4 text-center">Carrito de compras</h1>
        <div className="row">
          <div className="col-lg-8">
            <table className="table table-hover">
              <thead className="bg-success text-white">
                <tr>
                  <th scope="col">Producto</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Total</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((item, index) => (
                  <tr key={index}>
                    <td>{item.producto}</td>
                    <td>1</td> {/* Asumiendo una cantidad de 1 para simplificar */}
                    <td>{item.precio}</td>
                    <td>{item.precio}</td> {/* Total por producto */}
                    <td>
                      <button 
                        className="btn btn-danger btn-sm" 
                        onClick={() => eliminarDelCarrito(index)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <div className="card border-success">
              <div className="card-header bg-success text-white">
                Resumen de compra
              </div>
              <div className="card-body">
                <p><strong>Cantidad:</strong> {carrito.length}</p>
                <p><strong>Total:</strong> ${calcularTotal()}</p>
                <Link to="/pago" className="btn btn-success btn-block">Generar Compra</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Carrito;
