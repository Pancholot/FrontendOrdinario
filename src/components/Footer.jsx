import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0D47A1] shadow-sm">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-center text-center">
          <a
            href="/index.html"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/assets/Logo.png" className="h-8" alt="Logo" />
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
              Esencia de Agua
            </span>
          </a>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-200 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-200">
          © 2025{" "}
          <a href="/index.html" className="hover:underline">
            EsenciadeAgua™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
