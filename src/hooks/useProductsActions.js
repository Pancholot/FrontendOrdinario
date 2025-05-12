import { createProduct, updateProduct, deleteProduct } from '../api/controllerApi';
import { useState } from 'react';

const useProductsActions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addProducto = async (producto) => {
    setLoading(true);
    try {
      const nuevo = await createProduct(producto);
      return nuevo;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const editProducto = async (sku, producto) => {
    setLoading(true);
    try {
      const actualizado = await updateProduct(sku, producto);
      return actualizado;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const removeProducto = async (sku) => {
    setLoading(true);
    try {
      const eliminado = await deleteProduct(sku);
      return eliminado;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    addProducto,
    editProducto,
    removeProducto,
    loading,
    error
  };
};

export default useProductsActions