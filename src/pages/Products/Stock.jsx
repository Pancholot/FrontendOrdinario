import React, { useState } from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import useProductsActions from "../../hooks/useProductsActions";
import ProductoForm from "../../components/ProductoForm";
import Navbar from "../../components/Navbar";
import WhatsAppIcon from "../../components/WhatsAppIcon";

const Stock = () => {
  const productos = useFetchProducts();
  const [productoEditando, setProductoEditando] = useState(null);
  const { addProducto, editProducto, removeProducto, loading } =
    useProductsActions();

  const handleSave = async (producto) => {
    if (productoEditando) {
      await editProducto(productoEditando.sku, producto);
    } else {
      await addProducto(producto);
    }
    setProductoEditando(null);
    window.location.reload();
  };

  const handleDelete = async (sku) => {
    await removeProducto(sku);
    window.location.reload();
  };

  const handleEdit = (producto) => {
    setProductoEditando(producto);
  };

  return (
    <div>
      <Navbar />
      <WhatsAppIcon />
      <div className="p-6 max-w-4xl mx-auto ">
        <ProductoForm producto={productoEditando} onSave={handleSave} />
        <table className="w-full mt-6 border">
          <thead>
            <tr className="bg-gray-300">
              <th>SKU</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p) => (
              <tr key={p.sku} className="text-center border-t">
                <td className="px-2 bg-gray-50">{p.sku}</td>
                <td className="px-2 bg-gray-50">{p.nombre}</td>
                <td className="px-2 bg-gray-50">${p.precio}</td>
                <td className="px-2 bg-gray-50">{p.cantidad}</td>
                <td className="px-2 bg-gray-50">
                  <button
                    onClick={() => handleEdit(p)}
                    className="text-blue-600 mx-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(p.sku)}
                    className="text-red-600 mx-2"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {loading && <p className="text-gray-500">Cargando...</p>}
      </div>
    </div>
  );
};

export default Stock;
