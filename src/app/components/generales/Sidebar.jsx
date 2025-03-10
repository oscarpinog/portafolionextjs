import Link from "next/link";

export function Sidebar() {
    return (
      <aside className="w-64 h-screen bg-gray-500 text-white p-4">
        {/* <h2 className="text-lg font-bold">Menú</h2> */}
            <ul className="mt-4 space-y-2 ">
                <li className="nav-item p-2">
                    <Link className="block p-2 hover:bg-gray-700 transition duration-500 rounded" href="/">Home</Link>
                </li>
                <li className="nav-item p-2">
                    <Link className="block p-2 hover:bg-gray-700 transition duration-500 rounded" href="/boton">boton</Link>
                </li>
                <li className="nav-item p-2">
                    <Link className="block p-2 hover:bg-gray-700 transition duration-500 rounded" href="/error">Error</Link>
                </li>
            </ul>
      </aside>
    );
  }export default Sidebar;