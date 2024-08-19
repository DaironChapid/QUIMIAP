import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../estilos/style_carrito.css';

const Carrito = () => {
    // Estado para los productos
    const [productos, setProductos] = useState([]);
    
    // Función para obtener productos de la API
    const fetchProductos = async () => {
        try {
            const response = await axios.get('https://api.example.com/productos'); // Reemplaza con la URL de tu API
            setProductos(response.data);
        } catch (error) {
            console.error('Error al obtener productos:', error);
        }
    };

    // Ejecutar la función fetchProductos al montar el componente
    useEffect(() => {
        fetchProductos();
    }, []);

    return (
        <div id="root">
            <header className="bg-light border-bottom sticky-header">
                <div className="container d-flex justify-content-between align-items-center py-3">
                    {/* Logo */}
                    <div className="header-logo-container">
                        <img src="/img/LOGO_JEFE_DE_PRODUCCIÓN-Photoroom.png" alt="Logo" className="header-logo me-4" />
                    </div>
                    {/* Botón de categorías (tres rayitas) */}
                    <div className="d-flex align-items-center">
                        <button className="btn btn-outline-secondary me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCategorias" aria-controls="offcanvasCategorias">
                            <i className="bi bi-list" />
                        </button>
                        <span>Categorías</span>
                    </div>
                    {/* Barra de búsqueda centrada */}
                    <div className="mx-3 flex-grow-1">
                        <form className="d-flex justify-content-center">
                            <input className="form-control search-bar" type="search" placeholder="Buscar productos" aria-label="Buscar" />
                            <button className="btn btn-outline-success search-button ms-2" type="submit">
                                <i className="bi bi-search" />
                            </button>
                        </form>
                    </div>
                    {/* Botón de Iniciar Sesión con menú desplegable */}
                    <div className="dropdown">
                        <Link to="#" className="btn btn-outline-success dropdown-toggle" id="loginDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-person" /> Iniciar sesión
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-login" aria-labelledby="loginDropdown">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                                    <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" />
                                </div>
                                <div className="mb-3">
                                    <Link to="#">¿Olvidaste tu contraseña?</Link>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Ingresar</button>
                            </form>
                            <div className="text-center mt-3">
                                <Link to="/registro">Quiero crear mi cuenta</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="offcanvas offcanvas-start offcanvas-categorias" tabIndex={-1} id="offcanvasCategorias" aria-labelledby="offcanvasCategoriasLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasCategoriasLabel">Categorías</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link to="#" className="d-flex justify-content-between align-items-center text-decoration-none text-dark" data-bs-toggle="collapse" data-bs-target="#ofertasCollapse" aria-expanded="false" aria-controls="ofertasCollapse">
                                Ofertas
                                <i className="bi bi-chevron-down" />
                            </Link>
                            <div className="collapse" id="ofertasCollapse">
                                <ul className="list-group">
                                    <li className="list-group-item"><Link to="#" className="text-decoration-none text-dark">Oferta 1</Link></li>
                                    <li className="list-group-item"><Link to="#" className="text-decoration-none text-dark">Oferta 2</Link></li>
                                </ul>
                            </div>
                        </li>
                        {/* Agrega más categorías aquí */}
                    </ul>
                </div>
            </div>

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
                                {productos.length > 0 ? (
                                    productos.map(producto => (
                                        <tr key={producto.id}>
                                            <td>
                                                <img src={producto.imagenUrl} alt={producto.nombre} className="img-thumbnail" />
                                                {producto.nombre}
                                            </td>
                                            <td>
                                                <input type="number" className="form-control" defaultValue={producto.cantidad} />
                                            </td>
                                            <td>${producto.precio.toFixed(2)}</td>
                                            <td>${(producto.precio * producto.cantidad).toFixed(2)}</td>
                                            <td>
                                                <button className="btn btn-danger btn-sm">
                                                    <i className="bi bi-trash" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center">No hay productos en el carrito</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-4">
                        <div className="card border-success">
                            <div className="card-header bg-success text-white">
                                Resumen de compra
                            </div>
                            <div className="card-body">
                                <p><strong>Cantidad:</strong> {productos.length}</p>
                                <p><strong>Total:</strong> ${productos.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0).toFixed(2)}</p>
                                <Link to="/pago.js" className="btn btn-success btn-block">Generar Compra</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-success text-white pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h5>APP QUIMIAP</h5>
                            <Link to="#"><img src="https://via.placeholder.com/150x50/000000/ffffff?text=App+Store" alt="App Store" className="img-fluid mb-2" /></Link>
                            <br />
                            <Link to="#"><img src="https://via.placeholder.com/150x50/000000/ffffff?text=Google+Play" alt="Google Play" className="img-fluid" /></Link>
                        </div>
                        <div className="col-md-3">
                            <h5>Contáctanos</h5>
                            <p>Desde celular a nivel nacional</p>
                            <p><strong>601 486 5000</strong></p>
                            <p>Línea nacional de ventas</p>
                            <p><strong>01 8000 910545</strong></p>
                            <div className="d-flex justify-content-start">
                                <Link to="#" className="me-2"><i className="bi bi-instagram text-white fs-3" /></Link>
                                <Link to="#" className="me-2"><i className="bi bi-facebook text-white fs-3" /></Link>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <h5>Nosotros</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/nosotros.js" className="text-white text-decoration-none">Quiénes somos</Link></li>
                                <li><Link to="#" className="text-white text-decoration-none">Nuestra Historia</Link></li>
                                <li><Link to="#" className="text-white text-decoration-none">Trabaja con nosotros</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h5>Legales</h5>
                            <ul className="list-unstyled">
                                <li><Link to="#" className="text-white text-decoration-none">Aviso de privacidad</Link></li>
                                <li><Link to="#" className="text-white text-decoration-none">Políticas</Link></li>
                                <li><Link to="#" className="text-white text-decoration-none">Términos y condiciones</Link></li>
                                <li><Link to="#" className="text-white text-decoration-none">Reversión de pago</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <p>© QUIMIAP S.A.S. Todos los derechos reservados. NIT 800.149.695-1</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Carrito;
