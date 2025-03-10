"use client";
import { AlignCenter } from "lucide-react";

export default function Navbar({ collapsed, setCollapsed }) {
  return (
    <nav className="bg-gray-500 text-gray-200 shadow-md w-full">
      <div className="py-6 flex justify-between items-center w-full">
        <h1 className="text-2xl font-extrabold tracking-wide text-gray-100 ml-6">
          Portafolio
        </h1>

        <ul className="hidden md:flex space-x-6 mr-3">
          <li>
            <a href="#" className="hover:text-gray-800 transition duration-300 font-medium">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-800 transition duration-300 font-medium">
              Acerca
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-800 transition duration-300 font-medium">
              Contacto
            </a>
          </li>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-[80px] h-[40px] px-4 py-2 bg-gray-800 duration-300 ease-in-out text-white rounded flex items-center justify-center gap-2 hover:bg-gray-700"
          >
            <AlignCenter className="w-5 h-5" />
            <span className={`${collapsed ? "block" : "hidden"}`}>Menu</span>
          </button>

        </ul>
      </div>
    </nav>
  );
}
