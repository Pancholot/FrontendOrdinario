import { useState } from "react";
import Navbar from "../../components/Navbar";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
import usePedido from "../../hooks/usePedido";

const Carrito = () => {
  const products = useFetchProducts();
  const [shoppingCart, setShoppingCart] = useState({});
  const [mostrarMensajeLogin, setMostrarMensajeLogin] = useState(false);
  const { enviarPedido, error, exito } = usePedido();
  const navigate = useNavigate();
  console.log(shoppingCart);
  return (
    <div>
      <Navbar />
      <div className="lg:grid lg:grid-cols-5 gap-6 p-4 mx-auto flex flex-col items-center bg-[#9eb1d0]">
        {/* Sección de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-1 col-span-4 items-center">
          {products.map((product) => (
            <Card
              product={product}
              key={product.sku}
              setShoppingCart={setShoppingCart}
            />
          ))}
        </div>
        {/* Sección de Checkout */}
        <div className="bg-[#2980b9] p-6 rounded-lg shadow-md w-full lg:w-1/5 text-center flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Carrito de Compras
          </h2>
          <div className="border-b pb-4">
            {products
              .filter((p) => shoppingCart[p.sku] > 0)
              .map((product, index) => (
                <div key={index}>
                  <p className="text-white">
                    {product.nombre}:<br />
                    Qty: {shoppingCart[product.sku]} - $
                    {(product.precio * shoppingCart[product.sku]).toFixed(2)}
                  </p>
                </div>
              ))}
          </div>
          <p className="text-white text-xl font-semibold mt-4">
            Total: $
            {products
              .reduce((acc, product) => {
                const qty = shoppingCart[product.sku] || 0;
                return acc + qty * product.precio;
              }, 0)
              .toFixed(2)}
          </p>
          <button
            onClick={async () => {
              const productosAComprar = Object.entries(shoppingCart)
                .filter(([, cantidad]) => cantidad > 0)
                .map(([sku, cantidad]) => ({
                  sku,
                  cantidad: Number(cantidad),
                }));

              if (productosAComprar.length === 0) {
                alert("No hay productos en el carrito.");
                return;
              }

              const token = localStorage.getItem("token");
              if (!token) {
                setMostrarMensajeLogin(true);
                return;
              }

              await enviarPedido(productosAComprar);
              if (!error) {
                setShoppingCart({});
                localStorage.removeItem("carrito");
              }
            }}
            className="w-full mt-4 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800"
          >
            Proceder con Compra
          </button>

          {mostrarMensajeLogin && (
            <p className="text-yellow-200 mt-2 text-sm">
              Debes iniciar sesión para realizar el pedido.{" "}
              <span
                className="underline cursor-pointer hover:text-yellow-100"
                onClick={() => navigate("/login")}
              >
                Ir a login
              </span>
            </p>
          )}

          {exito && <p className="text-green-200 mt-2 text-sm">{exito}</p>}
          {error && <p className="text-red-300 mt-2 text-sm">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Carrito;
