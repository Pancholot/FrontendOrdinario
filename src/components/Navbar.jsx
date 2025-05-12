import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full sticky top-0 zborder-b border-gray-200 dark:border-gray-600 bg-[#0D47A1] z-50">
      <div className="max-w-screen-xl container-fluid flex flex-wrap items-center justify-between mx-auto px-4 md:px-0 md:py-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/assets/Logo.png" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Esencia de Agua
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
          <Link
            to="/carrito"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center cursor-pointer"
          >
            <img
              src="/assets/carrito-de-compras.png"
              width="40px"
              alt="Carrito"
              style={{ filter: "invert(1)" }}
            />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 w-12 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Abrir menú</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-[#0D47A1] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white rounded-md hover:bg-blue-900 md:bg-transparent md:p-2"
              >
                Página Principal
              </Link>
            </li>
            <li>
              <Link
                to="/productos"
                className="block py-2 px-3 text-white rounded-md hover:bg-blue-900 md:p-2"
              >
                Productos
              </Link>
            </li>
            <li>
              <HashLink
                to="/#contacto"
                smooth
                className="block py-2 px-3 text-white rounded-md hover:bg-blue-900 md:p-2"
              >
                Contacto
              </HashLink>
            </li>
            {token && (
              <>
                {usuario.esAdmin && (
                  <li>
                    <Link
                      to="/stock"
                      className="block py-2 px-3 text-white rounded-md hover:bg-blue-900 md:p-2"
                    >
                      Stock
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    to="#"
                    onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem("usuario");
                      window.location.reload(); // 🔁 recarga toda la página
                    }}
                    className="block py-2 px-3 text-white rounded-md hover:bg-blue-900 md:p-2"
                  >
                    LogOut
                  </Link>
                </li>
              </>
            )}
            {!token && (
              <>
                <li>
                  <Link
                    to="/logIn"
                    className="block py-2 px-3 text-white rounded-md hover:bg-blue-900 md:p-2"
                  >
                    LogIn
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="block py-2 px-3 text-white rounded-md hover:bg-blue-900 md:p-2"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
