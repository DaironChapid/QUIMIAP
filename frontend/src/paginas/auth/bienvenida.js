import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/style_bienvenida.css';

const Bienvenida = () =>{

  const [formData, setFormData] = useState({
    nombre_completo: '',
    direccion: '',
    tipo_doc: '',
    documento: '',
    telefono: '',
    correo_elec: ''
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
      console.log("Éxito:", response.data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  }

  return(
    <div>
      <div className="container">
        <header className="py-3 mb-4 border-bottom">
          <div className="d-flex align-items-center">
            <img src="https://i.ibb.co/dbTBHkz/LOGO-JEFE-DE-PRODUCCI-N.jpg" alt="LOGO-JEFE-DE-PRODUCCI-N" className="logo"/>
          </div>
          <ul className="nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link to="/" className="nav-link px-2">Inicio</Link></li>
            <li className="nav-item"><Link to="/nosotros" className="nav-link px-2">Nosotros</Link></li>
            <li className="nav-item"><Link to="/contacto" className="nav-link px-2">Contacto</Link></li>
            <li className="nav-item"><Link to="/carrito" className="nav-link px-2">Carrito de compras</Link></li>
            <li className="nav-item"><Link to="/mis_ventas" className="nav-link px-2">Mis ventas</Link></li>
          </ul>
          <div>
            <button type="button" className="btn btn-primary me-2 btn-custom" data-bs-toggle="modal" data-bs-target="#registerModal">
              Regístrate
            </button>

            {/* Modal de registro */}
            <div className="modal fade" id="registerModal" tabIndex={-1} aria-labelledby="registerModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="registerModalLabel">Regístrate</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">
                    <form onSubmit={enviar}>
                      <div className="mb-3">
                        <label htmlFor="txt1" className="form-label">Nombre completo</label>
                        <input type="text" className="form-control" id="txt1" name="nombre_completo"
                          value={formData.nombre_completo} onChange={handleChange} required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="txt2" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id="txt2" name="direccion"
                          value={formData.direccion} onChange={handleChange} required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="txt3" className="form-label">Tipo de documento</label>
                        <input type="text" className="form-control" id="txt3" name="tipo_doc"
                          value={formData.tipo_doc} onChange={handleChange} required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="txt4" className="form-label">Documento</label>
                        <input type="number" className="form-control" id="txt4" name="documento"
                          value={formData.documento} onChange={handleChange} required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="txt5" className="form-label">Teléfono</label>
                        <input type="number" className="form-control" id="txt5" name="telefono"
                          value={formData.telefono} onChange={handleChange} required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="txt6" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" id="txt6" name="correo_elec"
                          value={formData.correo_elec} onChange={handleChange} required />
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
            {/* Modal de inicio de sesión */}
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
                        <input type="text" className="form-control" id="exampleInputEmail1" required />
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
  {/* Carrusel para mostrar productos*/}
  <section>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacCO/547757_01/w=1500,h=1500,fit=pad" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="h5">Detergente líquido</h5>
            <p>Detergente liquido para lavar la ropa multiusos</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://www.kipclin.com/images/virtuemart/product/KIP-PQP-DESEN00004.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="h5">Desengrasante</h5>
            <p>Desengrasante industrial multiusos</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://pqpprofesional.com/wp-content/uploads/2022/04/Blanqueador-Clorado-4L.webp" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="h5">Blanqueador clorado</h5>
            <p>Blanqueador clorado multiusos</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  </section>
  <br />
  {/* Sección de productos organizados en filas */}
  <section>
    <div className="row">
      <div className="col-md-4">
        <div className="card" style={{width: '100%'}}>
          <img src="https://www.multiexpress.com.co/wp-content/uploads/2020/08/641-Limpiador-Desinfectante-para-Piso-2lts.jpg" className="card-img-top img2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Limpiador de pisos</h5>
            <p className="card-text">Los limpiadores de piso son productos diseñados para eliminar suciedad, manchas y bacterias de superficies como baldosas, madera, linóleo y laminado.</p>
            <Link to="#" className="btn btn-primary btn-custom">Agregar al carrito</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" style={{width: '100%'}}>
          <img src="https://www.pintulac.com.ec/media/catalog/product/cache/01d5a80ef248257bf9991bbfc9cf4de4/w/3/w320-gl.jpg" className="card-img-top img1" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Alcohol industrial</h5>
            <p className="card-text">Es eficaz para eliminar bacterias, virus y hongos, y se evapora rápidamente, dejando los pisos secos y sin residuos.</p>
            <Link to="#" className="btn btn-primary btn-custom">Agregar al carrito</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" style={{width: '100%'}}>
          <img src="https://brillo.com.co/wp-content/uploads/2020/09/CERA_POLI_-_ECO_BRILLO_PREMIUM-01.jpg" className="card-img-top img1" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Cera polimerica</h5>
            <p className="card-text">La cera polimérica es un tipo de recubrimiento para pisos que proporciona una capa protectora duradera y brillante. </p>
            <Link to="#" className="btn btn-primary btn-custom">Agregar al carrito</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-md-4">
        <div className="card" style={{width: '100%'}}>
          <img src="https://www.fab.com.co/images/h0nadbhvm6m4/HPaIwPanRnnzAK8wfVigq/7b3960bd32296ba3232e1e4193a7cce6/RkFCX0xpX3F1aWRvX1VsdHJhX0ZsYXNoX0JvdGVsbGEucG5n/1200w-1200h/fab-l%C3%ADquido-ultra-flash-botella-pack-shot.jpg" className="card-img-top img1" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Detergente líquido</h5>
            <p className="card-text">El detergente líquido es un limpiador concentrado en forma líquida que se usa para eliminar la suciedad, manchas y residuos de diversas superficies, incluyendo pisos.</p>
            <Link to="#" className="btn btn-primary btn-custom">Agregar al carrito</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" style={{width: '100%'}}>
          <img src="https://www.kipclin.com/images/virtuemart/product/Blanqueador%20oxigenado%204L%20(1)-min3.png" className="card-img-top img1" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Blanqueador oxigenado</h5>
            <p className="card-text">El blanqueador con oxígeno es un agente limpiador que utiliza peróxidos o compuestos a base de oxígeno para desinfectar y blanquear superficies. </p>
            <Link to="#" className="btn btn-primary btn-custom">Agregar al carrito</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" style={{width: '100%'}}>
          <img src="https://www.tpcbio.com/wp-content/uploads/2021/02/SUAVIZANTE-TEXTIL.png" className="card-img-top img1" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Suavizante textil</h5>
            <p className="card-text">El suavizante textil es un producto diseñado para mejorar la suavidad y la flexibilidad de las telas, además de reducir la estática y facilitar el planchado.</p>
            <Link to="#" className="btn btn-primary btn-custom">Agregar al carrito</Link>
          </div>
        </div>
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
</div>


    )
}

export default Bienvenida;
