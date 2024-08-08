import React from 'react';
//import '../estilos/domicilio_cliente.css';
const DomicilioCliente = () =>{
    return(
    <div>
    <header className="header">
        <div className="logo">
        <img src="https://i.ibb.co/dbTBHkz/LOGO-JEFE-DE-PRODUCCI-N.jpg" alt="LOGO-JEFE-DE-PRODUCCI-N"/>
        </div>
        <nav>
        <ul className="nav-links">
            <li><a href="/" className="inicio">Inicio</a></li>
            <li><a href="carrito.js">Carrito</a></li>
        </ul>
        </nav>
        <div className="container">
        <input type="text" placeholder="Buscar Producto" className="buscar" />
        <div className="btn2">
            <i className="fa fa-search" aria-hidden="true" />
        </div>
        </div>
        <div className="imagen_usuario">
        <button><img src="../img/usuario.png" alt="Logo usuario" /><a href className="usuario">Laura</a></button>
        </div>
        <a href className="btn"><button>Cerrar Sesión</button></a>
    </header>
    <div className="form-estilo">
        <div className="estilo_form">
        <form action method="post">
            <div className="datos_domi">
            <h1>Datos Domicilio</h1>
            </div>
            <div className="forma_contenedor">
            <div className="forma_grupo">
                <label htmlFor>Nombre del cliente</label>
                <input type="text" placeholder="Nombre Completo" id="nombre" required />
            </div>
            <div className="forma_grupo">
                <label htmlFor>Contacto</label>
                <input type="number" placeholder="Contacto" id="contacto" required />
            </div>
            <div className="forma_grupo">
                <label htmlFor>Dirección</label>
                <input type="text" placeholder="Dirección" id="direccion" required />
            </div>
            <div className="forma_grupo">
                <label htmlFor>Fecha de entrega</label>
                <input type="date" name="fecha" id="fecha" required />
            </div>
            <div className="forma_grupo">
                <label htmlFor>Mensaje</label><br />
                <textarea id="mensaje" name="mensaje" rows={4} required defaultValue={""} />
            </div>
            <div className="boton">
                <button type="submit">Confirmar domicilio</button>
            </div>
            </div>
        </form>
        </div>
    </div>
    <footer className="footer">
        <div className="logo">
        <img src="https://i.ibb.co/dbTBHkz/LOGO-JEFE-DE-PRODUCCI-N.jpg" alt="LOGO-JEFE-DE-PRODUCCI-N"/>
        <p className="info">Empresa de productos industriales</p>
        </div>
    </footer>
    </div>

    )
}

export default DomicilioCliente