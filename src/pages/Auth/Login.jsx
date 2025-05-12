import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Login = () => {
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const [credenciales, setCredenciales] = useState({
    correo: "",
    contraseña: "",
  });

  const handleChange = (e) => {
    setCredenciales({ ...credenciales, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usuario = await login(credenciales);
      if (usuario) {
        navigate("/productos");
      } else {
        alert("No tienes permisos para acceder al panel de stock.");
      }
    } catch {
      throw new Error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-full mt-44 flex justify-center items-center">
        <div className="wave absolute bottom-0 left-0 w-full h-[100px] z-5" />
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 shadow-lg rounded-lg p-8 w-full max-w-sm z-10"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-black">
            Iniciar Sesión
          </h2>
          <input
            type="email"
            name="correo"
            placeholder="Correo"
            value={credenciales.correo}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <input
            type="password"
            name="contraseña"
            placeholder="Contraseña"
            value={credenciales.contraseña}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
          {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
