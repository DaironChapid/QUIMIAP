import React from 'react';
import { Link } from 'react-router-dom';

import '../estilos/style_carrito.css';
const Carrito = () => {
    return (
        <div>
            <header className="headerr">
                <div className="logo">
                <img src="https://i.ibb.co/dbTBHkz/LOGO-JEFE-DE-PRODUCCI-N.jpg" alt="LOGO-JEFE-DE-PRODUCCI-N"/>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/nosotros.js">Nosotros</Link></li>
                        <li><Link to="/contacto.js">Contacto</Link></li>
                        <li><Link to="/carrito.js">Carrito de compras</Link></li>
                        <li><Link to="/mis_ventas.js">Mis ventas</Link></li>
                    </ul>
                </nav>
                <Link to="#" className="btn"><button>Cerrar Sesión</button></Link>
            </header>
            <div className="tituloCarrito">
                <h1>Carrito de compras</h1>
            </div>
            <section className="container-section">
                <div className="containerr">
                    <table className="table">
                        <thead className="head">
                            <tr>
                                <th scope="col">Ref #</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Acción</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody id="items"></tbody>
                        <tfoot>
                            <tr id="footer">
                                <th scope="row" colSpan="5">Carrito vacío - ¡comience a comprar!</th>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="row" id="cards"></div>
                </div>
                <div className="container1">
                    <table className="table">
                        <div style={{backgroundColor: 'rgb(202, 202, 198)', padding: 5}}><h4>Generar Compra</h4></div>
                        <thead className="head">
                            <tr>
                                <th>Confirmar:</th>
                            </tr>
                            <tr>
                                <th scope="col">Cantidad</th>
                            </tr>
                            <tr>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody id="confirm-items">
                        </tbody>
                        <tfoot>
                            <tr>
                                <th><a href="domicilio_cliente.js"><button type="button">Generar Compra</button></a></th>
                            </tr>
                        </tfoot>
                        <div className="row" id="confirm-cards"></div>
                    </table>
                </div>
            </section>
            <template id="template-footer">
                <th scope="row" colSpan="2">Total productos</th>
                <td>10</td>
                <td>
                    <button className="btn btn-danger btn-sm" id="vaciar-carrito">
                        vaciar todo
                    </button>
                </td>
                <td className="font-weight-bold">$ <span>5000</span></td>
            </template>
            <template id="template-carrito">
                <tr>
                    <th scope="row">id</th>
                    <td>Café</td>
                    <td>1</td>
                    <td>
                        <button className="btn btn-info btn-sm">
                            agregar
                        </button>
                        <button className="btn btn-danger btn-sm">
                            eliminar
                        </button>
                    </td>
                    <td>$ <span>500</span></td>
                </tr>
            </template>
            <template id="template-card" className="template-card">
                <div className="col-12 mb-2 col-md-4">
                    <div className="card">
                        <img src="" alt="" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Resumen</h5>
                            <p className="card-price"></p>
                            <button className="btn btn-dark">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    );
}

export default Carrito;
