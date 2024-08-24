// CarritoContext.js
import React, { createContext, useState } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    // Verifica si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.producto === producto.producto);
    
    if (productoExistente) {
      // Si ya existe, incrementa la cantidad
      setCarrito(carrito.map(item =>
        item.producto === producto.producto
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ));
    } else {
      // Si no existe, añade el producto con cantidad 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
  };

  const cambiarCantidad = (index, cantidad) => {
    if (cantidad <= 0) return;
    setCarrito(carrito.map((item, i) =>
      i === index ? { ...item, cantidad } : item
    ));
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, cambiarCantidad }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContext;
