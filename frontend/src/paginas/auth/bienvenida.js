import React, { useContext }from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/style_bienvenida.css';
import axios from 'axios'; // Asegúrate de tener axios instalado
import CarritoContext from './CarritoContext'; // Asegúrate de que la ruta sea correcta


// const agregarAlcarrito = async (producto) => {
//   try {
//     await axios.post('http://localhost:4001/Carrito', producto, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     alert('Producto agregado al carrito');
//   } catch (error) {
//     console.error('Error al agregar el producto al carrito:', error);
//     alert('Error al agregar el producto');
//   }
// };

const Producto = ({ producto, precio }) => {
  const { agregarAlCarrito } = useContext(CarritoContext);

  const agregarProductoAlCarrito = async (producto) => {
    try {
      await axios.post('http://localhost:4001/Carrito', producto, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      agregarAlCarrito(producto);  // Asegúrate de llamar a la función correcta
      alert('Producto agregado al carrito');
    } catch (error) {
      console.error('Error al agregar el producto al carrito:', error);
      alert('Error al agregar el producto');
    }
  };

  return (
<div>
  <header className="bg-light border-bottom sticky-header">
    <div className="container d-flex justify-content-between align-items-center py-3">
     
      {/* Ícono de carrito de compras */}
      <Link to="/carrito.js" className="text-success ms-3">
        <i className="bi bi-cart3 fs-4" />
      </Link>
    </div>
  </header>
  
  
  {/* Productos destacados */}
  <section className="products-section">
        <div className="container">
          <h2 className="text-center mb-4">Productos Destacados</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="card product-card">
                <img src="/img/products-images/producto1.png" className="card-img-top" alt="Suavizante Textil" />
                <div className="card-body">
                  <h5 className="card-title">Suavizante Textil 1L</h5>
                  <p className="card-text"><strong>$20.000</strong></p>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => agregarProductoAlCarrito({ producto: 'Suavizante Textil 1L', precio: '$20.000' })}
                  >
                    <i className="bi bi-cart" /> Agregar
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card product-card">
                <img src="/img/products-images/producto2.jpg" className="card-img-top" alt="Cera Polimérica" />
                <div className="card-body">
                  <h5 className="card-title">Cera Polimérica 750ML</h5>
                  <p className="card-text"><strong>$17.000</strong></p>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => agregarProductoAlCarrito({ producto: 'Cera Polimérica 750ML', precio: '$17.000' })}
                  >
                    <i className="bi bi-cart" /> Agregar
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card product-card">
                <img src="/img/products-images/producto3.jpg" className="card-img-top" alt="Detergente Líquido" />
                <div className="card-body">
                  <h5 className="card-title">Detergente Líquido 1L</h5>
                  <p className="card-text"><strong>$20.000</strong></p>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => agregarProductoAlCarrito({ producto: 'Detergente Líquido 1L', precio: '$20.000' })}
                  >
                    <i className="bi bi-cart" /> Agregar
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card product-card">
                <img src="/img/products-images/ambientador1.jpg" className="card-img-top" alt="Producto 4" />
                <div className="card-body">
                  <h5 className="card-title">Multiusos Ambientador</h5>
                  <p className="card-text"><strong>$8.99</strong></p>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() =>agregarProductoAlCarrito({ producto: 'Multiusos Ambientador', precio: '$8.99' })}
                  >
                    <i className="bi bi-cart" /> Agregar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  {/* Segunda sección de productos */}
  <section className="products-section">
    <div className="container">
      <div className="row">

        <div className="col-md-3">
          <div className="card product-card">
            <img src="/img/products-images/tripleaccion.jpg" className="card-img-top" alt="Producto 1" />
            <div className="card-body">
              <h5 className="card-title">Triple Acción</h5>
              <p className="card-text"><strong>$14.999</strong></p>
              <button className="btn btn-outline-primary"
              onClick={() => agregarProductoAlCarrito({ producto: 'Triple Accion', precio: '$14.999' })}>
              <i className="bi bi-cart" /> Agregar
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card product-card">
            <img src="/img/products-images/producto6.jpg" className="card-img-top" alt="Producto 2" />
            <div className="card-body">
              <h5 className="card-title">Desengrasante Industrial 1L</h5>
              <p className="card-text"><strong>$11.500</strong></p>
              <button  className="btn btn-outline-primary" 
              onClick={() => agregarProductoAlCarrito({ producto: 'Desengrasante Industrial', precio: '$11.500' })}>
                <i className="bi bi-cart" /> Agregar
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card product-card">
            <img src="/img/products-images/lavaloza.jpg" className="card-img-top" alt="Producto 3" />
            <div className="card-body">
              <h5 className="card-title">Lavaloza 1L</h5>
              <p className="card-text"><strong>$13.500</strong></p>
              <button className="btn btn-outline-primary"
               onClick={() => agregarProductoAlCarrito({ producto: 'Lavaloza 1L', precio: '$13.500' })}>
                <i className="bi bi-cart" /> Agregar
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card product-card">
            <img src="/img/products-images/limpiapisos.jpg" className="card-img-top" alt="Producto 4" />
            <div className="card-body">
              <h5 className="card-title">Limpiador de pisos y juntas</h5>
              <p className="card-text"><strong>$10.000</strong></p>
              <button className="btn btn-outline-primary"
               onClick={() => agregarProductoAlCarrito({ producto: 'Limpiador de pisos y juntas', precio: '$10.000' })}>
                <i className="bi bi-cart" /> Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>

  )
}

export default Producto;