import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import { CarritoProvider } from './paginas/auth/CarritoContext'; // Solo importa el proveedor aquí

function App() {
  return (
    <CarritoProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Bienvenida />} />
          <Route path='/nosotros.js' element={<Nosotros />} />
          <Route path='/contacto.js' element={<Contacto />} />
          <Route path='/mis_ventas.js' element={<MisVentas />} />
          <Route path='/carrito.js' element={<Carrito />} />
          <Route path='/domicilio_cliente.js' element={<DomicilioCliente />} />
          <Route path='/usuarios_admin.js' element={<UsuariosAdmin />} />
          <Route path='/productos.js' element={<Productos />} />
          <Route path='/ventas_admin.js' element={<VentasAdmin />} />
          <Route path='/domicilios_admin.js' element={<DomicilioAdmin />} />
          <Route path='/registro.js' element={<Registro />} />
        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;
