import { useState } from "react";
import { loginUser, registerUser } from "../api/controllerApi";

const useAuth = () => {
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState(null);

  const login = async (credenciales) => {
    setError(null);
    try {
      const data = await loginUser(credenciales);
      setUsuario(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data));
      return data;
    } catch (err) {
      setError("Credenciales incorrectas");
      throw err;
    }
  };

  const register = async (credenciales) => {
    setError(null);
    try {
      const data = await registerUser(credenciales);
      setUsuario(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data));
      return data;
    } catch (err) {
      setError("Credenciales incorrectas");
      throw err;
    }
  };

  return { login, usuario, error, register};
};

export default useAuth;
