import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/style_bienvenida.css';

const Bienvenida = () =>{
  return(
<div>
  <header className="bg-light border-bottom sticky-header">
    <div className="container d-flex justify-content-between align-items-center py-3">
      {/* Logo */}
      <div className="header-logo-container">
      <img src="/img/LOGO_JEFE_DE_PRODUCCIÓN-Photoroom.png" alt="Logaa" className="header-logo me-4" />
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
            <Link to="registro.js">Quiero crear mi cuenta</Link>
          </div>
        </div>
      </div>
      {/* Ícono de carrito de compras */}
      <Link to="#" className="text-success ms-3">
        <i className="bi bi-cart3 fs-4" />
      </Link>
    </div>
  </header>
  {/* Sidebar interactivo */}
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
        <li className="list-group-item">
          <Link to="#" className="d-flex justify-content-between align-items-center text-decoration-none text-dark" data-bs-toggle="collapse" data-bs-target="#ropaCollapse" aria-expanded="false" aria-controls="ropaCollapse">
            Cuidado de Ropa
            <i className="bi bi-chevron-down" />
          </Link>
          <div className="collapse" id="ropaCollapse">
            <ul className="list-group">
              <li className="list-group-item"><Link to="#" className="text-decoration-none text-dark">Detergentes</Link></li>
              <li className="list-group-item"><Link to="#" className="text-decoration-none text-dark">Suavizantes</Link></li>
              <li className="list-group-item"><Link to="#" className="text-decoration-none text-dark">Blanqueadores</Link></li>
            </ul>
          </div>
        </li>
        <li className="list-group-item">
          <Link to="#" className="d-flex justify-content-between align-items-center text-decoration-none text-dark" data-bs-toggle="collapse" data-bs-target="#hogarCollapse" aria-expanded="false" aria-controls="hogarCollapse">
            Hogar y Limpieza
            <i className="bi bi-chevron-down" />
          </Link>
          <div className="collapse" id="hogarCollapse">
            <ul className="list-group">
              <li className="list-group-item"><Link to="#" className="text-decoration-none text-dark">Limpiadores Multiusos</Link></li>
              <li className="list-group-item"><Link to="#" className="text-decoration-none text-dark">Desinfectantes</Link></li>
              <li className="list-group-item"><Link to="#" className="text-decoration-none text-dark">Ambientadores</Link></li>
            </ul>
          </div>
        </li>
        <li className="list-group-item">
          <Link to="#" className="d-flex justify-content-between align-items-center text-decoration-none text-dark" data-bs-toggle="collapse" data-bs-target="#desinfectantesCollapse" aria-expanded="false" aria-controls="desinfectantesCollapse">
            Desinfectantes
            <i className="bi bi-chevron-down" />
          </Link>
          <div className="collapse" id="desinfectantesCollapse">
            <ul className="list-group">
              <li className="list-group-item"><Link to="#" className="text-decoration-none text-dark">Desinfectante 1</Link></li>
              <li className="list-group-item"><Link to="#" className="text-decoration-none text-dark">Desinfectante 2</Link></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
  {/* Hero Section */}
  <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/img/carrusel-images/supersale.jpg" className="d-block w-100" alt="Oferta 1" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Hasta 30% de Descuento en Productos de Cuidado de ropa</h5>
          <p>Exclusivo para compras en app, web y domicilios.</p>
          <Link to="#" className="btn btn-danger">Compra Aquí</Link>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/img/carrusel-images/pngtree-sale-promotion-50-off-image_914144.png" className="d-block w-100" alt="Oferta 2" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Hasta 50% de Descuento en Hogar y Limpieza</h5>
          <p>Oferta válida hasta fin de mes.</p>
          <Link to="#" className="btn btn-danger">Compra Aquí</Link>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/* Categorías */}
  <section className="categories-section">
    <div className="container">
      <div className="row text-center">
        <div className="col-md-3">
          <Link to="#" className="category-link">
            <div className="category-icon">
              <i className="bi bi-person-standing-dress" />
            </div>
            <div className="category-text">
              Cuidado de la Ropa
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="#" className="category-link">
            <div className="category-icon">
              <i className="bi bi-house-door" />
            </div>
            <div className="category-text">
              Hogar y Limpieza
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="#" className="category-link">
            <div className="category-icon">
              <i className="bi bi-square" />
            </div>
            <div className="category-text">
              Cuidado de Pisos
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="#" className="category-link">
            <div className="category-icon">
              <i className="bi bi-shield-check" />
            </div>
            <div className="category-text">
              Desinfectantes
            </div>
          </Link>
        </div>
      </div>
    </div>
  </section>
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
              <Link to="#" className="btn btn-outline-primary">
                <i className="bi bi-cart" /> Agregar
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card product-card">
            <img src="/img/products-images/producto2.jpg" className="card-img-top" alt="Cera Polimérica" />
            <div className="card-body">
              <h5 className="card-title">Cera Polimérica 750ML</h5>
              <p className="card-text"><strong>$17.000</strong></p>
              <Link to="#" className="btn btn-outline-primary">
                <i className="bi bi-cart" /> Agregar
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card product-card">
            <img src="/img/products-images/producto3.jpg" className="card-img-top" alt="Detergente Líquido" />
            <div className="card-body">
              <h5 className="card-title">Detergente Líquido 1L</h5>
              <p className="card-text"><strong>$20.000</strong></p>
              <Link to="#" className="btn btn-outline-primary">
                <i className="bi bi-cart" /> Agregar
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card product-card">
            <img src="/img/products-images/ambientador1.jpg" className="card-img-top" alt="Producto 4" />
            <div className="card-body">
              <h5 className="card-title">Multiusos Ambientador </h5>
              <p className="card-text"><strong>$8.99</strong></p>
              <Link to="#" className="btn btn-outline-primary">
                <i className="bi bi-cart" /> Agregar
              </Link>
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
              <Link to="#" className="btn btn-outline-primary">
                <i className="bi bi-cart" /> Agregar
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card product-card">
            <img src="/img/products-images/producto6.jpg" className="card-img-top" alt="Producto 2" />
            <div className="card-body">
              <h5 className="card-title">Desengrasante Industrial 1L</h5>
              <p className="card-text"><strong>$11.500</strong></p>
              <Link to="#" className="btn btn-outline-primary">
                <i className="bi bi-cart" /> Agregar
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card product-card">
            <img src="/img/products-images/lavaloza.jpg" className="card-img-top" alt="Producto 3" />
            <div className="card-body">
              <h5 className="card-title">Lavaloza 1L</h5>
              <p className="card-text"><strong>$13.500</strong></p>
              <Link to="#" className="btn btn-outline-primary">
                <i className="bi bi-cart" /> Agregar
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card product-card">
            <img src="/img/products-images/limpiapisos.jpg" className="card-img-top" alt="Producto 4" />
            <div className="card-body">
              <h5 className="card-title">Limpiador de pisos y juntas</h5>
              <p className="card-text"><strong>$10.000</strong></p>
              <Link to="#" className="btn btn-outline-primary">
                <i className="bi bi-cart" /> Agregar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="bg-success text-white pt-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h5>APP QUIMIAP </h5>
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
            <li><Link to="nosotros.js" className="text-white text-decoration-none">Quiénes somos</Link></li>
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
        <p>©      QUIMIAP S.A.S. Todos los derechos reservados. NIT 800.149.695-1</p>
      </div>
    </div>
  </footer>
</div>

  )
}

export default Bienvenida;