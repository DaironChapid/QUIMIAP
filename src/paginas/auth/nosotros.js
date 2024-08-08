import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/style_nosotros.css'
const Nosotros = () =>{
    return(
        <div>
  <div className="container">
    <header className="py-3 mb-4 border-bottom">
      <div className="d-flex align-items-center">
      <img src="https://i.ibb.co/dbTBHkz/LOGO-JEFE-DE-PRODUCCI-N.jpg" alt="LOGO-JEFE-DE-PRODUCCI-N" class="logo"/>
      </div>
      <ul className="nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><a href="/" className="nav-link px-2">Inicio</a></li>
        <li className="nav-item"><a href="nosotros.js" className="nav-link px-2">Nosotros</a></li>
        <li className="nav-item"><a href="contacto.js" className="nav-link px-2">Contacto</a></li>
        <li className="nav-item"><a href="carrito.js" className="nav-link px-2">Carrito de compras</a></li>
        <li className="nav-item"><a href="mis_ventas.js" className="nav-link px-2">Mis ventas</a></li>
      </ul>
      <div>
        <button type="button" className="btn btn-primary me-2 btn-custom" data-bs-toggle="modal" data-bs-target="#registerModal">
          Regístrate
        </button>
        <div className="modal fade" id="registerModal" tabIndex={-1} aria-labelledby="registerModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="registerModalLabel">Regístrate</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="txt1" className="form-label">Nombre completo</label>
                    <input type="text" className="form-control" id="txt1" aria-describedby="emailHelp" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="txt2" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="txt2" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="txt3" className="form-label">Tipo de documento</label>
                    <input type="text" className="form-control" id="txt3" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="txt4" className="form-label">Documento</label>
                    <input type="number" className="form-control" id="txt4" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="txt5" className="form-label">Teléfono</label>
                    <input type="number" className="form-control" id="txt5" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="txt6" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="txt6" required />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="submit" className="btn btn-primary btn-custom">Guardar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-primary btn-custom" data-bs-toggle="modal" data-bs-target="#loginModal">
          Inicia sesión
        </button>
        <div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="loginModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="loginModalLabel">Inicia sesión</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nombre de usuario</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" required />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="submit" className="btn btn-primary btn-custom">Inicia sesión</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section>
      <h1>QUIMIAP: Innovación y Calidad en Productos de Aseo</h1>
      <p>En QUIMIAP, nos dedicamos a proporcionar soluciones de limpieza de alta calidad que marcan la diferencia. Nuestra pasión por la higiene y el cuidado nos impulsa a ofrecer productos innovadores y eficaces, diseñados para satisfacer las necesidades más exigentes. Sabemos que la limpieza es esencial para la salud y el bienestar, y trabajamos arduamente para garantizar que cada producto cumpla con los más altos estándares de calidad.</p>
      <p>Utilizamos ingredientes de primera categoría y procesos de producción avanzados para asegurar que nuestros productos sean eficaces y seguros. Estamos en la vanguardia de la industria, desarrollando constantemente nuevas fórmulas y productos para ofrecer soluciones de limpieza más eficientes y amigables con el medio ambiente. Nuestro compromiso con la innovación nos permite proporcionar productos que no solo limpian, sino que también protegen y mejoran los espacios donde se utilizan.</p>
      <p>Creemos que un buen servicio es fundamental para el éxito. Nuestro equipo está siempre dispuesto a ayudar y a proporcionar el apoyo necesario para garantizar que nuestros clientes obtengan los mejores resultados posibles. Ya sea para la limpieza industrial, comercial o residencial, en QUIMIAP estamos aquí para ofrecer productos de aseo que realmente marcan la diferencia.</p>
    </section>
  </div>
  <section className="sec1">
    <div className="row">
      <div className="col-md-4">
        <h5>Misión</h5>
        <p className="p1">
          Ofrecemos soluciones de limpieza innovadoras y eficientes para mejorar la higiene y el bienestar de nuestros clientes. Utilizamos ingredientes y procesos avanzados para garantizar productos seguros y eficaces, promoviendo un entorno más limpio y saludable.</p>
      </div>
      <div className="col-md-5">
        <h5>Visión</h5>
        <p className="p1">Ser el líder en la industria de productos de aseo, reconocido por nuestra innovación, calidad y compromiso con el medio ambiente. Aspiramos a establecer relaciones duraderas con nuestros clientes, basadas en la confianza y la excelencia en el servicio</p>
      </div>
      <div className="col-md-3">
        <h5>Valores</h5>
        <p className="p2">
          Calidad<br />
          Innovación<br />
          Compromiso<br />
          Responsabilidad Ambiental
        </p>
      </div>
    </div>
  </section>
  <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
      <img src="https://i.ibb.co/dbTBHkz/LOGO-JEFE-DE-PRODUCCI-N.jpg" alt="LOGO-JEFE-DE-PRODUCCI-N" class="logo"/>
      <span className="mb-3 mb-md-0 text-body-secondary">© 2024 QuimiAp, Inc</span>
      </div>
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><Link className="text-body-secondary" to="#">            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg></Link></li>
        <li className="ms-3"><Link className="text-body-secondary" to="#"><svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg></Link></li>
        <li className="ms-3"><Link className="text-body-secondary" to="#"><svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg></Link></li>
      </ul>
    </footer>
  </div>
</div>

    )

}

export default Nosotros