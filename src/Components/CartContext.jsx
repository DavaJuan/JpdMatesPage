// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);
// // Proveedor del contexto
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Agregar producto
//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         // si ya está, aumentamos cantidad
//         return prev.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       // si no está, lo agregamos
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   // Quitar producto
//   const removeFromCart = (id) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   // Vaciar carrito
//   const clearCart = () => setCartItems([]);

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
