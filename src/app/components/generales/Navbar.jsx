"use client";
import { AlignCenter } from "lucide-react";
import { useState } from "react";

export default function Navbar({ collapsed, setCollapsed }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-500 text-gray-200 shadow-md w-full">
      <div className="py-6 flex justify-between items-center w-full px-4">
        <div className="flex items-center gap-4">
          {/* Botón para colapsar el Sidebar */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-[80px] h-[40px] bg-gray-800 duration-300 ease-in-out text-white rounded flex items-center justify-center hover:bg-gray-700"
          >
            {/* <AlignCenter className="w-5 h-5" /> */}
            ☰
            <span className={`${collapsed ? "block ml-2" : "hidden"}`}>Menu</span>
          </button>
          <h1 className="text-2xl font-extrabold tracking-wide text-gray-100">
            Portafolio
          </h1>
        </div>

        {/* Botón para mostrar el menú en móviles */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Menú de navegación (centrado y alineado correctamente) */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-500 md:bg-transparent md:flex md:items-center md:space-x-6 p-4 md:p-0 transition-all duration-300 ease-in-out ${
            menuOpen ? "flex flex-col items-center gap-4" : "hidden md:flex"
          }`}
        >
          <li>
            <a href="#" className="block px-4 py-2 hover:text-gray-800 transition duration-300 font-medium">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:text-gray-800 transition duration-300 font-medium">
              Acerca
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:text-gray-800 transition duration-300 font-medium">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
