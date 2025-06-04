
import React from "react";
import logo from "/public/Logo_Dutra_Rodrigues_Simbolo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logotipo" className="h-10 w-auto" />
        <h1 className="text-lg md:text-xl font-semibold text-gray-800">
          Dr. Thiago Broggin Dutra Rodrigues
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="https://www.instagram.com/seuperfil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-500 transition-colors"
        >
          <i className="fab fa-instagram text-xl"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
