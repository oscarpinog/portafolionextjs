import Link from "next/link";

export function Footer() {
    return (
      <footer className="bg-gray-500 text-white py-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo y Nombre */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">Mi Portafolio</h2>
              <p className="text-sm text-gray-400">© 2024 Todos los derechos reservados.</p>
            </div>
  
            {/* Links de navegación */}
            <nav className="flex space-x-6">
            <li className="nav-item p-2">
                    <Link className="btn btn-secondary  d-block w-100 btn-lg active" href="/boton">Home</Link>
            </li>
            <li className="nav-item p-2">
                    <Link className="btn btn-secondary  d-block w-100 btn-lg active" href="/">Home</Link>
            </li>
            <li className="nav-item p-2">
                    <Link className="btn btn-secondary  d-block w-100 btn-lg active" href="/">Home</Link>
            </li>
            </nav>
  
            {/* Redes Sociales */}
            <div className="flex space-x-4">
                <p>Redes sociales</p>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  export default Footer;
  