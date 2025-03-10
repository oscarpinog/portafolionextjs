export default function Navbar() {
  return (
    <nav className="bg-gray-500 text-gray-200 shadow-md">
      <div className="container mx-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide text-gray-100">Portafolio</h1>

        {/* Links de Navegación */}
        <ul className="hidden md:flex space-x-6">
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
        </ul>
      </div>
    </nav>
  );
}
