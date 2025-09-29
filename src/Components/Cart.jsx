// import { FaTimes } from "react-icons/fa";

// const Cart = ({ open, toggleCart, cartItems }) => {
//   return (
//     <>
//       {/* Overlay oscuro */}
//       <div
//         onClick={toggleCart}
//         className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-20 ${
//           open ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//       />

//       {/* Panel carrito */}
//       <div
//         className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-xl z-30 transform transition-transform duration-300 ${
//           open ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center p-4 border-b">
//           <h2 className="text-lg font-bold text-[#000]">Mi carrito</h2>
//           <button onClick={toggleCart}>
//             <FaTimes className="text-xl  text-[#000] cursor-pointer" />
//           </button>
//         </div>

//         {/* Contenido */}
//         <div className="p-4 flex flex-col h-[calc(100%-120px)] overflow-y-auto">
//           {cartItems.length === 0 ? (
//             <p className="text-gray-500">Tu carrito está vacío</p>
//           ) : (
//             cartItems.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="flex gap-3 items-center border-b pb-3 mb-3"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-20 h-20 object-cover rounded"
//                 />
//                 <div className="flex-1">
//                   <h3 className="font-semibold text-sm">{item.name}</h3>
//                   <p className="text-gray-500 text-sm">
//                     Cantidad: {item.quantity}
//                   </p>
//                   <p className="font-bold">${item.price}</p>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Footer */}
//         <div className="p-4 border-t flex flex-col gap-2">
//           <button className="bg-black text-white w-full py-2 rounded-lg hover:bg-gray-800 cursor-pointer">
//             Realizar compra
//           </button>
//           <button className="border border-black w-full py-2 rounded-lg hover:bg-gray-100">
//             Ver más productos
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;
