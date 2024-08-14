import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Bienvenida from './paginas/auth/bienvenida';
import Nosotros from "./paginas/auth/nosotros";
import Contacto from "./paginas/auth/contacto";
import MisVentas from "./paginas/auth/mis_ventas";
import Carrito from "./paginas/auth/carrito";
import DomicilioCliente from "./paginas/auth/domicilio_cliente";
import UsuariosAdmin from "./paginas/auth/usuarios_admin";
import Productos from "./paginas/auth/productos";
import VentasAdmin from "./paginas/auth/ventas_admin";
import DomicilioAdmin from "./paginas/auth/domicilios_admin";
import Registro from "./paginas/auth/registro";
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element={<Bienvenida/>}/>
          <Route path='/nosotros.js' exact element={<Nosotros/>}/>
          <Route path='/contacto.js' exact element={<Contacto/>}/>
          <Route path='/mis_ventas.js' exact element={<MisVentas/>}/>
          <Route path='/carrito.js' exact element={<Carrito/>}/>
          <Route path='/domicilio_cliente.js' exact element={<DomicilioCliente/>}/> 
          <Route path='/usuarios_admin.js' exact element={<UsuariosAdmin/>}/>
          <Route path='/productos.js' exact element={<Productos/>}/>  
          <Route path='/ventas_admin.js' exact element={<VentasAdmin/>}/> 
          <Route path='/domicilios_admin.js' exact element={<DomicilioAdmin/>}/>
          <Route path='/registro.js' exact element={<Registro/>}/>         
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
