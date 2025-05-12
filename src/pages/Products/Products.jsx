import React from "react";
import Navbar from "../../components/Navbar";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useFetchProducts();
  const AlcalinaProducts = products.filter(
    (product) => product && product.nombre.toLowerCase().includes("alcalina")
  );

  return (
    <div>
      <WhatsAppIcon />
      <Navbar />
      {/* Agua Alcalina */}

      <div className="container-fluid flex flex-col md:flex-row items-center border border-gray-700 shadow-sm bg-gray-800 p-6 w-full">
        {/* Carrusel */}
        <div className="w-full md:w-2/5">
          <Carousel
            slideInterval={5000}
            slide={true}
            indicators
            className="h-[500px] rounded-lg overflow-hidden"
          >
            {AlcalinaProducts.map((prod, index) => (
              <>
                <img
                  key={index}
                  src={prod.imagenUrl}
                  alt={prod.nombre}
                  className="w-full h-auto"
                />
                <span className="absolute bottom-4 right-4 bg-gray-800 text-white text-lg font-semibold px-4 py-2 rounded-lg shadow-md">
                  ${prod.precio}
                </span>
              </>
            ))}
          </Carousel>
        </div>
        {/* Descripción */}
        <div className="flex flex-col justify-center text-center p-6 w-full md:w-3/5">
          <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Beneficios del Agua Alcalina
          </h5>
          <p className="mb-6 producto">
            El agua alcalina puede ayudar a neutralizar la acidez, mejorar la
            hidratación y aportar propiedades antioxidantes. Se cree que
            favorece la digestión, protege la salud ósea y mejora el rendimiento
            físico. Aunque tiene beneficios potenciales, la evidencia científica
            es limitada, por lo que su consumo debe ser complementario a un
            estilo de vida saludable.
          </p>
          <div className="flex justify-end w-full">
            <Link
              to="/carrito"
              className="px-5 py-3 text-lg font-medium text-white bg-[#1f618d] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Comprar
              <svg
                className="w-4 h-4 inline-block ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      {/*Agua Purificada*/}
      <div className="container-fluid flex flex-col md:flex-row items-center bg-[#2980b9] border border-[#2874a6] shadow-sm p-6 w-full">
        <div className="flex flex-col justify-center text-center p-6 w-full md:w-3/5">
          <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Proceso de Purificación del Agua
          </h5>
          <p className="mb-6 producto">
            En una planta de agua, el proceso de purificación incluye
            pretratamiento para eliminar sólidos grandes, coagulación y
            floculación para agrupar impurezas, sedimentación y filtración para
            remover partículas y desinfección con cloro, ozono o luz UV para
            eliminar microorganismos, garantizando agua potable segura.{" "}
          </p>
          <div className="flex justify-end w-full">
            <Link
              to="/carrito"
              className="px-5 py-3 text-lg font-medium text-white bg-gray-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Comprar
              <svg
                className="w-4 h-4 inline-block ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="relative w-full md:w-2/5">
          <img
            className="object-cover w-full h-[500px] rounded-lg"
            src="/assets/agua.png"
            alt="Agua Purificada"
          />
          <span className="absolute bottom-4 right-4 bg-gray-800 text-white text-lg font-semibold px-4 py-2 rounded-lg shadow-md">
            $29.99
          </span>
        </div>
      </div>
      {/*Bolsa de Hielos*/}
      <div className="container-fluid flex flex-col md:flex-row items-center bg-[#1f618d] border border-[#2874a6] shadow-sm p-6 w-full">
        <div className="relative w-full md:w-2/5">
          <img
            className="object-cover w-full h-[500px] rounded-lg"
            src="/assets/bolsa-hielo-01.png"
            alt="Bolsa de Hielos"
          />
          <span className="absolute bottom-4 right-4 bg-gray-800 text-white text-lg font-semibold px-4 py-2 rounded-lg shadow-md">
            $9.99
          </span>
        </div>
        <div className="flex flex-col justify-center text-center p-6 w-full md:w-3/5">
          <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Nuestras Bolsas de Hielos
          </h5>
          <p className="mb-6 producto">
            Ofrecemos bolsas de hielo de alta calidad, ideales para conservar la
            frescura de alimentos, bebidas y usos comerciales. Nuestro hielo es
            purificado y cristalino, producido bajo estrictos estándares de
            higiene para garantizar su seguridad y durabilidad. Disponemos de
            diferentes presentaciones para adaptarnos a las necesidades de
            hogares, negocios y eventos.
          </p>
          <div className="flex justify-end w-full">
            <Link
              to="/carrito"
              className="px-5 py-3 text-lg font-medium text-white bg-gray-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Comprar
              <svg
                className="w-4 h-4 inline-block ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
