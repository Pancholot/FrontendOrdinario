import { procesarPedido } from "../api/controllerApi";
import { useState } from "react";

const usePedido = () => {
  const [error, setError] = useState(null);
  const [exito, setExito] = useState(null);

  const enviarPedido = async (productos) => {
    try {
      setError(null);
      setExito(null);
      const response = await procesarPedido(productos);
      setExito(response.mensaje);
    } catch (err) {
      setError(err.response?.data?.message || "Error al procesar el pedido");
    }
  };

  return { enviarPedido, error, exito };
};

export default usePedido;
