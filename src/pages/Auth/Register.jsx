import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Register = () => {
  const { register, error } = useAuth();
  const navigate = useNavigate();

  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
    direccion: "",
  });

  const handleChange = (e) => {
    setNuevoUsuario({ ...nuevoUsuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usuario = await register(nuevoUsuario);
      if (usuario.token) {
        navigate("/");
      }
    } catch {
      throw new Error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-full mt-36 flex justify-center items-center">
        <div className="wave absolute bottom-0 left-0 w-full h-[100px] z-5" />
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 shadow-lg rounded-lg p-8 w-full max-w-sm z-10"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-black">
            Crear Cuenta
          </h2>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={nuevoUsuario.nombre}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo"
            value={nuevoUsuario.correo}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <input
            type="password"
            name="contraseña"
            placeholder="Contraseña"
            value={nuevoUsuario.contraseña}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            value={nuevoUsuario.direccion}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
          {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
