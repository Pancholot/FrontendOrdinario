import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { Link } from "react-router-dom";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { copyPhoneNumber } from "../../utils/sharedFunctions";
import useSendForm from "../../hooks/useSendForm";
import { useState } from "react";

const Home = () => {
  const products = useFetchProducts();
  const { handleSendForm, loading, error, success } = useSendForm();
  const [form, setForm] = useState({ nombre: "", mail: "", asunto: "" });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSendForm(form);
    setForm({ nombre: "", mail: "", asunto: "" });
  };

  return (
    <div>
      <WhatsAppIcon />
      <Navbar />
      {/*Bienvenida*/}
      <div className="relative px-4 py-3 overflow-hidden bg-[#9eb1d0]">
        {/* Fondo animado */}
        <div className="wave absolute bottom-0 left-0 w-full h-[100px] z-5" />
        <h1 className="mb-4">
          BIENVENIDO A ESENCIA DE AGUA
          <img
            className="rounded-t-lg w-10 h-10 inline-block ml-3"
            src="/assets/Logo.png"
            alt="logo"
          />
        </h1>
        <h2>
          ¡Nuestra tienda en línea donde podrás experimentar la verdadera
          esencia pura del agua!
        </h2>
        {/*Vista Previa de Productos*/}
        <div className="relative z-10 flex flex-wrap justify-center gap-10 mt-12 mb-16">
          {products.slice(0, 3).map((product, key) => (
            <Link
              to="/productos"
              key={key}
              className="w-64 h-80 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={product.imagenUrl}
                alt={product.nombre}
                className="rounded-xl shadow-2xl w-full h-full object-cover"
              />
            </Link>
          ))}
        </div>
      </div>
      {/* Sobre Nosotros */}
      <div className="flex flex-col w-full bg-[#004f81] h-auto p-8 justify-center items-center text-center text-white">
        <h1 className="text-3xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="max-w-3xl text-lg">
          En Esencia de Agua, nos dedicamos a proporcionar agua purificada de la
          más alta calidad, garantizando frescura, seguridad y bienestar en cada
          gota. Nuestro compromiso es ofrecer un producto que cumpla con los más
          altos estándares de higiene y pureza, asegurando que nuestros clientes
          disfruten de un agua saludable y libre de impurezas.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Nuestros Valores:</h2>
        <ul className="text-lg text-left max-w-3xl">
          <li className="mt-2">
            <strong>Calidad</strong> ⮕ Procesamos el agua con estrictos
            controles para garantizar su pureza y frescura.
          </li>
          <li className="mt-2">
            <strong>Compromiso</strong> ⮕ Trabajamos para brindar un servicio
            confiable, seguro y accesible para todos.
          </li>
          <li className="mt-2">
            <strong>Sostenibilidad</strong> ⮕ Priorizamos prácticas responsables
            con el medio ambiente en cada etapa de producción.
          </li>
          <li className="mt-2">
            <strong>Cercanía</strong> ⮕ Nos preocupamos por el bienestar de
            nuestros clientes, ofreciendo atención personalizada y eficiente.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6">Nuestro Compromiso</h2>
        <p className="max-w-3xl text-lg">
          Desde el abastecimiento hasta la entrega, utilizamos tecnología
          avanzada en filtración y purificación, asegurando que cada botella o
          garrafón que llega a nuestros clientes sea completamente segura y de
          excelente sabor. Además, promovemos el uso responsable del agua y
          materiales reciclables para reducir nuestro impacto ambiental.
        </p>
        <p className="max-w-3xl text-lg font-bold mt-6">
          Si buscas agua de calidad, confiable y con un servicio excepcional,
          somos tu mejor opción.
        </p>
      </div>
      {/* Contenedor de la Instalación (Futuro Sponsor-track) */}
      <div className="w-full bg-gray-900 py-6 flex justify-center overflow-hidden">
        <div className="flex space-x-8">
          <img
            src="/assets/Instalacion1.jpg"
            className="h-42 w-auto rounded-lg shadow-lg"
            alt="Instalación 1"
          />
          <img
            src="/assets/Instalacion2.jpg"
            className="h-42 w-auto rounded-lg shadow-lg"
            alt="Instalación 2"
          />
          <img
            src="/assets/Instalacion3.jpg"
            className="h-42 w-auto rounded-lg shadow-lg"
            alt="Instalación 3"
          />
          <img
            src="/assets/Instalacion4.jpg"
            className="h-42 w-auto rounded-lg shadow-lg"
            alt="Instalación 4"
          />
          <img
            src="/assets/Instalacion5.jpg"
            className="h-42 w-auto rounded-lg shadow-lg"
            alt="Instalación 5"
          />
          <img
            src="/assets/Instalacion6.jpg"
            className="h-42 w-auto rounded-lg shadow-lg"
            alt="Instalación 6"
          />
        </div>
      </div>
      {/*Linea de Colores*/}
      <div className="flex w-full">
        <div className="w-1/3 bg-[#1f618d] h-12" />
        <div className="w-1/3 bg-[#2874a6] h-12" />
        <div className="w-1/3 bg-[#2980b9] h-12" />
      </div>
      {/*Seccion de Contacto*/}
      <div id="contacto" className="flex flex-col sm:flex-row w-full">
        {/*Redes Sociales e Información de Contacto*/}
        <div className="sm:w-1/2 w-full bg-[#154360] flex flex-col justify-center items-center p-16 text-center">
          <h4 className="text-2xl font-bold mb-4 text-white">Contáctanos</h4>
          <div className="flex items-center space-x-2">
            <p className="text-white">
              Teléfono: <span id="phone-number">+52 999 235 6600</span>
            </p>
            <button
              onClick={copyPhoneNumber}
              className="text-gray-500 hover:text-gray-300 hover:cursor-pointer"
            >
              <img
                src="/assets/copiar-icono.png"
                alt="copiar"
                className="w-5 h-5 invert"
              />
            </button>
          </div>
          <p className="text-white">Email: esenciadeagua@gmail.com</p>
          <p className="text-white">Dirección: Las Américas, Mérida</p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com/share/18zhiQiF9B/?mibextid=wwXIfr"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/facebook.png"
                alt="Facebook"
                className="h-10 w-10 invert"
              />
            </a>
            <a
              href="https://www.instagram.com/esenciadeagua.mid"
              className="px-4 py-2 hover:bg-[#A020F0] bg-pink-500 rounded-lg"
              target="_blank"
            >
              <img
                src="/assets/instagram.png"
                alt="Instagram"
                className="h-10 w-10 invert"
              />
            </a>
          </div>
        </div>
        {/*Parte para Contactarnos*/}
        <div className="sm:w-1/2 w-full bg-[#9eb1d0] flex flex-col justify-center items-center p-6 shadow-lg">
          <h4 className="text-2xl font-bold mb-4">Envíanos un Mensaje</h4>
          <form className="w-3/4" onSubmit={handleFormSubmit}>
            <input
              name="nombre"
              value={form.nombre}
              onChange={handleInputChange}
              type="text"
              className="w-full p-2 mb-3 border border-gray-300 rounded-lg"
              placeholder="Su Nombre"
              required
            />
            <input
              name="mail"
              value={form.mail}
              onChange={handleInputChange}
              type="mail"
              className="w-full p-2 mb-3 border bg-white border-gray-300 rounded-lg"
              placeholder="Su Mail"
              required
            />
            <textarea
              name="asunto"
              value={form.asunto}
              onChange={handleInputChange}
              className="w-full p-2 mb-3 border border-gray-300 rounded-lg"
              placeholder="Asunto"
              rows={3}
              required
            />
            <button
              type="submit"
              className="bg-[#154360] text-white py-2 px-4 w-full rounded-lg shadow-md hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Mandar Mensaje"}
            </button>
            {success && <p className="text-green-600 mt-2">{success}</p>}
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
