"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Sidebar({ collapsed }) {
  const [showItems, setShowItems] = useState(!collapsed);

  // Controla la visibilidad del <ul> después de la animación
  useEffect(() => {
    if (!collapsed) {
      const timer = setTimeout(() => setShowItems(true), 800); // Espera 800ms (igual a `duration-800`)
      return () => clearTimeout(timer);
    } else {
      setShowItems(false);
    }
  }, [collapsed]);

  return (
    <div
      className={`h-screen bg-gray-500 text-white transition-all duration-800 ${
        collapsed ? "w-0 overflow-hidden" : "w-50"
      }`}
    >
      {showItems && (
        <ul className="space-y-2 transition-opacity duration-500 opacity-100">
          <li className="nav-item p-2">
            <Link className="block p-2 hover:bg-gray-700 transition duration-500 rounded" href="/">Home</Link>
          </li>
          <li className="nav-item p-3">
            <Link className="block p-2 hover:bg-gray-700 transition duration-500 rounded" href="/boton">Botón</Link>
          </li>
          <li className="nav-item p-3">
            <Link className="block p-2 hover:bg-gray-700 transition duration-500 rounded" href="/">Error</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
