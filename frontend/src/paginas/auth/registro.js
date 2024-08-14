import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/style_register.css';

const Registro = () =>{

  const [formData, setFormData] = useState({
    id: '',
    nombres: '',
    apellidos:'',
    telefono: '',
    correo_electronico: '',
    tipo_doc:'',
    num_doc: '',
    contrasena: '',
    genero:'',
    rol: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const enviar = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/Users", formData);
      alert("Éxito:", response.data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  }

    return(
    <div>
    {/* Header */}
    <header className="bg-light border-bottom sticky-header">
        <div className="container d-flex justify-content-between align-items-center py-3">
        {/* Logo */}
        <div className="header-logo-container">
            <img src="LOGO_JEFE_DE_PRODUCCIÓN-Photoroom.png" alt="Logo" className="header-logo me-4" />
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
                <Link to="#">Quiero crear mi cuenta</Link>
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
    <section className="register-section container mt-5">
        <h2 className="text-center mb-4">Crear mi cuenta</h2>
        <form onSubmit={enviar}>
        <div className="row mb-3">
            <div className="col-md-6">
            <label htmlFor="tipoDocumento" className="form-label">Tipo de documento</label>
            <select id="tipoDocumento" className="form-select" value={formData.tipo_doc} onChange={handleChange} required name="tipo_doc">
                <option selected>Selecciona una opcion</option>
                <option>Cedula de Ciudadania</option>
                <option >Tarjeta de identidad</option>
                <option >Cédula de extranjería</option>
                <option >Pasaporte</option>
            </select>
            </div>
            <div className="col-md-6">
            <label htmlFor="numeroIdentificacion" className="form-label" name="num_">Nº de identificación</label>
            <input type="text" className="form-control" id="numeroIdentificacion" placeholder="Ingresa tu identificación" value={formData.num_doc} onChange={handleChange} />
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-md-6">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" value={formData.nombres} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <input type="text" className="form-control" id="apellido" placeholder="Ingresa tu apellido"  value={formData.apellidos} onChange={handleChange} required />
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-md-6">
            <label htmlFor="correoElectronico" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="correoElectronico" placeholder="Ingresa tu correo electrónico" value={formData.correo_electronico} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
            <label htmlFor="genero" className="form-label">Género</label>
            <select id="genero" className="form-select">
                <option selected>Selecciona tu género</option>
                <option value={formData.genero} onChange={handleChange}>Masculino</option>
                <option value={formData.genero} onChange={handleChange}>Femenino</option>
            </select>
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-md-6">
            <label htmlFor="celular" className="form-label">Celular</label>
            <div className="input-group">
                <span className="input-group-text">+57</span>
                <input type="tel" className="form-control" id="celular" placeholder="Ingresa tu celular" value={formData.telefono} onChange={handleChange} required />
            </div>
            </div>
            <div className="col-md-6 password">
            <label htmlFor="contrasena" className="form-label">Contraseña</label>
            <div className="input-container">
                <input type="password" className="form-control" id="contrasena" placeholder="Ingresa tu contraseña" value={formData.contrasena} onChange={handleChange} required />
                <button type="button" className="btn-toggle-visibility" id="togglePassword">
                <i className="bi bi-eye" />
                </button>
            </div>
            </div>
            <div className="row mb-3">
            <div className="col-md-6">
                <label htmlFor="rolUsuario" className="form-label">Rol</label>
                <select id="rolUsuario" className="form-select" disabled>
                <option selected value={formData.rol} onChange={handleChange} >Cliente</option>
                <option>Administrador</option>
                <option>Jefe de producción</option>
                </select>
            </div>
            </div>
            <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="terminos" />
            <label className="form-check-label" htmlFor="terminos">
                Autorizo el Tratamiento de datos. Acepto los Términos y Condiciones
            </label>
            </div>
            <button type="submit" className="btn btn-register w-100">
            <i className="bi bi-person-plus-fill" /> Guardar
            </button>
        </div></form></section>
    </div>
    )
}

export default Registro;